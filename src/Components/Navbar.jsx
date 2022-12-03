import { AppBar, Typography,styled, InputBase, Badge,Avatar,Menu,MenuItem} from '@mui/material'
import { Toolbar } from '@mui/material'
import { display } from '@mui/system'
import {Mail, Pets,Notifications, NotificationsNone} from '@mui/icons-material'

import React from 'react'
import { useState } from 'react'
import { Sidebar } from './sidebar'
const StyledToolbar = styled(Toolbar) ({
    display:"flex",
    justifyContent: "space-between",
});

const Search = styled("div")(({ theme })=>({
    backgroundColor:"White",
    padding: "0 10px",
    BorderRadius: theme.shape.borderRadius,
    Width:"40% "
}));
const Icons = styled("Box")(({ theme })=>({
display:"none",
gap:"20px",
alignItems:"center",
[theme.breakpoints.up("sm")]:{
    display:"flex"
}
}));
const UserBox = styled("Box")(({ theme })=>({
    display:"flex ",
    gap:"20px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    } 
    }));
export const Navbar = () => {
    const[open,setOpen] = useState(false);
    return(
    <AppBar>
        <StyledToolbar>
            <Typography sx={{ display: { xs: 'none', sm: 'block' } }}>
                my app
            </Typography>
            <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />

            <Search> <InputBase placeholder='search'></InputBase></Search>
            <Icons>
                <Badge badgeContent={4} color="error">
                    <Mail></Mail>
                </Badge>
                <Badge badgeContent={2} color="error">
                    <Notifications></Notifications>

                </Badge>
                <Avatar sx={{width:30 ,height: 30}} src="https://mui.com/static/images/avatar/1.jpg"  onClick={(e)=>{setOpen(true)}}  />
            </Icons>
            <UserBox onClick={(e)=>{setOpen(true)}}>
            <Avatar sx={{width:30 ,height: 30}} src="https://mui.com/static/images/avatar/1.jpg" onClick ={(e)=>{setOpen(true)}}/>
            <Typography variant='span'>dinesh</Typography>
             </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>{setOpen(false)}}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
  
    </AppBar>
    );
}
