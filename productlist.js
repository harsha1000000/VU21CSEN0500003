// ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000');
            setProducts(response.data);
            setLoading(false);
        };
        fetchProducts();
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <Grid container spacing={2}>
            {products.map(product => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5">{product.productName}</Typography>
                            <Typography>Price: ${product.price}</Typography>
                            <Typography>Rating: {product.rating}</Typography>
                            <Typography>Discount: {product.discount}%</Typography>
                            <Typography>Availability: {product.availability}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductList;