import express from "express"
import { Controller } from "../Controllers/Controller.js"
import { check } from "express-validator"
import jwt from "jsonwebtoken"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
export const controller = new Controller()
import multer from "multer";
import { jwtDecode } from "jwt-decode"

export const router = express.Router()

const authMiddlware = (req, res, next) =>{
    
    const {accessToken} = req.body
    const {refreshToken} = req.cookies


    jwt.verify(accessToken, process.env.ACCESS_SECRET_WORD, (err, decoded) =>{
        if(err){
            return jwt.verify(refreshToken, process.env.REFRESH_SECRET_WORD, (err, decoded) => {
                if(err){ 
                    return res.status(401).json({message: "неверный токен"})
                }
              
                const refreshlogin = async () =>{
                    const user = jwtDecode(req.cookies.refreshToken) // ВАЖНО!!!                    
                    const accessToken = jwt.sign({
                        user_id: user.user_id,
                        user_likedMass: user.user_likedMass,
                        user_name:  user.user_name,
                        user_surname: user.user_surname,
                        user_mail: user.user_mail,
                        user_photo: user.user_photo,
                    },process.env.ACCESS_SECRET_WORD , {expiresIn: process.env.ACCESS_LIFE_TIME})            

                    req.user = accessToken
                    next()
                }
                refreshlogin() 
        }) 
        }
        req.user = accessToken
        next()
    })
}



const editUserDataVerify = (req, res, next) =>{
    const {editVerifyToken} = req.body
    if(!editVerifyToken){
        return res.status(401).json({message: "нет токена"})
    }
    jwt.verify(editVerifyToken, process.env.EDIT_VERIFY_SECRET_WORD, (err, decoded) =>{
        if (err){
            return res.status(401).json({message: "неверный токен"})
        }
        req.user = editVerifyToken
        next()
    })
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const path = 'uploads/avatars'
        cb(null, path);
    },
    filename: (req, file, cb) => {
        const originalname = Buffer.from(file.originalname, 'latin1').toString('utf8')
       
        cb(null, Date.now() + "_" + originalname); // Добавление времени к имени файла
    },
});


const storageOrgan = multer.diskStorage({
    destination: (req, file, cb) => {
        const path = 'uploads/organizerPhoto'
        cb(null, path);
    },
    filename: (req, file, cb) => {
        const originalname = Buffer.from(file.originalname, 'latin1').toString('utf8')
        cb(null, Date.now() + "_" + originalname); // Добавление времени к имени файла
    },
});


const storagePost = multer.diskStorage({
    destination: (req, file, cb) => {
        const path = 'uploads/postImage'
        cb(null, path);
    },
    filename: (req, file, cb) => {
        const originalname = Buffer.from(file.originalname, 'latin1').toString('utf8')
        cb(null, Date.now() + "_" + originalname); // Добавление времени к имени файла
    },
});



const fileFilter = (req, file, cb) => {
    if (file && file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Разрешены только изображения!'), false);
    }
};
const upload = multer({ fileFilter, storage:  storage, limits: { fileSize: 50 * 1024 * 1024 } });
const uploadOrgan = multer({ fileFilter,storage: storageOrgan, limits: { fileSize: 50 * 1024 * 1024 } })
const uploadPost = multer({ fileFilter,storage: storagePost, limits: { fileSize: 50 * 1024 * 1024 } })



router.post('/getBuydPostTickets', [
], controller.getBuydPostTickets)


router.get('/getPosts', controller.getCheckedPosts)
router.post('/getChoicedPost', controller.getChoicedPost)
router.get('/getAllExistsGenresAndSpheres', controller.getAllExistsGenresAndSpheres)
router.get('/getAllSpheres', controller.getAllSpheres)
router.post('/getGenres', upload.none(), controller.getGenres)
router.get('/getCallBacks', controller.getCallBacks)

