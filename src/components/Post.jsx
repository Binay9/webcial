import {Card, CardHeader, Avatar, IconButton,
    CardMedia, CardContent, Typography, CardActions, Checkbox
} from '@mui/material';
import { MoreVert, FavoriteBorder, Favorite, Share } from '@mui/icons-material';
import React from 'react';

import user from '../Images/User.jpg';
import nature from '../Images/Nature.jpg';

const Post = () => {

    return (

        <Card sx={{ mb: 5 }}>
            <CardHeader
                avatar={
                    <Avatar src={user} alt="User Image" aria-label="recipe" />
                }
                action={
                    <IconButton aria-label='settings'>
                        <MoreVert />
                    </IconButton>
                }
                title="Jhon Abraham"
                subheader="April 20, 2022"
            />
            <CardMedia
                component="img"
                height="20%"
                image={nature}
                alt="J"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid adipisci natus consectetur necessitatibus voluptate fugiat dicta mollitia, velit aspernatur, nobis ullam officia tempore sint illum incidunt placeat? Quibusdam, quisquam tenetur!
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder />}
                        checkedIcon={<Favorite sx={{ color: "red" }} />}
                    />
                </IconButton>
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Post;    