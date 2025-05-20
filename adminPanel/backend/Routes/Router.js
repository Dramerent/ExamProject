import express from "express"
import { Controller } from "../Controllers/controller.js"
import { check } from "express-validator"

import { PrismaClient } from '../generated/prisma/index.js'
export const prisma = new PrismaClient()

export const controller = new Controller()

export const router = express.Router()


router.get('/getUnSuccessfullOrganizers', controller.getUnSuccessfullOrganizers)
router.get('/getFalselOrganizers', controller.getFalselOrganizers)
router.get('/getUnSuccessfullPosts', controller.getUnSuccessfullPosts)


router.post('/successProfile', controller.successProfile)
router.post('/postFalseOrganizer',[
    check('organizer_reasonToCancel').notEmpty().withMessage('нельзя отправлять пустое сообщение')
], controller.postFalseOrganizer)
router.get('/getAllOrganizers', controller.getAllOrganizers)

router.get('/getWaitPosts', controller.getWaitPosts)
router.get('/getSuccessPosts', controller.getSuccessPosts)
router.get('/getFalsePosts', controller.getFalsePosts)

router.post('/successPost', controller.successPost)
router.post('/falsePost', controller.falsePost)

router.get('/getWaitRefind', controller.getWaitRefind)
router.get('/getFalseRefind', controller.getFalseRefind)
router.post('/successRefind', controller.successRefind)
router.post('/falseRefind', controller.falseRefind)