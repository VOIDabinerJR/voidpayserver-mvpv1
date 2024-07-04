const User = require('../models/User');

exports.createUser = (req, res) => {
    const { email, password } = req.body;
    User.create({ email, password }, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Usuário criado com sucesso', userId: results.insertId });
    });
};

exports.getAllUsers = (req, res) => {
    User.findAll((err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};
