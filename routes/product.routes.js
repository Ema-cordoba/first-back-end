const { Router } = require("express");
const { findProduct, createProduct, updateProduct, deleteProduct, findProducts } = require("../controllers/product.controllers");

const router = Router();


router.get('/:id', findProduct )

router.get('/', findProducts )

router.post('/', createProduct)

router.patch('/', updateProduct)

router.put('/',(req,res) => {
    res.json({
        status: 'success',
        message: 'ROUTE - PUT'
    })
})

router.delete('/:id', deleteProduct)


module.exports = {
    productRouter: router,
}