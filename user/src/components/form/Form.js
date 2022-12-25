import { TextField, Button, Paper, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import FileBase from "react-file-base64"
import useStyles from './styles.js'
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from "../../actions/posts.js";


const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  })
  const data = useSelector(state => currentId ? state.posts.find(post => post._id === currentId) : null);

  useEffect(() => {
    if (data) setPostData(data);
  }, [data])

  const theme = useTheme();
  const dispatch = useDispatch();
  const classes = useStyles(theme);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      console.log(currentId);
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    handleClear();
  };
  const handleClear = () => {
    setCurrentId(null);
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: ''
    })
  }


  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
        <Typography variant="h5">{currentId ? 'Editing' : 'Creating'} a Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
          style={{ "marginBottom": "10px" }}
        />
        <TextField
          name="title"
          variant="outlined"
          label="title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          style={{ "marginBottom": "10px" }}
        />
        <TextField
          name="message"
          variant="outlined"
          label="message"
          fullWidth
          value={postData.message}
          onChange={(e) => setPostData({ ...postData, message: e.target.value })}
          style={{ "marginBottom": "10px" }}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
          style={{ "marginBottom": "10px" }}
        />
        <div className={classes.fileInput}>
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        </div>
        <Button variant="contained" color="primary" size="large" type="submit" style={{ "marginBottom": "10px" }} fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="large" fullWidth style={{ "backgroundColor": "red" }} onClick={handleClear}>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form;