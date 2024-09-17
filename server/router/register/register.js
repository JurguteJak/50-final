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
    if (typeof req.body !== 'object'
        || Array.isArray(req.body)
        || req.body === nul
    ) {
        return res.json({
            status: 'error',
            data: 'Pagrindinis duomenu tipas turi buti objektas',
        });
    }

    const requiredFields = ['username', 'password'];

    if (Object.keys(req.body).length !== requiredFields.length) {
        return res.json({
            status: 'error',
            data: `Objekte turi buti tik ${requiredFields.length} raktai: ${requiredFields.join(', ')}`,
        });
    }

    const { username, password } = req.body;

    const usernameError = isValidUsername(username);

    if (usernameError) {
        return res.json({
            status: 'error',
            data: usernameError,
        });
    }

    const passwordError = isValidPassword(password);

    if (passwordError) {
        return res.json({
            status: 'error',
            data: passwordError,
        });
    }

    // const sql = 'INSERT INTO users (username, password) VALUES ("ssss", "asasdd");';

    // try {
    //     const result = await connection.execute(sql);
    //     console.log(result);

    // } catch (error) {
    //     return res.json({
    //         status: 'error',
    //         data: 'Del techniniu kliuciu nepavyko ivykdyti registracijos proceso, pabandykite veliau',
    //     });
    // }

    return res.json({
        status: 'success',
        data: 'Sekminga registracija',
    });
}