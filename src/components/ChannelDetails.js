import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Box} from '@mui/material';

import {Videos, ChannelCard} from './';
import {FetchFromAPI} from './utils/FetchFromAPI';

function ChannelDetails() {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const {id} = useParams();

  useEffect(()=>{
    FetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data)=> setChannelDetail(data?.items[0]));
    FetchFromAPI(`search?channelId=${id}&part=snippet&id=order=date`)
    .then((data)=> setVideos(data?.items));
  },[id])
  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{background:'linear-gradient(90deg, rgba(216,57,57,1) 0%, rgba(205,25,35,1) 35%, rgba(161,16,39,1) 100%)', zIndex: 10,height:'300px'}} />
        <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
      </Box>
     <Box display='flex' p='2'>
        <Box sx={{mr: {sm: '100px'}}} />
          <Videos videos={videos} />
     </Box>
    </Box>
    
  )
}

export default ChannelDetails