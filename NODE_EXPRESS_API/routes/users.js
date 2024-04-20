import express from "express";

import { createuser, deleteuser, getuser,getusersid,userupdate } from '../controller/users.js';

const router = express.Router();

let users = [ ];

router.get('/',getuser);

router.get('/:id',getusersid);

router.post('/',createuser);

router.delete('/:id',deleteuser);

router.patch('/:id',userupdate);

export default router;
