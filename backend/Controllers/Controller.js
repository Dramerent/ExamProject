import { PrismaClient } from "@prisma/client"
import { ExpressValidator, validationResult } from "express-validator";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import fs from 'fs'
import { sendConfirmationEmail, sendTicketEmail } from "../mailer.js";

import { jwtDecode } from "jwt-decode";
const prisma = new PrismaClient()


export class Controller{
    async getCheckedPosts(req, res){
        try {
            const postsInfo = await prisma.createdPosts.findMany({
                include:{
                    Genres:{
                        include:{
                            Sphere: true
                        }
                    }
                },
                where:{
                    post_checked: true,
                    post_allSeats: {gt: prisma.createdPosts.fields.post_buydSeats},
                    post_meetDate: {gte: (new Date()).toISOString()}
                },
                orderBy:{
                    post_meetDate: 'asc'
                }
                
            })
            return res.json(postsInfo)
  
        } catch (error) {
            return res.json({error: error})  
        }
    }
    async getChoicedPost(req, res){
        try {
            const {post_id} = req.body
            const gcp = await prisma.createdPosts.findUnique({
                where: {
                    post_id: post_id
                },
                include: {
                    Organizers: {
                        include:{
                            Sphere: true,
                            callbacks: true
                        }
                    },
                    Genres: {
                        include: {
                            Sphere: true
                        }
                    }
                },
               
            })
            return res.json(gcp)
        } catch (errors) {
            res.json({error: "Ошибка брат"})
        }
    }
   async getAllExistsGenresAndSpheres(req, res){
        const allGenres = await prisma.createdPosts.findMany({
           include:{
                Genres:{
                    include:{
                        Sphere: true
                    }
                }
           }
        })
        res.json(allGenres)
   }
   async getAllSpheres(req, res){
        try {
            const allSpheres = await prisma.sphere.findMany()
            return res.json(allSpheres)   
        } catch (error) {
          return res.status(404).json('ошибка получения сфер')   
        }
       
   }

   async getGenres(req, res){
    const {sphere_id} = req.body

    const genre = await prisma.genres.findMany({
        where:{
            sphere_id: sphere_id
        },
     
    })

    res.json(genre)

   }
   async getCallBacks(req, res){
    try {
        const callbacks = await prisma.callbacks.findMany()
        return res.json(callbacks)   
    } catch (error) {
        return res.status(404).json('ошибка получения callback')   
    }
   }




   async login(req, res){
    const error = validationResult(req)
    if(!error.isEmpty()){

        return res.status(405).json(error.errors[0].msg)
    }
    else{
        try {
            const {user_mail, user_password} = req.body
            const findUse = await prisma.users.findMany({
                where:{
                    user_mail: user_mail
                },

            })
           if(!findUse || findUse.length == 0 || findUse.length > 1){
                return res.status(404).json("ошибка почты или пароля")
           }           

           const validPassword = await bcrypt.compare(user_password, findUse[0].user_password)
           if(!validPassword){
            return res.status(404).json("ошибка почты или пароля")

           }            
            const accessToken = jwt.sign({
                user_id: findUse[0].user_id,
                user_name:  findUse[0].user_name,
                user_surname: findUse[0].user_surname,
                user_mail: findUse[0].user_mail,
                user_photo: findUse[0].user_photo,
                user_likedMass: findUse[0].user_likedMass,
            },process.env.ACCESS_SECRET_WORD , {expiresIn: process.env.ACCESS_LIFE_TIME})            

            const refreshToken = jwt.sign(
            {
                user_id: findUse[0].user_id,
                user_name:  findUse[0].user_name,
                user_surname: findUse[0].user_surname,
                user_mail: findUse[0].user_mail,
                user_photo: findUse[0].user_photo,
                user_likedMass: findUse[0].user_likedMass,
                user_password: findUse[0].user_password
            }, 
            process.env.REFRESH_SECRET_WORD, 
            {expiresIn: process.env.REFRESH_LIFE_TIME})

            res.cookie('refreshToken', refreshToken, {
                httpOnly: true, // Защита от XSS
                secure: false, // true если HTTPS
                sameSite: 'lax' // Чтобы куки передавались в кросс-доменных запросах
            })

            return res.json({accessToken: accessToken})
            
        } catch (error) {
            res.json("непридвиденная ошибка")
        }
 
    }
   }
   async registrVerify(req, res){
    const error = validationResult(req)
        if(!error.isEmpty()){
            if(req.file && req.file.path){
                fs.unlink(req.file.path, (err) => {
                    if (err) {
                        console.error('Ошибка при удалении файла:', err);
                    } else {
                       
                    }
                })
            }
            return res.status(405).json(error.errors[0].msg) 
        }
    const {user_mail} = req.body

    const findUser = await prisma.users.findFirst({where:{user_mail: user_mail}})

    if(findUser){return res.status(405).json('Пользователь с такой почтой уже существует')}

        const verifyPassword = Math.floor(100000 + Math.random() * 900000).toString()

        const verifytoken = jwt.sign({verifyPassword: verifyPassword},
        process.env.MAIL_VERIFI_SECRET_WORD, {expiresIn: '2m'})

        res.cookie('verifyToken', verifytoken, {
            httpOnly: true, // Защита от XSS
            secure: false, // true если HTTPS
            sameSite: 'lax' // Чтобы куки передавались в кросс-доменных запросах
        })
    try {
        await sendConfirmationEmail(user_mail, verifyPassword);
        return res.json('проверьте почту');
    } catch (err) {
        return res.status(405).json('Ошибка при отправке письма');
    }
    }
    
