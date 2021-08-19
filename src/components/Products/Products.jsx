import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

// MOCK PRODuCT
// const products = [
//     { id:1, name: "shoes", description: "Running shoes.", price: "$5" },
//     { id:2, name: "MacBook", description: "Apple macbook.", price: "$1000" },
// ];

const Products = ({ products }) => {
    const classes = useStyles();


    return ( 
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key= {product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )

}

export default Products;