router.post('/login',upload.none(), [
    check('user_mail').notEmpty().withMessage('нет логина'),
    check('user_password')
], controller.login)
router.post('/valid', authMiddlware,  controller.valid)
router.post('/postLiked', controller.postLiked)
router.post('/getLiked', controller.getLiked)
router.post('/getAutorConcerts', controller.getAutorConcerts)
router.post('/getBuyd', controller.getBuyd)

router.post('/postBuyd',[
    check('ticket_quantity')
    .custom(async(value, {req}) =>{
        if(req.body.post_ticketCount < 1 && req.body.post_ticketCount > 5){
            throw new Error('число не может быть равно 0 и меньше 5')
        }
    })
], controller.postBuyd)
router.post('/updateUserMailVerify', upload.none(),[
    check('user_mail').notEmpty().withMessage("нужен email")
        .isEmail().withMessage('введенный email неправелен')
        .custom(ele => !/\s/.test(ele)).withMessage("без пробелов!"),
         check('user_mail').notEmpty().withMessage("нужен email")
            .isEmail().withMessage('введенный email неправелен')
            .custom(async(elem, {req}) =>{
                const rows = await prisma.Users.findMany({
                    where:{user_mail: req.body.user_mail}
                })


                if(rows) if(rows.length >0){
                    throw new Error("данная почта уже зарегестрирована!")
                }})
], controller.updateUserMailVerify)

router.post('/updateUserMail', upload.none(),[
    check('user_mail').notEmpty().withMessage("нужен email")
        .isEmail().withMessage('введенный email неправелен')
        .custom(ele => !/\s/.test(ele)).withMessage("без пробелов!"),
], controller.updateUserMail)



router.post('/updateUserMainInfo', upload.none(),  [
    check('user_name').notEmpty().withMessage('Имя пользователя не может быть пустым.')
    .isLength({min: 2}).withMessage("надо больше 1-го символа!")
    
    .custom(ele => !/\s/.test(ele)).withMessage("пробелы удаляй сынок!"),


check('user_surname').notEmpty().withMessage('Фамилия пользователя не может быть пустой.')
    .isLength({min: 2}).withMessage("надо больше 1-го символа!")
   
    .custom(ele => !/\s/.test(ele)).withMessage("пробелы запрещены!"),

], controller.updateUserMainInfo)


router.post('/updateUserPhoto', upload.single('user_photo'), [
    check('user_photo').custom((value, {req}) => { if (!req.file) {
        throw new Error('Фото обязательно для загрузки');
    }
    return true})

], controller.updateUserPhoto)

router.post('/updateUserPassword',upload.none(), [
    check('user_password').notEmpty().withMessage('нужен пароль')
    .isLength({min: 4, max: 25}).withMessage('пароль должен быть от 4-х до 25-ти символов')
    .custom(ele => !/\s/.test(ele)).withMessage("пробелы удаляй сынок!"),
    check('user_repeatPassword').notEmpty().withMessage('нужен пароль подтверждения')
    .isLength({min: 4, max: 25}).withMessage('пароль должен быть от 4-х до 25-ти символов')
    .custom(ele => !/\s/.test(ele)).withMessage("пробелы удаляй сынок!"),

], controller.updateUserPassword )


router.post('/verifyToUpdate', controller.verifyToUpdate)
router.post('/verifyToVerify', editUserDataVerify, controller.verifyToVerify)
router.get('/logout', controller.logout)
router.post('/getBuydOne', controller.getBuydOne)

router.get('/getReasonsToRefund', controller.getReasonsToRefund)
router.post('/postTicketsRefund', upload.none(),[
    check('reason_id').notEmpty().withMessage('выбирете причину возврата'),
  
], controller.postTicketsRefund)
router.post('/getTicketsRefund', controller.getTicketsRefund)


