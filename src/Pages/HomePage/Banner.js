import { Box, Typography } from '@mui/material';
import React from 'react';

const Banner = () => {
    return (
        <Box sx={{
            height: '80vh',
            backgroundColor: '#f4cccc',
            p: 4,
            display: 'flex',
            clipPath: 'polygon(0 0, 95% 10%, 96% 95%, 0% 90%)'
        }}>
            <Typography>Welcome to the Bekar's Bakery.<br /> Enjoy our freshly baked goods and many homemade delicious foods.</Typography>
            <img src='https://i.ibb.co/fpkts37/output-onlinegiftools.gif' alt='Loading....'></img>
        </Box>
    );
};

export default Banner;