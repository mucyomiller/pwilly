import express from 'express';
const router = express.Router();
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

import {index,getItemById,getAllItems, addItem, addImageToCloudnary} from '../controllers';

router.get('/', index);
router.get('/items/:id', getItemById);
router.get('/items', getAllItems);
router.post('/items', addItem);
router.post('/upload',multipartMiddleware, addImageToCloudnary);


export default router;