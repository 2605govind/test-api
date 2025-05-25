import express  from 'express'
import { getPlayWithFriend } from '../controller/playcontroller.js';
const playrouter = express.Router();


playrouter.get('/playwithfriend', getPlayWithFriend);

export default playrouter;