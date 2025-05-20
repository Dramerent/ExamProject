import { validationResult } from 'express-validator'
import { PrismaClient } from '../generated/prisma/index.js'
export const prisma = new PrismaClient()

export class Controller{
    async getUnSuccessfullOrganizers(req, res){
        const all = await prisma.organizers.findMany({
            where:{
                organizer_verified: null
            },
            include:{
                Sphere:true,
                callbacks: true
            }
        })
        return res.json(all)
    }
     async getFalselOrganizers(req, res){
        const all = await prisma.organizers.findMany({
            where:{
                organizer_verified: false
            },
            include:{
                Sphere:true,
                callbacks: true
            }
        })
        return res.json(all)
    }
    async getUnSuccessfullPosts(req, res){
        const a = await prisma.createdPosts.findMany({
            where:{
                post_checked: null
            }
        })
        return res.json(a)
    }
    async successProfile(req, res){
        const {organizer_id} = req.body
        const updateProfile = await prisma.organizers.update({
            data:{
                organizer_verified:true,
                organizer_reasonToCancel: null
            },
            where:{ organizer_id: organizer_id}
        })
      
        return res.json(true)
    }
    async postFalseOrganizer(req, res){
        
        const error = validationResult(req)
        if(!error.isEmpty()){
            return res.status(404).json(error.errors[0].msg)
        }
        const {organizer_id, organizer_reasonToCancel} = req.body


        const falseOrganizer = await prisma.organizers.update({
            data:{
                organizer_reasonToCancel: organizer_reasonToCancel,
                organizer_verified: false
            },
            where:{
                organizer_id: organizer_id
            }
        })

      
        return res.json(true)
    }
    async getAllOrganizers(req, res){
        const organizers = await prisma.organizers.findMany({
            include:{
                Sphere: true,
                callbacks: true
            },
            where:{
                organizer_verified: true
            }
        })

        return res.json(organizers)
    }


    async getWaitPosts(req, res){
        const posts = await prisma.createdPosts.findMany({
            where:{
                post_checked: null
            },
            include:{
                Genres:{
                    include:{
                        Sphere:true
                    }
                }
            }
        })
        return res.json(posts)
    }
    async getSuccessPosts(req, res){
         const posts = await prisma.createdPosts.findMany({
            where:{
                post_checked: true
            },
            include:{
                Genres:{
                    include:{
                        Sphere:true
                    }
                }
            }
         })
        return res.json(posts)
    }
    async getFalsePosts(req, res){
         const posts = await prisma.createdPosts.findMany({
            where:{
                post_checked: false
            },
            include:{
                Genres:{
                    include:{
                        Sphere:true
                    }
                }
            }
         })
        return res.json(posts)
    }
    async successPost(req, res){
        const {post_id} = req.body

        await prisma.createdPosts.update({
            data:{
                post_checked: true
            },
            where:{
                post_id: post_id
            }

        })
        return res.json(true)
    }
    async falsePost(req, res){
          const {post_id} = req.body

        await prisma.createdPosts.update({
            data:{
                post_checked: false
            },
            where:{
                post_id: post_id
            }

        })
        return res.json(true)
    }

    async getWaitRefind(req, res){
        const refind = await prisma.ticketRefund.findMany({
            where:{
                ticketRefind_isConfirm: null
            },
            include:{
                ReasonsToRefund: true,
                Users: true,
                Tickets: true
            }
        })
        return res.json(refind)
    }
    async getFalseRefind(req, res){
        const refind = await prisma.ticketRefund.findMany({
            where:{
                ticketRefind_isConfirm: false
            },
            include:{
                ReasonsToRefund: true,
                Users: true,
                Tickets: true
            }
        })
        return res.json(refind)

    }

    async successRefind(req, res){
        const {refind_id} = req.body


        const updateRefind = await prisma.ticketRefund.update({
            where:{
                ticketRefund_id: refind_id
            },
            data:{
                ticketRefind_isConfirm: true
            }
        })

        const getRefind = await prisma.ticketRefund.findFirst({
            where:{
                ticketRefund_id: refind_id
            },
            include:{
                ReasonsToRefund: true,
                Users: true,
                Tickets: {
                    include:{
                        CreatedPosts: true
                    }
                }
            }
        })
        await prisma.createdPosts.update({
            data:{
                post_buydSeats: getRefind.Tickets.CreatedPosts.post_buydSeats - getRefind.ticketRefund_quantity
            },
            where:{
                post_id: getRefind.Tickets.CreatedPosts.post_id
            }
        })
        await prisma.tickets.update({
            data:{
                ticket_isRefind: true,
                ticket_quantity: getRefind.Tickets.ticket_quantity - getRefind.ticketRefund_quantity
            },
            where:{
                ticket_id: getRefind.Tickets.ticket_id
            }
        })


        res.json(true)
    }
    async falseRefind(req, res){
        const {refind_id} = req.body

        await prisma.ticketRefund.update({
            data:{
                ticketRefind_isConfirm: false
            },
            where:{
                ticketRefund_id: refind_id
            }
        })
        return res.json(true)

    }
    
    
}