    async registr(req, res){
        const error = validationResult(req)
        if(!error.isEmpty()){
            if(req.file && req.file.path){
                fs.unlink(req.file.path, (err) => {
                    if (err) {
                        console.error('Ошибка при удалении файла:', err);
                    } else {
                       
                    }
                })
            }
            return res.status(405).json(error.errors[0].msg) 
        }
        try 
        {
            const {user_name, user_surname, user_mail, user_password, user_code} = req.body
            const {verifyToken} = req.cookies
            jwt.verify(verifyToken, process.env.MAIL_VERIFI_SECRET_WORD, (err, decoded) =>{
                if(err){
                    return res.status(404).json('ошибка подтверждения токена. Перезагрузите страницу и повторите позже')
                }
            })
            const verDecode = jwtDecode(verifyToken)
            if(verDecode.verifyPassword != user_code) return res.status(404).json('неправильный пароль')
            const passwordHash = await bcrypt.hash(user_password, 10)
            const createUser = await prisma.Users.create({
            data:{
                user_name: user_name,
                user_surname:user_surname,
                user_mail: user_mail,
                user_password: passwordHash,
                user_photo: req.file.path,
                role_id: 3
            }
            })
            res.clearCookie(verifyToken, {
                httpOnly: true, // Защита от XSS
                secure: false, // true если HTTPS
                sameSite: 'lax' // Чтобы куки передавались в кросс-доменных запросах
            })
            return res.json({message: "успешно зарегистрирован"})
        } catch (error) {
             if(req.file && req.file.path){
                fs.unlink(req.file.path, (err) => {
                    if (err) {
                        console.error('Ошибка при удалении файла:', err);
                    } else {
                       
                    }
                })
            }
            return console.error(error)

        }
    }
   async valid(req, res){
        try {
            res.json(req.user)
                
        } catch (error) {
        }
    }

    async postLiked(req, res){
        const {user_postliked, user_id} = req.body
        const post = await prisma.createdPosts.findUnique({
            where:{post_id: user_postliked}
        })
        if(!post){
            return res.json({message: "пост не найден"})
        }
        
       
        const liked = await prisma.Users.findMany({
            select: {user_likedMass: true},
            where: {user_id: user_id }
            
        })
        const likedExist = await prisma.Users.findMany({
            where:{
                user_likedMass:{ 
                    has: user_postliked
                },
                user_id: user_id
                
            } 
        })
        
        if(likedExist.length > 0){  
            
            const upLike = await liked[0].user_likedMass.filter(el => el != user_postliked)
            const likedUpdate = await prisma.users.update({
                select:{user_likedMass: true}, 
                where: {user_id: user_id },
                data:{ user_likedMass: upLike }
            })


            const likedPosts = await prisma.createdPosts.findMany({
                where:{
                    post_id: {in: likedUpdate.user_likedMass}
                },
                include:{
                    Genres:{
                        include:{
                            Sphere: true
                        }
                    }
                }
            })
            return res.json(likedPosts)
            
        }

        
        await liked[0].user_likedMass.push(user_postliked)
        const likedUpdate = await prisma.users.update({
            select:{user_likedMass: true}, 
            where: {user_id: user_id },
            data:{ user_likedMass: liked[0].user_likedMass }
        })
        
        const likedPosts = await prisma.createdPosts.findMany({
            where:{
                post_id: {in: likedUpdate.user_likedMass}
            },
            include:{
                Genres:{
                    include:{
                        Sphere: true
                    }
                }
            }
        })
        res.json({message: "успешно добавлено", likedPosts})        
    }
    async getLiked(req, res){
        try {
         const {user_id} = req.body
            const liked = await prisma.Users.findMany({
                select: {
                    user_likedMass: true
                },
                where: {
                    user_id: user_id
                }
                
            })
            const likedPosts = await prisma.createdPosts.findMany({
                where:{
                    post_id: {in: liked[0].user_likedMass}
                },
                include:{
                    Genres:{
                        include:{
                            Sphere: true
                        }
                    }
                }
            })
            res.json(likedPosts)   
        } catch (error) {
            res.json({error})
        }
        
    }

  
    async getAutorConcerts(req, res){
        try {
            const {organizer_id, post_id} = req.body

            const concerts = await prisma.createdPosts.findMany({
                where:{
                    organizer_id: organizer_id,
                    post_checked: true,
                    post_meetDate: {gt: (new Date()).toISOString()},
                    NOT:{
                        post_id: post_id
                    }
                    

                },
                include:{
                    Genres:{
                        include:{
                            Sphere: true
                        }
                    }
                },
            })
        return res.json(concerts)
        } catch (error) {
            res.json({error})
        }
        
    }


