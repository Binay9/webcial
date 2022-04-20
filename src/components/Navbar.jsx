import React, { useState } from 'react';
import { AppBar, styled, Box, Toolbar, Typography, InputBase, Avatar, Menu, MenuItem } from '@mui/material';
import { Pets, Mail, Notifications } from '@mui/icons-material';


const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const LongInputBase = styled(InputBase)({
    width:"100%"
});

const Icons = styled(Box)(({ theme }) => ({
    display: "none", alignItems: "center", gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex", alignItems: "center", gap: "10px",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}));


function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
                    Webcial
                </Typography>
                <Pets sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><LongInputBase placeholder="Search..." /></Search>
                <Icons>
                    <Mail />
                    <Notifications />
                    <Avatar sx={{ width: 30, height: 30 }}
                        onClick={(e) => setOpen(true)}
                    />
                </Icons>
                <UserBox onClick={(e) => setOpen(true)}>
                    <Avatar sx={{ width: 30, height: 30 }} />
                    <Typography variant="span">Sam</Typography>
                </UserBox>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby='demo-positioned-button'
                    open={open}
                    onClose={(e) => setOpen(false)}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>Settings</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </Menu>
            </StyledToolbar>
        </AppBar>
    );
}

export default Navbar;