import React from 'react'
import {Box,Checkbox,Button} from '@mui/material'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';



function Feed() {
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
            <Typography>45</Typography>
            <IconButton aria-label="add to favorites">
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}}/>} />
            </IconButton>

            <Button>Comment</Button>
            <Typography>6</Typography>
           
            
          </CardActions>
          
        </Card>
    
    
    
    
    
    
        </Box>
    
   
  )
}

export default Feed