    async getBuyd(req, res){
       
        const { user_id } = req.body
            const getActualTickets = await prisma.tickets.findMany({
                where:{
                    user_id: user_id,
                    ticket_date: {gte: (new Date()).toISOString()}
                },
                orderBy:{ 
                    ticket_date: 'asc'
                }              
            })
            const getOldTickets = await prisma.tickets.findMany({
                where:{
                    user_id: user_id,
                    ticket_date: {lt: (new Date()).toISOString()}
                },
                orderBy:{ 
                    ticket_date: 'desc'
                }              
            })
            return res.json({
                getActualTickets: getActualTickets, 
                getOldTickets: getOldTickets,
            })  
    }
    async postBuyd(req, res){
        const error = validationResult(req)
        if(!error.isEmpty()){
           return res.status(404).json(error.errors[0].msg)
        }
        try {
            const {user_id, post_id, post_ticketCount, post_meetDate, user_mail} = req.body
            const findTicket = await prisma.Tickets.findFirst({
                where:{
                    user_id: user_id,
                    post_id: post_id,
                    ticket_date: post_meetDate,

                }
            })
            const findTicketInfo = await prisma.createdPosts.findFirst({
                where:{post_id: post_id},
                include:{Genres:{include:{Sphere: true}}}})

            let postTicket 
             !findTicket && findTicketInfo ? postTicket =  await prisma.Tickets.create({
                data:{
                    ticket_cost: findTicketInfo.post_cost,
                    ticket_name: findTicketInfo.post_name,
                    ticket_date: findTicketInfo.post_meetDate,
                    ticket_genre: findTicketInfo.Genres.genre_name,
                    ticket_sphere: findTicketInfo.Genres.Sphere.sphere_name,
                    ticket_meetPlace: findTicketInfo.post_meetingPlace,
                    organizer_id: findTicketInfo.organizer_id,
                    user_id: user_id,
                    post_id: post_id,
                    ticket_quantity: post_ticketCount,
                    ticket_image: findTicketInfo.post_image
                }
            }) :  findTicket && findTicketInfo 
                ?   parseInt(findTicketInfo.post_cost) == 0 && findTicket.ticket_quantity + post_ticketCount ==1
                    ?  postTicket = await prisma.tickets.update({
                        where: {
                            ticket_id: findTicket.ticket_id
                        },
                        data:{
                            ticket_quantity : findTicket.ticket_quantity + post_ticketCount,
                        }
                    }) : parseInt(findTicketInfo.post_cost) !==0 
                        && 5 - findTicket.ticket_quantity - post_ticketCount >=0
                        ? postTicket = await prisma.tickets.update({
                        where: {
                            ticket_id: findTicket.ticket_id
                        },
                        data:{
                            ticket_quantity : findTicket.ticket_quantity + post_ticketCount,
                        }
                    }) : null
                : null
            if( !postTicket ) return res.status(404).json(`Ошибка покупки билета. Вы купили ${findTicket.ticket_quantity} билета (лимит на 1 платный товар - 5 билетов, лими на 1 бесплатный товар - 1 билет)`)
            postTicket ? await prisma.createdPosts.update({
                where:{
                    post_id: post_id
                },
                data:{
                    post_buydSeats: parseInt(findTicketInfo.post_buydSeats) + post_ticketCount
                }
            }) : null 

            postTicket ? await prisma.Tickets.findFirst({
                select: {
                    ticket_id: true
                },
                where:{
                    post_id: post_id,
                    user_id: user_id
                },
              
            }) : console.log("ошибка") 
            
            return res.json(postTicket) 
        } catch (error) {
            return console.log(error)
        }
        
    }
    async getBuydOne(req, res){
        try {
        const {user_id, ticket_id} = req.body
        const buydOne = await prisma.Tickets.findFirst({
            where:{
                user_id: user_id,
                ticket_id: ticket_id
            }
        })
        return res.json(buydOne)   
        } catch (error) {
           return res.json(error) 
        }
        
    }
    async getBuydPostTickets(req, res){ 
        const {post_id, organizer_id} = req.body
        const error = validationResult(req)
        if(!error.isEmpty()) return res.status(404).json(error.errors[0].msg + " " + post_id)
       
        try {
           
            const tickets = await prisma.tickets.findMany({
            where: {
                post_id: post_id,
                organizer_id: organizer_id,
                ticket_quantity: {gte: 1}
            },
            include:{
                Users: true
            }
        })  
        res.json(tickets)
        } catch (error) {
            res.status(404).json('error: ' + error)
        }
    
        
    }


