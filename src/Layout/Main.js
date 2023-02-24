import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../SharedComponents/Navbar'
import Footer from '../SharedComponents/Footer'

const Main = () => {
    return (
        <Box>
            <Container maxWidth='lg'>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </Container>
        </Box>
    );
};

export default Main;