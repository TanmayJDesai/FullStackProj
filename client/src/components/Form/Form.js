import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Select, MenuItem } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
  };

  return (
    <Paper className={classes.paper} style={{ backgroundColor: '#87CEEB' }}>

      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Want to be Tutored! Sign-up here'}</Typography>
        <button style={{ backgroundColor: '#ffffff', height: 36, width: 270 }} variant="outlined">
        <a href="https://forms.gle/UCvPVGTuVdvnwyRHA" target="_blank">Please fill out the Registration Form here</a>
        </button>        
        <TextField name="creator" variant="outlined" label="Name" style={{ backgroundColor: '#ffffff' }} fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextField name="title" variant="outlined" label="Email" style={{ backgroundColor: '#ffffff' }} fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <Select name="message" label="Year In High School" fullWidth style={{ backgroundColor: '#ffffff', width:330 }} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}>
            <MenuItem value="Freshman">Freshman</MenuItem>
            <MenuItem value="Sophomore">Sophomore</MenuItem>
            <MenuItem value="Junior">Junior</MenuItem>
            <MenuItem value="Senior">Senior</MenuItem>
        </Select>
        <TextField name="tags" variant="outlined" label="Subject(s) (If multiple, separate with commas)" multiline rows={4} style={{ backgroundColor: '#ffffff' }} fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        
        <div className={classes.fileInput} style={{ width: 330 }}>
              If you have relevant material for the tutoring session please attach an image below (PDF format)
              <p></p>
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
          </div>
        <Button className={classes.buttonSubmit} variant="contained" style={{ backgroundColor: '#ffffff', height: 36, width: 370 }} size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" style={{ backgroundColor: '#ffffff', height: 36, width: 370 }} size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;

//        <TextField name="message" variant="outlined" label="Year In High School" style={{ backgroundColor: '#ffffff' }} fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