    async updateUserPhoto(req, res){
        const error = validationResult(req)
        if(!error.isEmpty()){
            if(req.file && req.file.path){
                fs.unlink(req.file.path, (err) => {
                    if (err) {
                        console.error('Ошибка при удалении файла:', err);
                    } else {
                       return 0
                    }
                })
            }
            return res.status(405).json(error.errors[0].msg) 
        }
        try 
        {
            const {user_id, user_oldPhoto} = req.body   

            user_oldPhoto ? fs.unlink(user_oldPhoto, (err) => {
                if (err) {
                    return console.error('Ошибка при удалении файла', err);
                } else {
                   return 0
                }
            }) : null
            const createUser = await prisma.Users.update({
            data:{
               user_photo: req.file.path
                
            },
            where: {
                user_id: parseInt(user_id)
            }
            })
            
            const newData = await prisma.users.findFirst({where: {user_id: parseInt(user_id)}})
            const accessToken = jwt.sign({
                user_id: newData.user_id,
                user_name:  newData.user_name,
                user_surname: newData.user_surname,
                user_mail: newData.user_mail,
                user_photo: newData.user_photo,
                user_likedMass: newData.user_likedMass,
            },process.env.ACCESS_SECRET_WORD , {expiresIn: process.env.ACCESS_LIFE_TIME})            

            const refreshToken = jwt.sign(
            {
                user_id: newData.user_id,
                user_name:  newData.user_name,
                user_surname: newData.user_surname,
                user_mail: newData.user_mail,
                user_photo: newData.user_photo,
                user_likedMass: newData.user_likedMass,
                user_password: newData.user_password
            }, 
            process.env.REFRESH_SECRET_WORD, 
            {expiresIn: process.env.REFRESH_LIFE_TIME})

            res.cookie('refreshToken', refreshToken, {
                httpOnly: true, // Защита от XSS
                secure: false, // true если HTTPS
                sameSite: 'lax' // Чтобы куки передавались в кросс-доменных запросах
            })
            res.json({accessToken: accessToken})

        } catch (error) {
            if(req.file && req.file.path){
                fs.unlink(req.file.path, (err) => {
                    if (err) {
                        console.error('Ошибка при удалении файла:', err);
                    } else {
                       return 0
                    }
                })
            }
            return res.json({"errors": error})
        }
    }
    async updateUserMailVerify(req, res){
        const error = validationResult(req)
            if(!error.isEmpty()){
                if(req.file && req.file.path){
                    fs.unlink(req.file.path, (err) => {
                        if (err) {
                            console.error('Ошибка при удалении файла:', err);
                        } else {
                        
                        }
                    })
                }
                return res.status(405).json(error.errors[0].msg) 
            }
        const {user_mail, user_id} = req.body
        const findUser = await prisma.users.findFirst({where:{user_mail: user_mail}})

        if(findUser && findUser.length > 0){return res.status(405).json('Пользователь с такой почтой уже существует')}

            const verifyPassword = Math.floor(100000 + Math.random() * 900000).toString()

            const updateToken = jwt.sign({verifyPassword: verifyPassword},
            process.env.MAIL_VERIFI_SECRET_WORD, {expiresIn: "10d"})

            res.cookie('updateToken', updateToken, {
                httpOnly: true, // Защита от XSS
                secure: false, // true если HTTPS
                sameSite: 'lax' // Чтобы куки передавались в кросс-доменных запросах
            })
        try {
            await sendConfirmationEmail(user_mail, verifyPassword);
            return res.json('проверьте почту');
        } catch (err) {
            return res.status(405).json('Ошибка при отправке письма');
        }

    }
    async updateUserMail(req, res){
        const error = validationResult(req)
        if(!error.isEmpty()){
            return res.status(401).json(error.errors[0].msg)    
        }
        try 
        {
            const {user_mail, user_code, user_id} = req.body       
            const {updateToken} = req.cookies
            jwt.verify(updateToken, process.env.MAIL_VERIFI_SECRET_WORD, (err, decoded) =>{
                if(err){
                    return res.status(404).json('ошибка подтверждения токена. Перезагрузите страницу и повторите позже')
                }
            })
            const verDecode = jwtDecode(updateToken)
            if(verDecode.verifyPassword != user_code) return res.status(404).json('неправильный пароль')
     
            const createUser = await prisma.Users.update({
            data:{
               user_mail: user_mail
                
            },
            where: {
                user_id: parseInt(user_id)
            }
            
            })
            const newData = await prisma.users.findFirst({where: {user_id: parseInt(user_id)}})
            const accessToken = jwt.sign({
                user_id: newData.user_id,
                user_name:  newData.user_name,
                user_surname: newData.user_surname,
                user_mail: newData.user_mail,
                user_photo: newData.user_photo,
                user_likedMass: newData.user_likedMass,
            },process.env.ACCESS_SECRET_WORD , {expiresIn: process.env.ACCESS_LIFE_TIME})            

            const refreshToken = jwt.sign(
            {
                user_id: newData.user_id,
                user_name:  newData.user_name,
                user_surname: newData.user_surname,
                user_mail: newData.user_mail,
                user_photo: newData.user_photo,
                user_likedMass: newData.user_likedMass,
                user_password: newData.user_password
            }, 
            process.env.REFRESH_SECRET_WORD, 
            {expiresIn: process.env.REFRESH_LIFE_TIME})

            res.cookie('refreshToken', refreshToken, {
                httpOnly: true, // Защита от XSS
                secure: false, // true если HTTPS
                sameSite: 'lax' // Чтобы куки передавались в кросс-доменных запросах
            })
            res.json({accessToken: accessToken})

        } catch (error) {
            return console.log('ошибка неизвестная', error)
        }
    }



