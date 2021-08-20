import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { classes } from 'istanbul-lib-coverage';

const Cart = (cart) => {
    const isEmpty = cart.line_items.length = 0;

    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your Shopping Cart, start adding some!</Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} keu={item.id}>
                        <div>{item.name}</div>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>

            </div>

        </>
    )


    return(
        <Container>
            <div className={classes.toolbar} />
            <Typography classname={classes.title} variant="h3">Your shoppping Cart</Typography>
            { isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart