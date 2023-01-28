const Repair = require("../models/product.model")

exports.findProducts = async (req, res) => {

    const repaires = await Repair.findAll({
        where:{
            status: true
        }
    })


    res.status(200).json({
        status: 'success',
        message: 'The repair was found satisfactorily',
        repaires
    })
  }

  exports.findProduct = async (req,res)=>{

    const {id} = req.body

    const repair = await Repair.findOne({
        where : {
            id,
            status: true
        }
    })

    if(!repair){
        res.status(404).json({
            status: 'error',
            message: 'The repair is not pending'
        })
    }

    return res.status(200).json({
        status: 'success',
        message: 'Router find repair by id',
        repair
    })
  }

exports.createProduct = async(req,res) => {

    try{
        const {date,userId,stock} = req.body

        const newRepair = await Repair.create({
            date,
            userId,
            stock
        })
    
        res.status(201).json({
            status: 'success',
            message: 'ROUTE - POST Desde el controlador',
            newRepair,
        })
    } catch(error){
        console.log(error);
        return res.status(500).json({
            status: 'fail',
            message: 'Internal server error'
        })
    }
    
}

exports.updateProduct = async (req,res) => {

    const {id} = req.params

    const {date, status} = req.body
    
    const repair = await Repair.findOne({
        where:{
            id,
            status: true
        }
    })

    if(!repair){
        res.status(404).json({
            status: 'error',
            message: 'The repair is not pending'
        })
    }

    const updateActulice = await repair.update({status: 'Canceled'})


    res.status(200).json({
        status: 'success',
        message: 'the repair was updated',
        updateActulice
    })
}

exports.deleteProduct = async (req,res) => {
    
    const {id} = req.params

    const repair = await Repair.findOne({
        where:{
            id,
            status: true
        }
    })

    if(!repair){
        return res.status(404).json({
            status: 'error',
            message: 'The repair was not found'
        })
    }

    await repair.update({status: false})

    res.status(200).json({
        status: 'success',
        message: 'The repair was done',
        id
    })
}