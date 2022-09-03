import {Link} from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia  } from '@mui/material';
import {CheckCircle} from '@mui/icons-material';

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl,demoChannelTitle } from './utils/Constants';
const VideoCard = ({video: {id: {videoId}, snippet}}) => {
  return (
    <Card sx={{width: {md: '300px', xs:'100%'}, boxShadow:'none', borderRadius:0}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
            <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{width:358, height:180}} />
            <CardContent sx={{ height:'106px'}} > 
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography varient='subtitle1' fontWeight='bold' color='#000'>{snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}</Typography>
            </Link>
            <Link to={snippet ?.channelId ?`/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography varient='subtitle2' fontWeight='bold' color='#403939'>{snippet?.channelTitle || demoChannelTitle} <CheckCircle sx={{fontSize:12, color:'gray', ml:'5'}} /></Typography>
            </Link>
            </CardContent>
        </Link>
    </Card>
  )
}

export default VideoCard