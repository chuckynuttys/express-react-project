const axios = require('axios');


const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/ebay/items', async (req, res) => {

    try{

        const response = await axios.get('https://api.ebay.com/buy/browse/v1/item_summary/search', {
            params: {

            },
            headers: {
                'Authorization' : 'Bearer'
            }

        });


    }
    catch (error){
        console.error('Error fetching products', error.response ? error.response.data : error.message);
        res.status(500).json({ message: 'Failed to fetch products', error: error.message });
    }

})