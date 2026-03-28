import express from 'express'
import { adminLogin, approveComments, deleteComments, getAllComments, getDashBoard, getAllBlogsAdmin } from '../controllers/admin.controller.js';
import auth from '../Middlewares/auth.js';

const adminRouter = express.Router();

adminRouter.post('/login', adminLogin)
adminRouter.get('/comments',auth, getAllComments);
adminRouter.get('/blogs',auth, getAllBlogsAdmin);
adminRouter.post('/delete-comments',auth, deleteComments);
adminRouter.post('/approve-comments',auth, approveComments);
adminRouter.get('/dashboard',auth, getDashBoard);








export default adminRouter;