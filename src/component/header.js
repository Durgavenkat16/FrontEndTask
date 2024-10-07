import { useState } from 'react';
import '../App.css';
import { header_icons } from '../variables';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { sidebar_items } from '../variables';
import React from 'react';
import { NavLink } from 'react-router-dom';


const Header=()=>{
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)} className="mobile_sidebar">
      <List className='flex g-5 flex-dir-column' sx={{padding:"20px 5px"}}>
        {sidebar_items.map((item, index) => (
        <NavLink key={item.path} to={item.path} className={({ isActive }) => (isActive ? 'active-link' : null)}>
            <ListItem key={item.key} disablePadding >
            <ListItemButton >
              <img src={item.src} alt={item.alt}/>
              <ListItemText primary={item.key} sx={{paddingLeft:"10px"}}/>
            </ListItemButton>
          </ListItem>
        </NavLink>
          
        ))}
      </List>
      
    </Box>
  );
    return(
        <>
        <div class="header">
            
            <div class="header_wrapper flex">
                <div class="flex flex-al-center g-20 header_logo">
                    <div class="heading_items">
                        <h1>UI Frontend</h1>
                        <h6>Test</h6>
                    </div>
                    <div class="quick_search">
                        <img src="/assets/search_icon.svg" alt="Icon"/>
                        <input type="text" placeholder="Quick Search" class="quick_search_input"></input>
                    </div>
                </div>
                <div className='flex flex-al-center'>
                    <div className='mobile_sidebar'>
                            <Button onClick={toggleDrawer(true)} sx={{fontSize:"30px"}}>
                                ☰
                            </Button>
                            <Drawer open={open} onClose={toggleDrawer(false)}>
                                {DrawerList}
                            </Drawer>
                    </div>
                    {
                        header_icons.map((item)=>{
                            return(
                                <img src={item.src} alt={item.alt}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default Header