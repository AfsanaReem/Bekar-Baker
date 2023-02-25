import { Box, Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

const Banner = () => {
    return (
        <Box style={{
            backgroundImage: `url(https://i.ibb.co/FhGfBvB/istockphoto-1431183547-612x612-2.jpg)`,
        }} sx={{
            height: '80vh',
            p: 4,
            display: 'flex',
            // clipPath: 'polygon(0% 2%, 95% 10%, 98% 95%, 2% 90%)',
            alignItems: 'center',
            mb: 2
        }}>
            <Stack spacing={2}>
                <Typography variant='h4' gutterBottom="true">Welcome to the Bekar's Bakery.</Typography>
                <Typography variant='h5' gutterBottom="true">Enjoy our freshly baked goods and many more delicious cookings.</Typography>
                <Button variant='outlined'
                    sx={{
                        backgroundColor: '#f68787', borderColor: 'black', color: 'black', '&:hover': {
                            backgroundColor: 'none',
                            borderColor: '#f68787',
                        }, width: '50%'
                    }}
                >Order Now!!
                </Button>
            </Stack>
            <Box sx={{ display: ['none', 'none', 'block'] }}>
                <img src='https://i.ibb.co/fpkts37/output-onlinegiftools.gif' alt='Loading....'></img>
            </Box>
        </Box>
    );
};

export default Banner;