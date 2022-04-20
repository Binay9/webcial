import React from 'react';
import { Box, Card, CardHeader, Avatar, IconButton, 
    CardMedia, CardContent, Typography, CardActions, Checkbox } from '@mui/material';
import { FavoriteBorder, Share } from '@mui/icons-material';

const Feed = () => {
    return (
        <Box bgcolor="lightgreen" flex={4} p={2}>
            <Card>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                            R
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label='settings'>
                        
                        </IconButton>
                    }
                    title="Jhon Abraham"
                    subheader="April 20, 2022"
                />
                <CardMedia
                    component="img"
                    height="20%"
                    img=""
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
                        checkedIcon={<favorite sx={{color:"red"}} />}
                        />
                    </IconButton>
                    <IconButton aria-label="share">
                        <Share />
                    </IconButton>
                </CardActions>
            </Card>
        </Box >
    );
}

export default Feed;