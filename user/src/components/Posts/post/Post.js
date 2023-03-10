
import useStyles from './styles.js';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from "react-redux";
import { deletePost, likePost } from '../../../actions/posts.js';
import { useState } from 'react';


const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [cnt, setCnt] = useState(post.likeCount);
  const handleDelete = () => {

    dispatch(deletePost(post._id));

  }
  const handleLikeCount = () => {
    setCnt(cnt + 1);
    dispatch(likePost(post._id));

  }
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant='h6' >{post.creator}</Typography>
        <Typography variant='body2' >{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => { setCurrentId(post._id) }}>
          <MoreHorizIcon fontSize="small" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary'>{post.tags.map(tag => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} variant='h5' gutterBottom>{post.title}</Typography>

      <CardContent>
        <Typography component='p' color='textSecondary' gutterBottom>{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={handleLikeCount}>
          <ThumbUpAltIcon fontSize="small" /> Like {cnt}
        </Button>
        <Button size="small" color="primary" onClick={handleDelete}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
      </CardActions>
    </Card>
  )
}
export default Post;