import { Box, Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

const Banner = () => {
    return (
        <Box sx={{
            height: '80vh',
            backgroundColor: '#f4cccc',
            p: 4,
            display: 'flex',
            clipPath: 'polygon(0% 2%, 95% 10%, 96% 95%, 2% 90%)',
            alignItems: 'center'
        }}>
            <Stack spacing={2}>
                <Typography variant='h4'>Welcome to the Bekar's Bakery.</Typography>
                <Typography variant='h5'>Enjoy our freshly baked goods and many more delicious cookings.</Typography>
                <Button variant='outlined' sx={{
                    borderColor: '#f68787', color: 'black', '&:hover': {
                        backgroundColor: '#f68787',
                        borderColor: '#f68787',
                    }, width: '50%'
                }}>Order Now!!
                </Button>
            </Stack>
            <Box sx={{ display: ['none', 'none', 'block'] }}>
                <img src='https://i.ibb.co/fpkts37/output-onlinegiftools.gif' alt='Loading....'></img>
            </Box>
        </Box>
    );
};

export default Banner;