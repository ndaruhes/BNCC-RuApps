const {User} = require('../models');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Validator = require('validatorjs')
const validatorMessage = require('../config/validatorMessage')
const {JWT_SECRET, JWT_SECRET_EXPIRES} = process.env

module.exports = {
    login: async(req, res) => {
        const userReq = {
            email: req.body.email,
            password: req.body.password,
        }

        if(formValidation(userReq, req.url) != null) return res.status(400).send(formValidation(userReq, req.url))

        let user = await findUser(req.body.email)
        if(!user){
            return res.status(400).json({email: req.body.email, message: 'User tidak terdaaftar'})
        }else{
            if(!verifyPassword(userReq.password, user.password)) return res.status(400).json({message: 'Kombinasi email dan password tidak sesuai'})

            let jwtExpires = req.body.rememberMe ? {} : {expiresIn: JWT_SECRET_EXPIRES}
            let token = jwt.sign(user.toJSON(), JWT_SECRET, jwtExpires)

            if(user.role == 'Admin'){
                res.json({
                    user: {
                        id: user.id,
                        email: user.email,
                        nama: user.nama,
                        role: user.role
                    },
                    message: 'Berhasil login',
                    token: token
                })
            }else if(user.role == 'Member'){
                res.json({
                    user: {
                        id: user.id,
                        email: user.email,
                        nama: user.nama
                    },
                    message: 'Berhasil Login',
                    token: token
                })
            }
        }
    },
    register: async(req, res) => {
        const userReq = {
            namaLengkap: req.body.namaLengkap,
            email: req.body.email,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword,
        }

        if(formValidation(userReq, req.url) != null) return res.status(400).send(formValidation(userReq, req.url))

        let user = await findUser(req.body.email)
        if(user){
            return res.status(400).json({email: req.body.email, message: 'Alamat email sudah digunakan'})
        }else{
            try{
                const newUser = await User.create({
                    namaLengkap: req.body.namaLengkap,
                    email: req.body.email,
                    password: hashPassword(req.body.password),
                })

                res.status(201).json({
                    user: {
                        id: newUser.id,
                        email: newUser.email,
                        namaLengkap: newUser.namaLengkap
                    },
                    message: 'Berhasil register',
                })
            }catch(err){
                res.status(400).json({
                    error: err.message,
                    message: 'Upss terjadi kesalahan'
                })
            }
        }        
    },
    profile: async (req, res) => {
        let user = await findUser(req.decoded.email)
        res.json({
            user: {
                email: user.email,
                namaLengkap: user.namaLengkap,
                role: user.role,
                createdAt: user.createdAt
            },
        })
    },
}

function findUser(email){
    return User.findOne({where: {email: email}})
}

function hashPassword(password){
    return bcrypt.hashSync(password, 10, null)
}

function verifyPassword(password, hashPassword){
    return hashPassword == null ? false : bcrypt.compareSync(password, hashPassword)
}

function formValidation(dataRequest, url){
    let rules
    if(url == '/register'){
        rules = {
            namaLengkap: 'required|min:3',
            email: 'required|email|min:5',
            password: 'required|min:5',
            confirmPassword: 'required|min:5|same:password'
        }
    }else if(url == '/login'){
        rules = {
            email: 'required|email|min:5',
            password: 'required|min:5',
        }
    }

    let validation = new Validator(dataRequest, rules, validatorMessage)
    if(validation.fails()){
        return {
            message: "Harap isi form dengan benar",
            errors: validation.errors.errors
        }
    }
}