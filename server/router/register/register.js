import { connection } from '../../db.js';
import express from 'express'

export const registerAPIrouter = express.Router();

registerAPIrouter.post('/', postRegister);

registerAPIrouter.use((req, res) => {
    return res.json({
        status: 'success',
        data: 'Toks HTTP metodas /api/register nepalaikomas',
    });
});

async function postRegister(req, res) {
    console.log(req.body);

    return res.json({
        status: 'success',
        data: '',
    });
}