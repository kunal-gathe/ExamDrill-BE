import Validator from 'validatorjs'
import { Request, Response, NextFunction } from 'express'
import Helper from '../../helper/helper'
import { validate } from 'uuid'

// const registerValidation = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const { firstName, lastName, email, password, phoneNumber } = req.body

//         const data = {
//             firstName,
//             lastName,
//             email,
//             password,
//             phoneNumber,
//         };

//         const users: Validator.Rules = {
//             "firstName": "required|string|max:50",
//             "lastName": "required|string|max:50",
//             "email": "required|email",
//             "password": "required|min:8",
//             "phoneNumber": "required|min:10",
//         }

//         const validator = new Validator(data, users);
//         if (validator.fails()) {
//             return res.status(400).send(Helper.ResponseData(400, "Bad Request", validator.errors, null))
//         }
//         const user = await User.findOne({
//             where: {
//                 email: data.email
//             }
//         })

//         if (user) {
//             const errorData = {
//                 errors: {
//                     email: ["email already used"]

//                 }
//             }
//             return res.status(400).send(Helper.ResponseData(400, "Bad Request", errorData, null))

//         }
//         next()
//     } catch (error) {
//         return res.status(500).send(Helper.ResponseData(500, "", error, null))

//     }
// }

// export default { registerValidation }