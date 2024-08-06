
const { addProduct, getAllProduct, getProductById,updateProduct,deleteProduct } = require('../../controllers/productController');
const asyncHandler = require('../../utils/asyncHandler');

const router = require('express').Router();

// CRUD operations
router.post('/', asyncHandler(addProduct));
router.get('/', asyncHandler( getAllProduct))
router.put('/:id', asyncHandler(updateProduct ))
router.delete('/:id', asyncHandler( deleteProduct))
.get('/:id', asyncHandler(getProductById))

module.exports = router;
