import styled from '@emotion/styled'
import { ButtonGroup } from '@mui/material'
import { Add, DateRange, Delete, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Fab, Tooltip,Modal, Typography, Avatar, TextField, Button } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useState } from 'react'
const StyledModal= styled(Modal)({
  display:"flex",
  alignItems:"center",
  justifyContent:"center"
})
const UserBox= styled(Box)({
  display:"flex",
  alignItems:"center",
  gap:"10px",
  marginBottom:"20px "

})
export const Adder = ({Moder}) => {
   const [open,setOpen] = useState(false)
  return (
    <>
    <Tooltip title="Add" aria-label="add" sx={{position:"fixed",bottom:20,left:{xs:"calc(50% - 25px)",md:30}}} onClick={(e)=>setOpen(true)}>
    <Fab color="primary">
      <Add></Add>
    </Fab>
   
  </Tooltip>
   <StyledModal
   open={open}
   onClose={(e)=>setOpen(false) }
   aria-labelledby="simple-modal-title"
   aria-describedby="simple-modal-description"
 >
   <Box width={400} height={200} p={2} bgcolor={Moder==="light" ? "white":"black"} color={Moder==="dark"?"white":"black"} borderRadius={5}>
        <Typography variant='h6' color={"gray"} textAlign="center">Create Post</Typography>


   <UserBox>
   <Avatar  sx={{width:30 ,height: 30}} src="https://mui.com/static/images/avatar/1.jpg" />
   <Typography fontWeight={500} variant='span'> dinesh</Typography>
    
   </UserBox>
   <TextField
          sx={{width:"100%"}}
          id="filled-margin-normal"
          placeholder='what on your mind?'
          rows={3}
          variant="standard"
        />
         <Stack direction={"row"} gap={1} mt={2} mb={3} >
       <EmojiEmotions color='primary'></EmojiEmotions>
       <Image color="secondary"></Image>
       <VideoCameraBack color="sucess"></VideoCameraBack>
       <PersonAdd color='error'></PersonAdd>
   </Stack>
   <ButtonGroup variant="contained" fullWidth>
    <Button>
      Post
    </Button>
    <Button sx={{width:"100px"}}><DateRange></DateRange></Button>

   </ButtonGroup>
   </Box>
  
 
 </StyledModal>

 </>
  
  )
}
