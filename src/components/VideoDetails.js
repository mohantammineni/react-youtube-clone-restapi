import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import {Typography, Box, Stack} from '@mui/material';
import {CheckCircle} from '@mui/icons-material';
import {FetchFromAPI} from './utils/FetchFromAPI';

import {Videos} from './';
function VideoDetail() {
  const [videoDetail, setVideoDetails] = useState(null);
  const [videos, setVideos] = useState(null);
  const {id} = useParams();

  useEffect(
    ()=>{
      FetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data)=> setVideoDetails(data.items[0]));
      FetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data)=> setVideos(data.items));
    }, [id]
  );

  if(!videoDetail?.snippet) return 'Loading...;';
const {snippet : {title, channelId, channelTitle}, statistics:{viewCount, likeCount}} = videoDetail;
  return (
    <Box minHeight='95vh'>
      <Stack direction={{ xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{ width:'100%', position:'fixed', top:'86px'}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color='#000' fontWeight='bold' p={2}>
              {title}
            </Typography>
            <Stack direction='row' justifyContent='space-between' sx={{color:'#000'}} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                  <Typography varient={{ sm: 'subtitle1', md:'h6'}} color='#000'>
                    {channelTitle}
                    <CheckCircle  sx={{fontSize:'12px', color:'gray', ml:'5px'}} />
                  </Typography>
              </Link>
              <Stack direction='row' alignItems='center' gap='20px'>
                <Typography varient="body1" sx={{opacity:0.7}}>
                  {parseInt(viewCount.toLocaleString())} views
                </Typography>
                <Typography varient="body1" sx={{opacity:0.7}}>
                  {parseInt(likeCount.toLocaleString())} likes
                </Typography>
              </Stack>
            </Stack>
           </Box>
        </Box>
        
      </Stack>
      
    </Box>
  )
}

export default VideoDetail;