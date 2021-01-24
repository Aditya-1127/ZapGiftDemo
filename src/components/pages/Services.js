import React from 'react'
import '../../App.css'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Maps from '../Maps';

const styles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
        
      margin: theme.spacing(1),
      width: '50ch',
      
    },
  },
}));

export default function Services () {
    const classes = styles();
    return(<div>
    <div className="box">
        
    <form className={classes.root} noValidate autoComplete="off">
    <div>
        <TextField
          
          id="outlined-secondary"
          label="Email and Name "
          defaultValue=" "
          variant='outlined'
          
        />
        
       
       
        
       
        <TextField
        required
          id="outlined-helperText"
          label="Password"
          defaultValue="  "
        
          variant="outlined"
        />
             <TextField
          
          id="outlined-secondary"
          label="First Name "
          defaultValue=" "
          variant='outlined'
          
        />
      </div>
      </form>
      
      </div>
      <Maps/>
      </div>
    )
}