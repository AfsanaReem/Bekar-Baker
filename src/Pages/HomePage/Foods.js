import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { ImageListItemBar } from '@mui/material';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function QuiltedImageList() {
    return (
        <ImageList
            sx={{ width: 1150, height: 'auto' }}
            variant="quilted"
            cols={4}
            rowHeight={221}
        >
            {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        sx={{
                            background:
                                'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                        }}
                        title={item.title}
                        position="top"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: 'https://i.ibb.co/qrbk4LK/plated-blueberry-cheesecake-hero-720x720.jpg',
        title: 'Blueberry Cheesecake',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://i.ibb.co/XLsK30N/new-york-cheesecake-20451-16x9.jpg',
        title: 'New York Cheesecake',
    },
    {
        img: 'https://i.ibb.co/q78w031/SQ-190224-Strawberry-Cheesecake.jpg',
        title: 'Strawberry Cheesecake',
    },
    {
        img: 'https://i.ibb.co/xj5VgXY/images-q-tbn-ANd9-Gc-R5-R9-SBGIMB2js7-K0-Tycw-UETrs4-56-CJ1x-IUQ-usqp-CAU.jpg',
        title: 'Cotton Sponge Cake',
        cols: 2,
        rows: 2
    },
    {
        img: 'https://i.ibb.co/sQthTpW/thumb-3.jpg',
        title: 'Homemade Mandu (Korean Dumplings)',
        cols: 2,
        rows: 2
    },
    {
        img: 'https://i.ibb.co/bmJ23vD/pt-Rv8-Im-Qb28dyu-RMPQD8-0-S9-A8546.jpg',
        title: 'Lactation Cookies',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://i.ibb.co/jwhf6RP/featured-cheesecaked-0792.jpg',
        title: 'Cheesecake Brownie',
        cols: 2
    },

];