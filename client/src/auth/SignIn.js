import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LinkUI from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import {useAuth} from './Auth';
import {Buffer} from 'buffer';
import * as metamask from './metamask';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <LinkUI color="inherit" href="https://mui.com/">
        Your Website
      </LinkUI>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {

  const str = "7b227061796c6f6164223a226d79206d657373616765222c227369676e6174757265223a22307866303833323638623064333831303736303239646535613238643933653239656363653464623063623734653131646133666631393962323830306562633636336634333361663637666566666233313866643632616433383735623730343037386263626461303137643931613130353639353532346563636238353635633162227d";
  const {payload, signature} = JSON.parse(Buffer.from(str, 'hex').toString('utf-8'));
  const expectedsPk = "0x036f963436ea0673601bda997b1c51b4c76dc36661b11daf04b5f8d4a59fb742dc"
  const gotPk = metamask.recoverPublicKey(payload, signature);

  console.log(gotPk);
  console.log(expectedsPk);
  console.log(expectedsPk.slice(2) == gotPk);



  let navigate = useNavigate();
  let location = useLocation();
  let auth = useAuth();

  let from = (location.state && location.state.from && location.state.from.pathname) || "/doc/list";

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    auth.signin(data.get('email')).then(()=>{
      navigate(from, { replace: true });
    });
  };

  React.useEffect(() => {
    if(auth.user){
      navigate(from, { replace: true });
    }
  }, []);

  
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

            <Typography variant="body1" color="error">
              {(auth.metamaskError == 'No etheruem provider')? 
                <LinkUI href="https://metamask.io/">
                  To use this app please install Metamask. Click here to Install. 
                </LinkUI>
                :
                auth.metamaskError
              }
            </Typography>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <LinkUI variant="body2" component={Link} to="/signup">
                  {"Don't have an account? Sign Up"}
                </LinkUI>                  
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs>
              </Grid>
              <Grid item>
                <LinkUI variant="body2" component={Link} to="/recover">
                  {"Forgot password or Metamask account?"}
                </LinkUI>                  
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
