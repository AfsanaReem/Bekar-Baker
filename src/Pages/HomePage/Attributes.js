import { Avatar, Box, Card, CardHeader, Zoom } from '@mui/material';
import React, { useState } from 'react';

const Attributes = () => {
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(true);
    };
    return (
        <div onMouseEnter={handleChange}>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' }, height: { lg: 80 }, mx: 4, mb: 4, justifyContent: 'space-evenly', alignItems: 'center', rowGap: 2 }}>
                <Zoom in={checked}>
                    <Card sx={{ maxWidth: 345, backgroundColor: '#fbe7e7' }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{}} aria-label="Delivery" src='https://cdn-icons-png.flaticon.com/512/3043/3043371.png'>

                                </Avatar>
                            }

                            title="Super Fast Home Delivery"
                            subheader="Get yours now"
                        />
                    </Card>
                </Zoom>
                <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
                    <Card sx={{ maxWidth: 345, backgroundColor: '#fbe7e7' }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{}} aria-label="Delivery" src='https://cdn-icons-png.flaticon.com/512/1037/1037762.png'>

                                </Avatar>
                            }

                            title="Delicious Healthy Foods"
                            subheader="Try us now"
                        />
                    </Card>
                </Zoom>
                <Zoom in={checked} style={{ transitionDelay: checked ? '1000ms' : '0ms' }}>
                    <Card sx={{ maxWidth: 345, backgroundColor: '#fbe7e7' }}>
                        <CardHeader
                            avatar={
                                <Avatar sx={{}} aria-label="Delivery" src='https://cdn-icons-png.flaticon.com/512/1484/1484560.png'>

                                </Avatar>
                            }

                            title="Over Hundreds of Reviews"
                            subheader="Give reviews and get vouchers"
                        />
                    </Card>
                </Zoom>
            </Box>
        </div >
    );
};

export default Attributes;