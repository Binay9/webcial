import { Fab, Tooltip, styled, Modal, Typography, Avatar, TextField, Box, Stack, ButtonGroup, Button } from '@mui/material';
import { Add as AddIcon, EmojiEmotions, PersonAdd, Image, VideoCameraBack, DateRange } from '@mui/icons-material';
import React, { useState } from 'react';

import user from '../Images/User.jpg';


const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
});

const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    margin:"5px",
});



const Add = () => {
    const [open, setOpen] = useState(false)
    return (<>
                <Tooltip title="add" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30} }}>
                    <Fab color="primary" aria-label="add">
                        <AddIcon onClick={(e) => setOpen(true)}/>
                    </Fab>
                </Tooltip>
                <StyledModal
                    open={open}
                    onClose={(e) => setOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} borderRadius={5} >
                        <Typography variant="h6" color="gary" textAlign="center">Create Post</Typography>
                        <UserBox>
                            <Avatar src={user}/>
                            <Typography fontWeight={500} variant="span">
                                Jhon Abraham
                            </Typography>
                        </UserBox>
                        <TextField
                        sx={{ width:"100%", alignItems:"center"}}
                        id="post"
                        multiline
                        rows={3}
                        placeholder="What's on your mind ?"
                        variant="standard"
                        />
                        <Stack direction="row" gap={1} m={2} >
                            <EmojiEmotions color="primary"/>
                            <Image color="secondary" />
                            <VideoCameraBack color="success" />
                            <PersonAdd color="error" />
                        </Stack>


                        <ButtonGroup
                            m={2}
                            p={2}
                            fullWidth
                            variant="contained"
                            aria-label="outlined primary button group"
                        >
                        <Button>Post</Button>
                        <Button><DateRange /></Button>
                        </ButtonGroup>
                    </Box>
                </StyledModal>
           </>
    );
}

export default Add;