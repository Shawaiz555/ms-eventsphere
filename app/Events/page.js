"use client";
import React from "react";
import Footer from "@/app/Reuseable Components/Footer";
import Navbar from "@/app/Reuseable Components/Navbar";
import Image from "next/image";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function page() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <div>
        <div>
          <Navbar />
        </div>

        <div className="mt-10 py-20 bg-[#fff000]">
          <h1 className="text-center text-4xl md:text-5xl font-semibold">Attend a MS-EventSphere event</h1>
          <div className="w-full flex justify-center my-5">
            <div className="w-full lg:w-[60%] px-5 lg:px-10">
              <p className="text-lg">Join us for event industry webinars, in-person events, and more. Whether you prefer to attend live or watch on-demand, you’ll get the industry’s top insights and thought leadership.</p>
            </div>
          </div>

          <div className="w-full flex justify-center">
            <div className="w-full lg:w-[90%] shadow-2xl rounded-3xl flex justify-center flex-col md:flex-row mt-10">
              <div className="w-full lg:w-[50%] bg-white rounded-3xl px-16 py-10">
                <p className="text-md md:text-lg mt-10">Upcoming Event</p>
                <h1 className="text-4xl font-semibold mt-2">2025 Event Benchmarks:</h1>
                <p className="text-md md:text-lg font-semibold mt-2">From Insights to Action</p>
                <h1 className="text-2xl font-semibold mt-5">Jan 22, 2025 11 am ET / 8 am PT / 4 pm GMT</h1>
                <div className="mt-5">
                  <button className="bg-black text-white px-7 py-2 rounded-xl hover:scale-95">Register Now</button>
                </div>
              </div>
              <div className="w-full lg:w-[50%] rounded-3xl">
                <Image src="/Images/UpComingEventSideImg.png" width={300} height={300} alt="Up Coming Event Image" className="w-full h-[430px]"></Image>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-20 flex flex-col lg:flex-row gap-5 lg:gap-20 px-10 lg:px-20">
          <div className="bg-[#fff000] w-full lg:w-[50%] rounded-t-2xl rounded-b-full lg:rounded-t-3xl lg:rounded-b-full px-5 py-20 lg:py-32">
            <h1 className="text-center text-4xl lg:text-5xl font-semibold">Our approach to events</h1>
            <div className="flex justify-center">
              <Image src="/Images/OurApproachImg.png" width={300} height={300} alt="Our Approach Image" className="w-[250px] sm:w-[300px] sm:h-[200px] lg:w-[400px] lg:h-[220px]"></Image>
            </div>
          </div>
          <div className="w-full lg:w-[50%] py-8 lg:py-20">
            <p className="text-lg">We believe events should be attendee-centric, experience-driven, and leverage the most innovative technology to ensure day-of excitement lasts long after the event is over.</p>
            <h1 className="text-xl font-semibold text-black mt-3">Here’s our event philosophy:</h1>
            <div className="flex gap-7 mt-12 items-center">
              <h1 className="text-5xl md:text-6xl text-yellow-300">01</h1>
              <h1 className="text-md md:text-xl">Event experiences should be impactful, unforgettable, and exceed expectations.</h1>
            </div>
            <div className="flex gap-7 mt-12 items-center">
              <h1 className="text-5xl md:text-6xl text-yellow-300">02</h1>
              <h1 className="text-md md:text-xl">Gatherings should foster community, connection, and collaboration.</h1>
            </div>
            <div className="flex gap-7 mt-12 items-center">
              <h1 className="text-5xl md:text-6xl text-yellow-300">03</h1>
              <h1 className="text-md md:text-xl">Events should deliver ROI, drive pipeline, and help accelerate business growth.</h1>
            </div>
          </div>
        </div>

        <div className="bg-[#fff000] w-full py-12 mt-20 px-5 md:px-12">
          <div>
            <h1 className="text-4xl font-semibold text-center">Upcoming and On-demand Industry Events</h1>
            <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-14 my-10">
              <div className="w-full flex justify-center">
                <Card sx={{ maxWidth: '100%' }} className='rounded-xl bg-[#fff000] shadow-2xl'>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} className="bg-black" aria-label="recipe">
                        E
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Event # 1"
                    subheader="September 14, 2016"
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image="/Images/EventImage.jpeg"
                    alt="Event Image"
                    className='h-[350px]'
                  />
                  <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      This impressive paella is a perfect party dish and a fun meal to cook
                      together with your guests. Add 1 cup of frozen peas along with the mussels,
                      if you like.
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

                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
                      <Typography sx={{ marginBottom: 2 }}>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                      </Typography>
                      <Typography sx={{ marginBottom: 2 }}>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                        stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                      </Typography>
                      <Typography sx={{ marginBottom: 2 }}>
                        Add rice and stir very gently to distribute. Top with artichokes and
                        peppers, and cook without stirring, until most of the liquid is absorbed,
                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                        mussels, tucking them down into the rice, and cook again without
                        stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don&apos;t open.)
                      </Typography>
                      <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </div>

              <div className="w-full flex justify-center">
                <Card sx={{ maxWidth: '100%' }} className='rounded-xl bg-[#fff000] shadow-2xl'>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} className="bg-black" aria-label="recipe">
                        E
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Event # 2"
                    subheader="September 15, 2016"
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image="/Images/EventImage.jpeg"
                    alt="Event Image"
                    className='h-[350px]'
                  />
                  <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      This impressive paella is a perfect party dish and a fun meal to cook
                      together with your guests. Add 1 cup of frozen peas along with the mussels,
                      if you like.
                    </Typography>
                  </CardContent>
                  <CardActions className='flex gap-3'>
                    <IconButton aria-label="add to favorites" className="text-red-500">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share" className="text-black">
                      <ShareIcon />
                    </IconButton>
                    <Button className="bg-black text-white text-sm px-10 py-2 hover:scale-95">
                  View
              </Button>

                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
                      <Typography sx={{ marginBottom: 2 }}>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                      </Typography>
                      <Typography sx={{ marginBottom: 2 }}>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                        stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                      </Typography>
                      <Typography sx={{ marginBottom: 2 }}>
                        Add rice and stir very gently to distribute. Top with artichokes and
                        peppers, and cook without stirring, until most of the liquid is absorbed,
                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                        mussels, tucking them down into the rice, and cook again without
                        stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don&apos;t open.)
                      </Typography>
                      <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </div>

              <div className="w-full flex justify-center">
                <Card sx={{ maxWidth: '100%' }} className='rounded-xl bg-[#fff000] shadow-2xl'>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} className="bg-black" aria-label="recipe">
                        E
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Event # 3"
                    subheader="September 16, 2016"
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image="/Images/EventImage.jpeg"
                    alt="Event Image"
                    className='h-[350px]'
                  />
                  <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      This impressive paella is a perfect party dish and a fun meal to cook
                      together with your guests. Add 1 cup of frozen peas along with the mussels,
                      if you like.
                    </Typography>
                  </CardContent>
                  <CardActions className='flex gap-3'>
                    <IconButton aria-label="add to favorites" className="text-red-500">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share" className="text-black">
                      <ShareIcon />
                    </IconButton>
                    <Button className="bg-black text-white text-sm px-10 py-2 hover:scale-95">
                  View
              </Button>

                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
                      <Typography sx={{ marginBottom: 2 }}>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                      </Typography>
                      <Typography sx={{ marginBottom: 2 }}>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                        stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                      </Typography>
                      <Typography sx={{ marginBottom: 2 }}>
                        Add rice and stir very gently to distribute. Top with artichokes and
                        peppers, and cook without stirring, until most of the liquid is absorbed,
                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                        mussels, tucking them down into the rice, and cook again without
                        stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don&apos;t open.)
                      </Typography>
                      <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </div>

              <div className="w-full flex justify-center">
                <Card sx={{ maxWidth: '100%' }} className='rounded-xl bg-[#fff000] shadow-2xl'>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} className="bg-black" aria-label="recipe">
                        E
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Event # 4"
                    subheader="September 17, 2016"
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image="/Images/EventImage.jpeg"
                    alt="Event Image"
                    className='h-[350px]'
                  />
                  <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      This impressive paella is a perfect party dish and a fun meal to cook
                      together with your guests. Add 1 cup of frozen peas along with the mussels,
                      if you like.
                    </Typography>
                  </CardContent>
                  <CardActions className='flex gap-3'>
                    <IconButton aria-label="add to favorites" className="text-red-500">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share" className="text-black">
                      <ShareIcon />
                    </IconButton>
                    <Button className="bg-black text-white text-sm px-10 py-2 hover:scale-95">
                  View
              </Button>

                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
                      <Typography sx={{ marginBottom: 2 }}>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                      </Typography>
                      <Typography sx={{ marginBottom: 2 }}>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                        stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                      </Typography>
                      <Typography sx={{ marginBottom: 2 }}>
                        Add rice and stir very gently to distribute. Top with artichokes and
                        peppers, and cook without stirring, until most of the liquid is absorbed,
                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                        mussels, tucking them down into the rice, and cook again without
                        stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don&apos;t open.)
                      </Typography>
                      <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </div>

              <div className="w-full flex justify-center">
                <Card sx={{ maxWidth: '100%' }} className='rounded-xl bg-[#fff000] shadow-2xl'>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} className="bg-black" aria-label="recipe">
                        E
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Event # 5"
                    subheader="September 18, 2016"
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image="/Images/EventImage.jpeg"
                    alt="Event Image"
                    className='h-[350px]'
                  />
                  <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      This impressive paella is a perfect party dish and a fun meal to cook
                      together with your guests. Add 1 cup of frozen peas along with the mussels,
                      if you like.
                    </Typography>
                  </CardContent>
                  <CardActions className='flex gap-3'>
                    <IconButton aria-label="add to favorites" className="text-red-500">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share" className="text-black">
                      <ShareIcon />
                    </IconButton>
                    <Button className="bg-black text-white text-sm px-10 py-2 hover:scale-95">
                  View
              </Button>

                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
                      <Typography sx={{ marginBottom: 2 }}>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                      </Typography>
                      <Typography sx={{ marginBottom: 2 }}>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                        stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                      </Typography>
                      <Typography sx={{ marginBottom: 2 }}>
                        Add rice and stir very gently to distribute. Top with artichokes and
                        peppers, and cook without stirring, until most of the liquid is absorbed,
                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                        mussels, tucking them down into the rice, and cook again without
                        stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don&apos;t open.)
                      </Typography>
                      <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </div>

              <div className="w-full flex justify-center">
                <Card sx={{ maxWidth: '100%' }} className='rounded-xl bg-[#fff000] shadow-2xl'>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} className="bg-black" aria-label="recipe">
                        E
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Event # 6"
                    subheader="September 19, 2016"
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image="/Images/EventImage.jpeg"
                    alt="Event Image"
                    className='h-[350px]'
                  />
                  <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      This impressive paella is a perfect party dish and a fun meal to cook
                      together with your guests. Add 1 cup of frozen peas along with the mussels,
                      if you like.
                    </Typography>
                  </CardContent>
                  <CardActions className='flex gap-3'>
                    <IconButton aria-label="add to favorites" className="text-red-500">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share" className="text-black">
                      <ShareIcon />
                    </IconButton>
                    <Button className="bg-black text-white text-sm px-10 py-2 hover:scale-95">
                  View
              </Button>

                    <ExpandMore
                      expand={expanded}
                      onClick={handleExpandClick}
                      aria-expanded={expanded}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  </CardActions>
                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                      <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
                      <Typography sx={{ marginBottom: 2 }}>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                      </Typography>
                      <Typography sx={{ marginBottom: 2 }}>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                        stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                      </Typography>
                      <Typography sx={{ marginBottom: 2 }}>
                        Add rice and stir very gently to distribute. Top with artichokes and
                        peppers, and cook without stirring, until most of the liquid is absorbed,
                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                        mussels, tucking them down into the rice, and cook again without
                        stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don&apos;t open.)
                      </Typography>
                      <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </div>

            </div>
          </div>
        </div>

        <div className="w-full flex justify-center py-10 px-1 md:py-12 md:px-10">
          <Footer />
        </div>

      </div>
    </div>
  )
}