    async updateUserMainInfo(req, res){
        const error = validationResult(req)
        if(!error.isEmpty()){
            return res.status(401).json(error.errors[0].msg)    
        }
        try 
        {
            const {user_id, user_name, user_surname} = req.body            
            const createUser = await prisma.Users.update({
            data:{
                user_name: user_name,
                user_surname: user_surname,
                
            },
            where: {
                user_id: parseInt(user_id)
            }
            
            })
            const newData = await prisma.users.findFirst({where: {user_id: parseInt(user_id)}})
            const accessToken = jwt.sign({
                user_id: newData.user_id,
                user_name:  newData.user_name,
                user_surname: newData.user_surname,
                user_mail: newData.user_mail,
                user_photo: newData.user_photo,
                user_likedMass: newData.user_likedMass,
            },process.env.ACCESS_SECRET_WORD , {expiresIn: process.env.ACCESS_LIFE_TIME})            

            const refreshToken = jwt.sign(
            {
                user_id: newData.user_id,
                user_name:  newData.user_name,
                user_surname: newData.user_surname,
                user_mail: newData.user_mail,
                user_photo: newData.user_photo,
                user_likedMass: newData.user_likedMass,
                user_password: newData.user_password
            }, 
            process.env.REFRESH_SECRET_WORD, 
            {expiresIn: process.env.REFRESH_LIFE_TIME})

            res.cookie('refreshToken', refreshToken, {
                httpOnly: true, // Защита от XSS
                secure: false, // true если HTTPS
                sameSite: 'lax' // Чтобы куки передавались в кросс-доменных запросах
            })
            res.json({accessToken: accessToken})

        } catch (error) {
            return res.json(error)
        }
    }
    async updateUserPassword(req, res){
        const error  = validationResult(req)
        if(!error.isEmpty()){
            return res.status(401).json(error.errors[0].msg)    
        }
        try 
        {
            const {user_repeatPassword, user_password, user_id} = req.body
            if(user_password !== user_repeatPassword){
               return res.status(401).json('пароли не совпадают')
            }
            const passwordHash = await bcrypt.hash(user_password, 10)

            const createUser = await prisma.Users.update({
            data:{
                user_password: passwordHash, 
            },
            where: {
                user_id: parseInt(user_id)
            }
            
            })

            res.clearCookie('refreshToken', {
                httpOnly: true, // Защита от XSS
                secure: false, // true если HTTPS
                sameSite: 'lax' // Чтобы куки передавались в кросс-доменных запросах
            })
            res.json({message: 'успех'})

        } catch (error) {
            return res.json({"errors": error})
        }

    }


