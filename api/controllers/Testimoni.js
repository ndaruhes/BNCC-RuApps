const {Testimoni, User} = require('../models');
const jwt = require('jsonwebtoken')
const Validator = require('validatorjs')
const validatorMessage = require('../config/validatorMessage')

module.exports = {
    index: async(req, res) => {
        const token = req.headers['authorization']
        let decoded = jwt.verify(token, process.env.JWT_SECRET)
        
        try{
            let testimoni
            if(decoded.role == 'Member'){
                testimoni = await Testimoni.findAll({include: [{model: User, as: 'user'}], where: {userId: decoded.id}})
            }else{
                testimoni = await Testimoni.findAll({include: [{model: User, as: 'user'}]})
            }
            res.send(testimoni.map(item => {
                return {
                    quote: item.quote,
                    user: item.user.namaLengkap
                }
            }))
        }catch(err){
            res.status(400).json({
                error: err.message,
                message: 'Upss terjadi kesalahan'
            })
        }
    },
    store: async(req, res) => {
        const testimoniReq = {
            quote: req.body.quote,
            userId: req.decoded.id
        }

        if(formValidation(testimoniReq, req.url) != null) return res.status(400).send(formValidation(testimoniReq, req.url))

        try{
            const newTestimoni = await Testimoni.create(testimoniReq);
            res.json({
                testimoni: newTestimoni,
                message: 'Testimoni berhasil ditambah',
            });
        }catch(err){
            res.status(400).json({
                error: err.message,
                message: 'Upss terjadi kesalahan'
            })
        }
    },
    show: async(req, res) => {
        try{
            const testimoni = await findTestimoni(req.params.id)
            if(testimoni != null){
                res.json({
                    quote: testimoni.quote,
                    user: testimoni.user.namaLengkap
                })
            }else{
                res.status(404).json({message : 'Testimoni tidak ditemukan'})
            }
        }catch(err){
            res.status(400).json({
                error: err.message,
                message: 'Upss terjadi kesalahan'
            })
        }
    },
    update: async(req, res) => {
        const testimoni = await findTestimoni(req.params.id)
        if(testimoni != null){
            const testimoniReq = {quote: req.body.quote}
            
            if(formValidation(testimoniReq, req.url) != null) return res.status(400).send(formValidation(testimoniReq, req.url))

            if(testimoni.userId == req.decoded.id){
                try{
                    testimoni.update(testimoniReq)
                    res.json({
                        quote: testimoni.quote,
                        user: testimoni.user.namaLengkap,
                        message: 'Testimoni berhasil diubah',
                    });
                }catch(err){
                    res.status(400).json({
                        error: err.message,
                        message: 'Upss terjadi kesalahan'
                    })
                }
            }else{
                res.status(403).json({message: 'Upss terjadi kesalahan'})
            }
        }else{
            res.status(404).json({message : 'Testimoni tidak ditemukan'})
        }
    },
    delete: async(req, res) => {
        const testimoni = await findTestimoni(req.params.id)
        if(testimoni != null){
            if(testimoni.userId == req.decoded.id){
                try{
                    testimoni.destroy()
                    res.json({
                        testimoni: testimoni.quote,
                        message: 'Testimoni berhasil dihapus',
                    });
                }catch(err){
                    res.status(400).json({
                        error: err.message,
                        message: 'Upss terjadi kesalahan'
                    })
                }
            }else{
                res.status(403).json({message: 'Upss terjadi kesalahan'})
            }
        }else{
            res.status(404).json({message : 'Testimoni tidak ditemukan'})
        }
    }
}

function findTestimoni(id){
    return Testimoni.findOne({where: {id: id}, include: [{model: User, as: 'user'}]})
}

function formValidation(dataRequest, url){
    let rules = {
        quote: 'required|min:10|max:200'
    }

    let validation = new Validator(dataRequest, rules, validatorMessage)
    if(validation.fails()){
        return {
            message: "Harap isi form dengan benar",
            errors: validation.errors.errors
        }
    }
}