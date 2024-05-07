import express, {RequestHandler} from "express";
import {verifyTokenUser} from "../middlewares/auth";
import {getBookings} from "../controllers/my-booking";

const router = express.Router()


// /api/my-bookings
router.get('/', verifyTokenUser, getBookings)

export default router