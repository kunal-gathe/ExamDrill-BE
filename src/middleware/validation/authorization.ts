import { Request, Response, NextFunction } from "express";
import helper from "../../helper/helper";

// const Authenticated = async (req: Request, res: Response, next: NextFunction) => {

//     try {
//         const authToken = req.headers["authorization"];
//         const token = authToken && authToken.split(" ")[1];

//         if (!token) {
//             return res.status(401).send(helper.ResponseData(401, "Unauthorized", null, null));
//         }
//         const result = helper.ExtractToken(token!);
//         if (!result) {
//             return res.status(401).send(helper.ResponseData(401, "Unauthorized", null, null));
//         }
//         let userObj = await user.findOne({
//             where: {
//                 email: result?.email ?? ''
//             }
//         })
//         if (!userObj) {
//             return res.status(401).send(helper.ResponseData(401, "Unauthorized", null, null));
//         }
//         res.locals.user = userObj
//         next();

//     } catch (err: any) {
//         return res.status(500).send(helper.ResponseData(500, "", err, null));
//     }
// }
// const AuthenticatedAdmin = async (req: Request, res: Response, next: NextFunction) => {

//     try {
//         const authToken = req.headers["authorization"];
//         const token = authToken && authToken.split(" ")[1];

//         if (!token) {
//             return res.status(401).send(helper.ResponseData(401, "Unauthorized", null, null));
//         }
//         const result = helper.ExtractToken(token!);

//         if (!result) {
//             return res.status(401).send(helper.ResponseData(401, "Unauthorized", null, null));
//         }
//         let adminObj = await admin.findOne({
//             where: {
//                 email: result?.email ?? ''
//             }
//         })
//         if (!adminObj) {
//             return res.status(401).send(helper.ResponseData(401, "Unauthorized", null, null));
//         }
//         res.locals.admin = adminObj
//         next();

//     } catch (err: any) {
//         return res.status(500).send(helper.ResponseData(500, "", err, null));
//     }
// }

// export default { Authenticated, AuthenticatedAdmin }