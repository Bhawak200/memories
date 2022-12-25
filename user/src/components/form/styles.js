import { makeStyles } from '@material-ui/styles';


export default makeStyles(() => (
  {
    root: {
      '& .MuiTextField-root': {
        margin: '10px',
      },
    },
    paper: {
      padding: '10px',
    },
    form: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    fileInput: {
      width: '97%',
      margin: '10px',
    }
  }));