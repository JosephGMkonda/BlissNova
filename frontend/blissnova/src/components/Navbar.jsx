import {AppBar,
    Toolbar, 
    Typography, 
    styled,
    Box,
    InputBase,
    Badge, Avatar,Menu,MenuItem} from '@mui/material'
  import {Mail,Notifications} from '@mui/icons-material'
  import React,{useState} from 'react'
  
  
  const StyledToolbar = styled(Toolbar) ({
      display:"flex",
      justifyContent: "space-between"
  })
  
  const Search = styled("div")(({theme})=>({
       backgroundColor:"white",
       padding: "0 10px",
       borderRadius: theme.shape.borderRadius,
       width:"40%"
  }))
  
  const Icons = styled(Box)(({theme})=>({
    display: "none",
    gap:"20px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
      display: "flex"
    }
      
  }))
  
  const UserBox = styled(Box)(({theme})=>({
    display: "flex",
    gap:"10px",
    alignItems:"center",
    [theme.breakpoints.up("sm")]:{
      display: "none"
    }
      
  }))
  
  function Navbar() {
    
    const [open, setOpen] = useState(false)
    return (
      <React.Fragment>
      <AppBar position="sticky">
          <StyledToolbar>
          <Typography variant="h6">Chat-Vibe</Typography>
          <Search><InputBase placeholder="Search..."/></Search>
          <Icons>
          <Badge badgeContent={8} color="error">
          <Mail />
          </Badge>
  
          <Badge badgeContent={6} color="error">
          <Notifications />
          </Badge>
          <Avatar 
          onClick={e =>setOpen(true)}
          sx={{width:40, height:40}} src="image/profile.jpg"/>
          </Icons>
  
          <UserBox onClick={e =>setOpen(true)}>
          <Avatar sx={{width:40, height:40}} src="image/profile.jpg"/>
          <Typography variant="span">Joseph Mkonda</Typography>
  
          
          </UserBox>
         </StyledToolbar>
  
         <Menu
          id="basic-menu"
          // anchorEl={anchorEl}
          open={open}
          onClose={e => setOpen(false)}
          
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          anchorOrigin={{
            vertical:'top',
            horizontal:'right',
          }}
          transformOrigin={{
            vertical:'top',
            horizontal:'right'
          }}
        >
          <MenuItem >Profile</MenuItem>
          <MenuItem >My account</MenuItem>
          <MenuItem >Logout</MenuItem>
        </Menu>
  
      </AppBar>
      </React.Fragment>
      
    )
  }
  export default Navbar