    async verifyToUpdate(req, res){
        if(!validationResult(req).isEmpty){
            return res.json({error: validationResult(req)})
        }
        else{
            try {
                const {user_id, user_mail, user_password} = req.body
                const findUse = await prisma.users.findMany({
                    where:{
                        user_mail: user_mail,
                        user_id: user_id
                    },
    
                })
               if(!findUse || findUse.length == 0 || findUse.length > 1){
                    return res.status(404).json({message: "ошибка почты или пароля"})
               }           
    
               const validPassword = await bcrypt.compare(user_password, findUse[0].user_password)
               if(!validPassword){
                return res.status(404).json({message: "ошибка почты или пароля"})
    
               }
               const editVerifyToken = jwt.sign({
              user_mail: user_mail
            },process.env.EDIT_VERIFY_SECRET_WORD , {expiresIn: process.env.EDIT_VERIFY_LIFE_TIME})            
              
            return res.json({editVerifyToken: editVerifyToken})
                
            } catch (error) {
                res.json({message: "непридвиденная ошибка", error})
            }
     
        }
    
    }
    async verifyToVerify(req, res){
        try {
            res.json(req.user)
                
        } catch (error) {
            return res.json(error)
        }
    }




    async logout(req, res){
        try {
             res.clearCookie('refreshToken', {
                httpOnly: true, // Защита от XSS
                secure: false, // true если HTTPS
                sameSite: 'lax' // Чтобы куки передавались в кросс-доменных запросах
            })
        return res.json({message: 'успех'})
        } catch (error) {
            return res.json(error)
        }
    }

    async getReasonsToRefund(req, res){
        const reasons = await prisma.reasonsToRefund.findMany()
        return res.json(reasons)
    }
    async postTicketsRefund(req, res){
        const error = validationResult(req)

        if(!error.isEmpty()){
            return res.status(404).json(error.errors[0].msg)
        }
            try {
            // console.log(req.body)
            const{ticketRefunds_description, reason_id, ticket_id, user_id, ticket_quantity} = req.body
            const findRefind = await prisma.ticketRefund.findFirst({
                where:{
                    ticket_id: ticket_id,
                    user_id: user_id, 
                    ticketRefind_isConfirm: null
                }
            })
            if((!findRefind || findRefind == null)){ await prisma.ticketRefund.create({
                data:{
                    ticketRefind_description: ticketRefunds_description,
                    reason_id: reason_id,
                    ticket_id: ticket_id,
                    user_id: user_id,
                    ticketRefund_quantity: ticket_quantity,
                    ticketRefind_isConfirm: null
                }
            })}
             
            else {return res.status(404).json('нельзя создавать повторную заявку на то же мероприятие')}
            return res.json('успех')
      
        } catch (error) {
            res.status(404).json('ошибка вноса данных' + error)
        }
        
    }

    async getTicketsRefund(req, res){
        const {user_id} = req.body
        const getRefunds = await prisma.ticketRefund.findMany({
            where: {
                user_id: user_id
            },
            include:{
                Tickets: true,
                ReasonsToRefund: true
            }
          
        })

        return res.json(getRefunds)
    }

    async getOrganizer(req, res){
        try {
            const {user_id} = req.body
            const getOrganizerInfo = await prisma.organizers.findFirst({
                where: {
                    user_id: user_id,
                },
                include:{
                    Sphere:true,
                    callbacks: true,

                }
            })
            if(!getOrganizerInfo || getOrganizerInfo.user_id != user_id){
                return res.status(404).json("не найдено нужного")
            }
            res.json(getOrganizerInfo)
   
        } catch (error) {
            return res.status(404).json("не найдено нужного")        
        }
    }
    
