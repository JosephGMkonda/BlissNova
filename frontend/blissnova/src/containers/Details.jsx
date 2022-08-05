import React from 'react'
import {Box,Checkbox,TextField,Stack,Button} from '@mui/material'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

function Details() {
  return (
    <Box flex={4} padding={2}>

    <Card sx={{margin:5}} >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" sx={{width:40, height:40}} src="image/profile.jpg">
                
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Joseph Mkonda"
            subheader="04/07/2022"
          />
          <CardMedia
            component="img"
            height="400"
            image= "image/profile.jpg"
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              Helloo do u like me ...?
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
          <Typography>12</Typography>
            <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}}/>} />
            </IconButton>

            
            <Typography>Comments 6</Typography>
           
           
            
          </CardActions>
          
        </Card>


        <Card>

        <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" sx={{width:40, height:40}} src="image/profile.jpg">
                
              </Avatar>
            }
            title="Joseph Mkonda"
            subheader="04/07/2022"
          />
           <CardContent>

         <Typography variant="body2" color="text.secondary">
            You looking good man eeeeeeeehm fnnkkkkkkkkkkkkkkkkkkkkkkkkkkknk

            vmvndkvnkadvkanvksa

            /vs;almvlasmvl;amv;ma;v

            s;lvmsalvm;amsv;sv
            asvsavsa;v;sa,v
            asV
            </Typography>
          </CardContent>

        </Card>

        <Stack padding={2} >

        <TextField
        sx={{width:"70%",borderRadius:"30px"}}
        multiline
          id="Comment"
          placeholder="Type comment...."
          />

          <Button 
          
          sx={{hieght:"30",
          width:"20px", 
          color:"secondary"}}>Comment</Button>
        


        </Stack>

       
    
    
    
    
    
    
        </Box>
    
  )
}

export default Details