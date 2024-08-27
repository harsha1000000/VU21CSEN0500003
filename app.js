const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Mock database to store registered company data
let registeredCompany = {
    companyName: '',
    clientID: '',
    clientSecret: '',
    ownerName: '',
    ownerEmail: '',
    rollNo: ''
};

// Register Company API
app.post('/register', async (req, res) => {
    const { companyName, ownerName, rollNo, ownerEmail, accessCode } = req.body;

    // Simulate registration with the test server
    registeredCompany = {
        companyName,
        clientID: '37bb493c-73d3-47ea-8675-21f66ef9b735',
        clientSecret: 'HVIQBVbqmTGEmaED',
        ownerName,
        ownerEmail,
        rollNo
    };

    res.json(registeredCompany);
});

// Get Top N Products API
app.get('/categories/:categoryname/products', async (req, res) => {
    const { categoryname } = req.params;
    const { top, minPrice, maxPrice, page = 1 } = req.query;

    const limit = Math.min(top, 10); // Limit to 10
    const offset = (page - 1) * limit;

    try {
        const response = await axios.get(http://20.244.56.144/test/companies/AMZ/categories/${categoryname}/products, {
            params: {
                top: limit,
                minPrice,
                maxPrice
            }
        });

        const products = response.data.slice(offset, offset + limit).map((product, index) => ({
            id: ${categoryname}-${offset + index + 1},
            productName: product.productName,
            price: product.price,
            rating: product.rating,
            discount: product.discount,
            availability: product.availability
        }));

        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching products' });
    }
});

// Get Specific Product API
app.get('/categories/:categoryname/products/:productid', (req, res) => {
    const { productid } = req.params;
    // Logic to fetch specific product details based on productid
    // This would typically involve searching a database or cache
    res.json({ message: Details for product ${productid} });
});

app.listen(PORT, () => {
    console.log(Server running on port ${PORT});
});