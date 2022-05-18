import React from 'react'
import Navbar from './Navbar'
import './App.css';
// import Box from '@mui/material/Box';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import pic from './image/pic.png'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
export default function Login() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  return (
 <React.Fragment>
   
 <Navbar />

  
<Grid container  sx={{height:'70vh'}}>
  <Grid item sm={12} lg={7} sx={{
    backgroundImage:`url(${pic})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover',
    backgroundPosition:'center'
}}>
 
</Grid>
<Grid item sm={12} lg={5}>
<Box sx={{ margin: '10px', width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="SIGN UP" value="1" />
            <Tab label="LOGIN" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" />
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="Address" variant="outlined" />
      <TextField id="outlined-basic" label="Message" variant="outlined" />

      <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success">
        Success
      </Button>
     
    </Stack>
    </Box>
        </TabPanel>
        <TabPanel value="2"><Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="Password" variant="outlined" />
    
      <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success">
        Success
      </Button>
     
    </Stack>
    </Box></TabPanel>
       
      </TabContext>
    </Box>
</Grid>
 
</Grid>
</React.Fragment>
 
  
)
}