router.post('/registerOrganizer',uploadOrgan.single('photo'), [
    check('nickname').notEmpty().withMessage('Имя организатора не может быть пустым.')
        .custom(async(elem, {req}) =>{
            const rows = await prisma.organizers.findFirst({
                where:{organizer_nickname: req.body.nickname}
            })
            if(rows) if(rows.length >0){
                throw new Error("данное имя уже существует")
            }})
        .isLength({min: 2}).withMessage("надо больше 1-го символа!"),
    check('description').notEmpty().withMessage('Описание организатора не может быть пустым.')
        .isLength({min: 10 }).withMessage("надо больше 9-ти и меньше 200-х ста символа!"),
    check('phoneNumber').notEmpty().withMessage('Телефон организатора не может быть пустым.')
        .isLength({min: 10}).withMessage("надо больше 9-ти и меньше 15-ти символов!")
        .custom(ele => !/\s/.test(ele)).withMessage("пробелы удаляй сынок!"),
       
    check('sphere').notEmpty().withMessage('Сфера организатора не может быть пустой.')
    .isInt().withMessage('Сфера организатора должна быть числом.'),
    
    check('callback').notEmpty().withMessage('Способ связи организатора не может быть пустым.')
        .isInt().withMessage('Способ связи организатора должен быть числом.'),
    check('user_photo').custom((value, {req}) => { if (!req.file) {
        throw new Error('Фото обязательно для загрузки');
    }
    return true})
        
],controller.registerOrganizer)

router.post('/getOrganizerPosts', upload.none(), controller.getOrganizerPosts)


router.post('/getOrganizer', controller.getOrganizer)

router.post('/postOrganizerPosts',uploadPost.single('post_image'),[
    check('post_name').notEmpty().withMessage("нужно имя поста")
        .isLength({max: 30}).withMessage('максимум - 30 символов'),
    check('post_decription').notEmpty().withMessage("необходимо описание")
        .isLength({min: 10, max: 50}).withMessage("надо больше 10-ти и меньше 50-ти"),
    check('post_fullDecription').notEmpty().withMessage('надо полное описание')
        .isLength({min: 10, max: 500}).withMessage('надо больше 10-ти и меньше 500-ста'),
    check('post_cost').notEmpty().withMessage('нужно число')
    .custom(async(ele, {req}) =>{
        if(req.body.post_cost < 0){
            throw new Error('количество мест должно быть не меньше нуля')
        }
    }),
      check('user_photo').custom((value, {req}) => { if (!req.file) {
        throw new Error('Фото обязательно для загрузки');
    }
    return true}),
       
    check('post_allSeats').notEmpty().withMessage('нужно количество свободных мест')
    .custom(async(ele, {req}) =>{
        if(parseInt(req.body.post_allSeats) <1){
            throw new Error('количество мест должно быть больше нуля')
        }
    }),
    check('post_genre').notEmpty().withMessage('нужен жанр'),
    check('post_meetDate').notEmpty().withMessage('нужна дата встречи'),
    check('post_meetPlace').notEmpty().withMessage('нужно место встречи')
        .isLength({min:5, max: 100}).withMessage('нужно от 5-ти до 100 символов'),
    check('organizer_id').notEmpty().withMessage('ошибка передачи id организатора'),



], controller.postOrganizerPosts)

router.post('/postComment', upload.none(), [
    check('comment_content').notEmpty().withMessage("коментарий не должен быть пустой")
    .isLength({min: 5, max: 1000 }).withMessage('минимум комментарий 5 символов, максимум 1000')
], controller.postComment)

