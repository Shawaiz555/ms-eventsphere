"use client";
import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';


export default function EventCards() {
    const [events, setEvents] = useState([]);

    const getEvents = async () => {
        const resp = await fetch("/Api/Events", { method: "GET" });
        const data = await resp.json();
        console.log(data["data"]);
        setEvents(data["data"]);
    };

    useEffect(() => {
        getEvents();
    }, []);

    return (
        <div>
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-14 my-10">
                {events.map((event, index) => (
                    <div className="w-full flex justify-center rounded-2xl" key={index}>
                        <Card sx={{ maxWidth: '100%' }} className="bg-transparent shadow-2xl">
                            <CardHeader
                                avatar={
                                    <Avatar sx={{ bgcolor: red[500] }} className="bg-black" aria-label="recipe">
                                       {index + 1}
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                }
                                title={event.eventTitle}
                                subheader={event.eventDate}
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={event.image}
                                alt="Event Image"
                                className="h-[350px]"
                            />
                            <CardContent>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {event.eventDescription}
                                </Typography>
                            </CardContent>
                            <CardActions className="flex gap-3">
                                <IconButton aria-label="add to favorites" className="text-red-500">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share" className="text-black">
                                    <ShareIcon />
                                </IconButton>
                                <Button className="bg-black text-white text-sm px-10 py-2 hover:scale-95">
                                    View
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

