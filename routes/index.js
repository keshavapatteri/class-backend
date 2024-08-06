const router = require('express').Router();
const productRoutes = require('./products/ProductRouter');
 const userRoutes = require('./users/userRoutes');

router.use ('/products',productRoutes);
  router.use('/users',userRoutes);

module.exports = router;

