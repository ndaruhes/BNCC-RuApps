const {Contact} = require('../models');
const Validator = require('validatorjs')
const validatorMessage = require('../config/validatorMessage')

module.exports = {
    index: async(req, res) => {
        try{
            let contacts = await Contact.findAll()
            res.send(contacts)
        }catch(err){
            res.status(400).json({
                error: err.message,
                message: 'Upss terjadi kesalahan'
            })
        }
    },
    show: async(req, res) => {
        try{
            const message = await findMessage(req.params.id)
            if(message != null){
                res.json(message)
            }else{
                res.status(404).json({message : 'Pesan tidak ditemukan'})
            }
        }catch(err){
            res.status(400).json({
                error: err.message,
                message: 'Upss terjadi kesalahan'
            })
        }
    },
    store: async(req, res) => {
        const messageReq = {
            namaLengkap: req.body.namaLengkap,
            email: req.body.email,
            pesan: req.body.pesan
        }

        if(formValidation(messageReq) != null) return res.status(400).send(formValidation(messageReq))
        
        try{
            const newMessage = await Contact.create(messageReq);
            res.json({
                pesan: newMessage,
                message: 'Pesan berhasil dikirim'
            })
        }catch(err){
            res.status(400).json({
                error: err.message,
                message: 'Upss terjadi kesalahan'
            })
        }
    },
    delete: async(req, res) => {
        const message = await findMessage(req.params.id)
        if(message != null){
            if(req.decoded.role == 'Admin'){
                try{
                    message.destroy()
                    res.json({
                        message: 'Pesan berhasil dihapus',
                    });
                }catch(err){
                    res.status(400).json({
                        error: err.message,
                        message: 'Upss terjadi kesalahan'
                    })
                }
            }else{
                res.status(403).json({message: 'Tidak dapat menghapus'})
            }
        }else{
            res.status(404).json({message : 'Pesan tidak ditemukan'})
        }
    },
}

function findMessage(id){
    return Contact.findOne({where: {id: id}})
}

function formValidation(dataRequest){
    let rules = {
        namaLengkap: 'required|min:3',
        email: 'required|email',
        pesan: 'required|min:10'
    }

    let validation = new Validator(dataRequest, rules, validatorMessage)
    if(validation.fails()){
        return {
            message: "Harap isi form dengan benar",
            errors: validation.errors.errors
        }
    }
}