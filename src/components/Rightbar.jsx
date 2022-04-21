import React from 'react';
import {
    Box, Avatar, AvatarGroup, Typography, ImageList, ImageListItem, List,
    ListItem, ListItemAvatar, ListItemText
} from '@mui/material';
import user from '../Images/User.jpg'
import nature from '../Images/Nature.jpg'


const Rightbar = () => {
    return (
        <Box bgcolor="lightblue" flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
            <Box position="fixed" width={300} align-items="center">
                <Typography variant="h6" fontWeight={100} mb={1}>Online Friends</Typography>
                <AvatarGroup max={7}>
                    <Avatar src={user} alt="A user" />
                    <Avatar alt="B user" />
                    <Avatar src={user} alt="A user" />
                    <Avatar src={user} alt="A user" />
                    <Avatar alt="B user" />
                    <Avatar src={user} alt="A user" />
                    <Avatar alt="B user" />
                    <Avatar src={user} alt="A user" />
                    <Avatar alt="B user" />
                    <Avatar alt="B user" />
                </AvatarGroup>
                <Typography variant="h6" fontWeight={100} my={2}>My Photos</Typography>
                <ImageList cols={3} rowHeight={99} gap={3}>
                    <ImageListItem>
                        <img src={user} alt="user " />
                    </ImageListItem>
                    <ImageListItem>
                        <img src={nature} alt="user" />
                    </ImageListItem>
                    <ImageListItem>
                        <img src={user} alt="user " />
                    </ImageListItem>
                </ImageList>
                <Typography variant="h6" fontWeight={100} my={2}>Latest Conversations</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="user" src={user} />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Goa Beach Weekend"
                            secondary={
                                <React.Fragment>
                                    <Typography sx={{ display: "inline" }}
                                        component="span"
                                        varient="body2"
                                        color="text.primary">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </Typography>
                                </React.Fragment>
                            } />
                    </ListItem>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="user" src="" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Bahia Beach Club"
                            secondary={
                                <React.Fragment>
                                    <Typography sx={{ display: "inline" }}
                                        component="span"
                                        varient="body2"
                                        color="text.primary">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </Typography>
                                </React.Fragment>
                            } />
                    </ListItem>

                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="user" src={user} />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Bake Beach"
                            secondary={
                                <React.Fragment>
                                    <Typography sx={{ display: "inline" }}
                                        component="span"
                                        varient="body2"
                                        color="text.primary">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </Typography>
                                </React.Fragment>
                            } />
                    </ListItem>
                </List>

            </Box>
        </Box>
    );
}

export default Rightbar;