import express from 'express'
import { getMessage, sendMessage } from '../controllers/message.controller.js'

const router = express.Router()

router.get('/get/:id',getMessage)
router.post('/send/:id',sendMessage)

export default router