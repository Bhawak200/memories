
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from '@mui/material';
import useStyles from './styles.js'
import Post from './post/Post.js'

const Posts = ({ currentId, setCurrentId }) => {

  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const classes = useStyles();

  return (
    !posts.length ? <CircularProgress /> :
      <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
        {
          posts.map(post => (
            <Grid item key={post._id} xs={12} sm={6}>
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
          ))
        }
      </Grid>
  )
}

export default Posts;