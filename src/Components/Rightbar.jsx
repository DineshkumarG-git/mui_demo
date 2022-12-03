import { Avatar, AvatarGroup, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{display:{xs:"none",sm:"inline-block"}}}>
      <Box position={"fixed"} width={300} >
        <Typography variant='h6' fontWeight={100} >Online friends</Typography>
        <AvatarGroup max={5}>
        <Avatar sx={{width:30 ,height: 30}} src="https://mui.com/static/images/avatar/1.jpg"/>
        <Avatar sx={{width:30 ,height: 30}} src="https://v4.mui.com/static/images/avatar/3.jpg"/>
        <Avatar sx={{width:30 ,height: 30}} src="https://v4.mui.com/static/images/avatar/2.jpg"/>
        <Avatar sx={{width:30 ,height: 30}} src="https://cdn4.buysellads.net/uu/1/127574/1668535585-SST41.jpg"/>
        <Avatar sx={{width:30 ,height: 30}} src="https://mui.com/static/images/avatar/1.jpg"/>
        <Avatar sx={{width:30 ,height: 30}} src="https://mui.com/static/images/avatar/1.jpg"/>
        <Avatar sx={{width:30 ,height: 30}} src="https://mui.com/static/images/avatar/1.jpg"/>
      
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} >Latest Photos</Typography>
        <ImageList rowHeight={160} cols={3}>
        <ImageListItem  >
          
      <img src={"https://v4.mui.com/static/images/image-list/breakfast.jpg"} />
      </ImageListItem>
      <ImageListItem  >
      <img src={"https://v4.mui.com/static/images/image-list/burgers.jpg"} />
      </ImageListItem>
      <ImageListItem  >
      <img src={"https://v4.mui.com/static/images/image-list/honey.jpg"} />
      </ImageListItem>
      <Typography variant='h6' fontWeight={100} >Latest Conversation</Typography>

        </ImageList>

        <List >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
       
                color="textPrimary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"

                color="textPrimary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

      </Box>

    </Box>
  )
}
 