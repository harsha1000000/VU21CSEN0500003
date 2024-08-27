const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());

// Example endpoint to get top products
app.get('/categories/:categoryname/products', async (req, res) => {
    const { categoryname } = req.params;
    const { top = 10, minPrice, maxPrice } = req.query;

    // Logic to fetch products from registered e-commerce APIs
    try {
        const products = await fetchTopProducts(categoryname, top, minPrice, maxPrice);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching products' });
    }
});

// Function to fetch top products (mock implementation)
async function fetchTopProducts(categoryname, top, minPrice, maxPrice) {
    // Mock data; replace with actual API calls as needed
    return [
        { id: 1, name: 'Product A', price: 100, category: categoryname },
        { id: 2, name: 'Product B', price: 150, category: categoryname },
    ].slice(0, top);
}

app.listen(PORT, () => {
    console.log(Server is running on http://localhost:${PORT});
});