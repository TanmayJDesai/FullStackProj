import Post from './Post/Post'; 
import { useSelector } from 'react-redux';
import { Grid, CircularProgress, Paper, Typography, TextField, Button} from '@material-ui/core';
import useStyles from './styles';

import faceIMG from '../../images/HeadShot.jpeg';
import React from 'react';


const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
        <Paper className={classes.paper} variant = "contained" align = 'center' style={{ backgroundColor: '#87CEEB' }} fullWidth>
        Welcome to Tutor Stem!


        <Typography variant = "h6">
            
            <p>Our college tutoring community at UCLA is dedicated to providing affordable and high-quality tutoring services to high school students. Our team of tutors is comprised exclusively of UCLA students who have excelled in their exams and have a strong understanding of the subjects they tutor. Our hourly rate of $40 is competitive with other tutoring services and our main focus is on ensuring that our students have a thorough understanding of the material, rather than simply completing assignments quickly. As exam season approaches for Advanced Placement (AP) and International Baccalaureate (IB) students, we hope to leverage our experience and knowledge to help these students succeed on their exams and assignments. Our selective team is well-prepared to guide and support high school students in achieving their academic goals.</p>
            
      
        </Typography>
        
        <p> </p>
        <p> </p>

        <Button color = "secondary" variant = "contained" fullWidth> 
            Meet some of our Tutors! 
            <onClick>                         
            </onClick> 
        </Button>

    </Paper>
      </Grid>
    )
    
   /*
    
  */
  );
};

export default Posts;

/*
          <p variant = "h3"> Meet Our Founders: <p></p><Typography variant = "h7"> Chief Technical Officer and Co-Founder Tanmay </Typography></p>
          <p> Major: <p></p><Typography variant = "h7"> Second Year Computer Science and Engineering </Typography> </p>
          <img className={classes.image} src={faceIMG} alt="memories" height="80"/> 

*/