router.post('/getComments', upload.none(), controller.getComments)
router.post('/updateOrganizerInfo', upload.none(), [
    check('nickname').notEmpty().withMessage('Имя организатора не может быть пустым.')
    .custom(async(elem, {req}) =>{
        const rows = await prisma.organizers.findFirst({
            where:{organizer_nickname: req.body.nickname}
        })
        if(rows) if(rows.length >0){
            throw new Error("хули одно и тоже пишешь!!!")
        }})
    .isLength({min: 2}).withMessage("надо больше 1-го символа!"),
check('description').notEmpty().withMessage('Описание организатора не может быть пустым.')
    .isLength({min: 10 }).withMessage("надо больше 9-ти и меньше 200-х ста символа!"),
check('phoneNumber').notEmpty().withMessage('Телефон организатора не может быть пустым.')
    .isLength({min: 9}).withMessage("надо больше 8-ми и меньше 15-ти символов!")
    .custom(ele => !/\s/.test(ele)).withMessage("пробелы удаляй сынок!")
    .custom(async(elem, {req}) =>{
        const rows = await prisma.organizers.findFirst({
            where:{organizer_phoneNum: req.body.phoneNumber}
        })
        if(rows) if(rows.length >0){
            throw new Error("хули одно и тоже пишешь!!!")
        }}),
check('sphere').notEmpty().withMessage('Сфера организатора не может быть пустой.')
.isInt().withMessage('Сфера организатора должна быть числом.'),

check('callback').notEmpty().withMessage('Способ связи организатора не может быть пустым.')
    .isInt().withMessage('Способ связи организатора должен быть числом.'),

] ,controller.updateOrganizerInfo)
router.post('/updateOrganizerPhoto', uploadOrgan.single('photo'), controller.updateOrganizerPhoto)  

router.post('/userIshere', controller.userIshere)


router.post('/registrVerify', upload.none(),  [

    
    check('user_name').notEmpty().withMessage('Имя пользователя не может быть пустым.')
        .isLength({min: 2}).withMessage("надо больше 1-го символа!")
        
        .custom(ele => !/\s/.test(ele)).withMessage("пробелы удаляй сынок!"),


    check('user_surname').notEmpty().withMessage('Фамилия пользователя не может быть пустой.')
        .isLength({min: 2}).withMessage("надо больше 1-го символа!")
       
        .custom(ele => !/\s/.test(ele)).withMessage("пробелы удаляй сынок!"),

    check('user_mail').notEmpty().withMessage("нужен email")
            .isEmail().withMessage('введенный email неправелен')
            .custom(async(elem, {req}) =>{
                const rows = await prisma.Users.findMany({
                    where:{user_mail: req.body.user_mail}
                })


                if(rows) if(rows.length >0){
                    throw new Error("данная почта уже зарегестрирована!")
                }})
            .custom(ele => !/\s/.test(ele)).withMessage("пробелы удаляй сынок!"),
    check('user_password').notEmpty().withMessage('нужен пароль')
            .isLength({min: 4, max: 25}).withMessage('пароль должен быть от 4-х до 25-ти символов')
            .custom(ele => !/\s/.test(ele)).withMessage("пробелы удаляй сынок!"),

], controller.registrVerify)

router.post('/registr',
    upload.single('user_photo'), [
    check('user_name').notEmpty().withMessage('Имя пользователя не может быть пустым.')
        .isLength({min: 2}).withMessage("надо больше 1-го символа!")
        
        .custom(ele => !/\s/.test(ele)).withMessage("пробелы удаляй сынок!"),


    check('user_surname').notEmpty().withMessage('Фамилия пользователя не может быть пустой.')
        .isLength({min: 2}).withMessage("надо больше 1-го символа!")
       
        .custom(ele => !/\s/.test(ele)).withMessage("пробелы удаляй сынок!"),

    check('user_mail').notEmpty().withMessage("нужен email")
            .isEmail().withMessage('введенный email неправелен')
            .custom(async(elem, {req}) =>{
                const rows = await prisma.Users.findMany({
                    where:{user_mail: req.body.user_mail}
                })


                if(rows) if(rows.length >0){
                    throw new Error("данная почта уже зарегестрирована!")
                }})
            .custom(ele => !/\s/.test(ele)).withMessage("пробелы удаляй сынок!"),
    check('user_password').notEmpty().withMessage('нужен пароль')
            .isLength({min: 4, max: 25}).withMessage('пароль должен быть от 4-х до 25-ти символов')
            .custom(ele => !/\s/.test(ele)).withMessage("пробелы удаляй сынок!"),
    check('user_photo').custom((value, {req}) => { if (!req.file) {
        throw new Error('Фото обязательно для загрузки');
    }
    return true})

], controller.registr)

