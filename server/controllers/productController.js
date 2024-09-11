const productService = require('../services/productService');

const getAllProducts = async (req, res) => {
    const products = await productService.getAllProducts();
    res.json(products);
};

// Other controller functions...

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
};