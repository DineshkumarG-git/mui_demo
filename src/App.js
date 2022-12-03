import logo from './logo.svg';
 
import {Button,Stack,Box, createTheme} from '@mui/material'
import { Navbar } from './Components/Navbar';
import { Sidebar } from './Components/sidebar';
import { Feed } from './Components/Feed';
import { Rightbar } from './Components/Rightbar';
import { Adder } from './Components/Adder';
import { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { createMuiTheme } from '@material-ui/core';

 

function App() {
  const [mod,setMod] = useState("light")
  const darkTheme = createTheme({
    palette:{ 
           mode:mod
           
    }
 
  }) 
  return (
     <ThemeProvider theme={darkTheme}>
      <Box bgcolor={mod==="dark"?"black":""} color={mod==="dark"?"white":""} theme={darkTheme} >
        <Box >
       <Navbar></Navbar>
       <br></br>
       <br></br>
       <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setMode={setMod} Moder={mod}></Sidebar>
        <Feed></Feed>
        <Rightbar></Rightbar>
       </Stack>

       <Adder  Moder={mod}></Adder>
       </Box>
       </Box>
       </ThemeProvider>
   
  );
}

export default App;