    async registerOrganizer(req, res){
        
        const{nickname, description, phoneNumber, callback, sphere, id} = req.body
        const error = validationResult(req)
        if(!error.isEmpty()){
            if(req.file && req.file.path){
                fs.unlink(req.file.path, (err) => {
                    if (err) {
                        console.error('Ошибка при удалении файла:', err);
                    } else {
                       
                    }
                })
            }
            return res.status(405).json(error.errors[0].msg) 
        }
        try {
            const organizer = await prisma.organizers.findFirst({
                where:{
                    user_id: parseInt(id) 
                }
            })
            !organizer || (organizer && organizer.length == 0) ? await prisma.Organizers.create({
                data:{
                    organizer_nickname: nickname,
                    organizer_description: description,
                    organizer_phoneNum: phoneNumber,
                    sphere_id: parseInt(sphere),
                    user_id: parseInt(id),
                    organizer_photo: req.file.path,
                    callback_id: parseInt(callback)
    
                }
            }) : () => {return res.status(405).json('такой организатор уже существует')}
            return res.json('успех')
        } catch (error) {
            return res.status(405).json('ошибка создания организатора')
        }
       
       
    }


    async getOrganizerPosts(req, res){
        const {organizer_id} = req.body

        const posts = await prisma.createdPosts.findMany({
            where:{
                organizer_id: organizer_id, 
                post_meetDate :{ gte: (new Date()).toISOString()}, 
            },
           include:{
                Genres:{
                    include:{
                        Sphere: true   
                    }
                }
           },
           orderBy:{
            post_meetDate: 'asc'
           }
        })
        return res.json(posts)
        
    }
    async postOrganizerPosts(req, res){
        const {post_name, post_decription, post_fullDecription, post_cost, post_allSeats, post_genre, 
            post_meetDate, post_meetPlace, organizer_id
        } = req.body
        const error = validationResult(req)
        if(!error.isEmpty()){
            if(req.file && req.file.path){
                return fs.unlink(req.file.path, (err) => {
                    if (err) {
                        return res.status(404).json('ошибка вноса картинки ' + err);
                    } else {
                       return res.status(404).json(error.errors[0].msg) 
                    }
                })
            }
            else return res.status(404).json(error.errors[0].msg) 
            
        }
        try {
            const postInfo = await prisma.createdPosts.create({
                data: {
                    post_description: post_decription,
                    post_image: req.file.path,
                    post_cost: parseInt(post_cost),
                    post_meetingPlace: post_meetPlace,
                    organizer_id: parseInt(organizer_id),
                    post_name: post_name,
                    post_allSeats: post_allSeats,
                    post_fullDescription: post_fullDecription,
                    post_meetDate: new Date(post_meetDate).toISOString(),
                    genre_id: parseInt(post_genre),
                    post_buydSeats: 0

                }
                
            })
            return res.json("успех!")
        } 
        catch (error) {
            return console.error('ошибка вноса данных' + error)
        }
    }
    async updateOrganizerInfo(req, res){
        const {nickname, description, phoneNumber, callback, sphere, id} = req.body
        const error = validationResult(req)
        if(!error.isEmpty()){
            return res.status(405).json(error.errors[0].msg) 
        }
        try {
            const postOrganizerInfo =await prisma.Organizers.update({
                data:{
                    organizer_nickname: nickname,
                    organizer_description: description,
                    organizer_phoneNum: phoneNumber,
                    sphere_id: parseInt(sphere),
                    callback_id: parseInt(callback),
                    organizer_verified: null,
                    organizer_reasonToCancel: null
                    
    
                },
                where:{
                    organizer_id: parseInt(id)
                }
            })
        } catch (error) {
            console.error(error)
        }
    }
    
