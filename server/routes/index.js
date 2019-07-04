import express from 'express';
const router = express.Router();
import {index,getItemById,getAllItems, addItem} from '../controllers';

router.get('/', index);
router.get('/items/:id', getItemById);
router.get('/items', getAllItems);
router.post('/items', addItem);


export default router;