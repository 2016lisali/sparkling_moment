import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'


const input = ({ half, name, handleChange, label, type, autoFocus, handleShowPassword }) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField 
        variant="outlined"
        required
        fullWidth
        autoFocus={autoFocus}
        type={type}
        name={name} 
        label={label} 
        onChange={handleChange}
        InputProps={name==='password' ? {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {type==="password" ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        } : null }
        />
    </Grid>
  );
};

export default input;