    async updateOrganizerPhoto(req, res){
        const error = validationResult(req)
        if(!error.isEmpty()){
            if(req.file && req.file.path){
                fs.unlink(req.file.path, (err) => {
                    if (err) {
                        console.error('Ошибка при удалении файла:', err);
                    } else {
                       return 0
                    }
                })
            }
            return res.status(405).json(error.errors[0].msg) 
        }
        try 
        {
            const {id, oldPhoto} = req.body   

            oldPhoto ? fs.unlink(oldPhoto, (err) => {
                if (err) {
                    return console.error('Ошибка при удалении файла', err);
                } else {
                   return 0
                }
            }) : null
            const createUser = await prisma.organizers.update({
            data:{
                organizer_photo: req.file.path,
                organizer_verified: null,
                organizer_reasonToCancel: null
            },
            where: {
                organizer_id: parseInt(id)
            }
            })
        }
        catch(err){
            if(req.file && req.file.path){
                fs.unlink(req.file.path, (error) => {
                    if (err) {
                        console.error('Ошибка при удалении файла:', error);
                    } else {
                       return 0
                    }
                })
            }
            return console.error('ошибка вноса данных' + err )
            
        }
        return res.json('успех')

    }
    async postComment(req, res){
        
        const error = validationResult(req)
        if(!error.isEmpty()){
           return res.status(404).json(error.errors[0].msg)
        }
        
        const {user_id, organizer_id, comment_content, comment_name, post_id} = req.body
        const getExistComment = await prisma.comments.findMany({
            where:{
                post_id: post_id,
                user_id: user_id
            }
        })
        if(getExistComment  == 0)
        {await prisma.comments.create({
            data:{
                user_id: user_id,
                organizer_id: organizer_id,
                comment_text: comment_content,
                comment_name: comment_name,
                post_id: post_id

            }
        })}
        else return res.status(404).json("повторного комментария на тот же пост нельзя")
        return res.json('успех')

    }

    async getComments(req, res){
        const {organizator_id} = req.body
        const getComments = organizator_id ? await prisma.comments.findMany({
            where:{
                organizer_id: organizator_id
            },
            include:{
                Users: true
            }
        }) : []


        return res.json(getComments)
    }

    async userIshere(req, res){
        try {
            const {ticket_id, user_id} = req.body

        await prisma.tickets.update({
            data:{
                ticket_isHere: true
            },
            where:{
                ticket_id: ticket_id,
                user_id: user_id,
                
            }
        }) 
        return res.json('success')
        } catch (error) {
            return console.error(error)
        }
      

    }
    async payVerify(req, res){
        const error = validationResult(req)
        if(!error.isEmpty()){
            return res.status(404).json(error.errors[0].msg)
        }

        try {
            const {user_mail} = req.body
            const verifyPassword = Math.floor(100000 + Math.random() * 900000).toString()

            const verifytoken = jwt.sign({verifyPassword: verifyPassword},
            process.env.MAIL_VERIFI_SECRET_WORD, {expiresIn: '2h'})

            res.cookie('verifyToken', verifytoken, {
                httpOnly: true, // Защита от XSS
                secure: false, // true если HTTPS
                sameSite: 'lax' // Чтобы куки передавались в кросс-доменных запросах
            })
            try {
                await sendConfirmationEmail(user_mail, verifyPassword);
                return res.json('проверьте почту');
            } catch (err) {
                return res.status(405).json('Ошибка при отправке письма');
            }
        } catch (error) {
            res.status(404).json(error)
        }
    }
    async payWidthMail(req, res){
        const {user_code, user_mail, post_id, post_ticketCount} = req.body
        console.log(req.body)
        const {verifyToken} = req.cookies
        jwt.verify(verifyToken, process.env.MAIL_VERIFI_SECRET_WORD, (err, decoded) =>{
            if(err){
                return res.status(404).json('ошибка подтверждения токена. Перезагрузите страницу и повторите позже')
            }
        })
        const verDecode = jwtDecode(verifyToken)
        if(verDecode.verifyPassword != user_code) return res.status(404).json('неправильный пароль')

        const findTicketInfo = await prisma.createdPosts.findFirst({
        where:{post_id: post_id},
        include:{Genres:{include:{Sphere: true}}}})
        console.log(findTicketInfo)
        if(findTicketInfo){
            try {
                await sendTicketEmail(
                    user_mail, 
                    findTicketInfo.post_name, 
                    post_ticketCount,
                    findTicketInfo.post_cost * post_ticketCount, 
                    findTicketInfo.post_meetDate,
                    findTicketInfo.post_meetingPlace
                );
                await prisma.createdPosts.update({
                where:{
                    post_id: post_id
                },
                data:{
                    post_buydSeats: parseInt(findTicketInfo.post_buydSeats) + post_ticketCount
                }
            })
                return res.json('проверьте почту');
            } catch (err) {
                return console.log(err);
            }
        }
        else{
            console.log('bruh')
        }

    }
}
