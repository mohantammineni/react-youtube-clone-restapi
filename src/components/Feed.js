import {useState, useEffect} from 'react';
import {Box, Stack, Typography} from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';
import {FetchFromAPI} from '../components/utils/FetchFromAPI';

function Feed() {
  const[videos, setVideos] =useState([]);
  const [selectedCategory, setSelectedCategory] = useState('New');
  useEffect(() =>{
    FetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>{setVideos(data.items)});
  }, [selectedCategory])

  return (
    <Stack sx={{flexDirection: {sx: 'column', md: 'row', background:'#e5e5e5'}}}>
      <Box sx={{height: {sm:'auto', md: '92vh'},  px: {sx:0, md:2}}}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <Typography className='copy-right' varient='body2' sx={{mt:1.5, color:'#fff'}}>
          Copyright 2022 @MadhanCodes
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY: 'auto', height:'90vh', flex:2}}>
        <Typography varient='h4' fontWeight='bold' mb={2} >
          {selectedCategory} <span style={{color:'#F31503'}}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed