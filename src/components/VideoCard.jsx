import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    const thumbnailUrl = snippet?.thumbnails?.high?.url || demoThumbnailUrl;
    return (
        <Card sx={{ width: { sm: '305px', xs: '310px', md: '365px' }, boxShadow: 'none', borderRadius: 0 }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                {thumbnailUrl ? (
                    <CardMedia image={thumbnailUrl} alt={snippet?.title} sx={{ width: 490, height: 180 }} />
                ) : null}
            </Link>
            <CardContent sx={{ backgroundColor: '#1e1e1e', height: '100px' }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight="bold" color="#fff">
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle2' fontWeight="bold" color="gray">
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    );
};

export default VideoCard;