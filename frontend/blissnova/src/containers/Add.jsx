import React,{useState} from 'react'
import {
    Tooltip,
    Fab,
    Modal,
    Box,
    styled, 
    Typography,
    Avatar,
    TextField,
    Stack,
    ButtonGroup,
    Button } from '@mui/material';
import {Add as AddIcon,InsertPhoto } from "@mui/icons-material"

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})


const UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"
})

function Add() {
    const [open, setOpen] = useState(false)
  return (
    <>

<Tooltip onClick={e => setOpen(true)}
title="Add" 
sx={{position:"fixed",
 bottom:20, 
 left:{xs:"calc(50%)", md:30}}}>

<Fab color="primary" aria-label="add">
  <AddIcon/>
</Fab>
  
</Tooltip>

<StyledModal
open={open}
onClose={e => setOpen(true)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
   <Typography variant="h6" color="gray" textAlign="center">Create Post</Typography>
   <UserBox>
    <Avatar sx={{width:40, height:40}} src="image/profile.jpg"/>
    <Typography fontWeight={500} varaint="span">
        Joseph Mkonda
    </Typography>
   </UserBox>

   <TextField
    id="PostForm"
    sx={{width:"100%"}}
    multiline
    rows={4}
    placeholder="What's your mind?"
    variant="standard"
    />
<Stack direction="row" gap={1} mt={2} mb={3}>
    <InsertPhoto color="success"/>


</Stack>
<ButtonGroup 
fullWidth
variant="contained" 
aria-label="outlined primary button group">
  <Button>Post</Button>
  </ButtonGroup>
  </Box> 
</StyledModal>


    </>
  )
}

export default Add