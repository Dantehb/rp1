import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Button, Box, Grid} from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
            width: '100%',
            backgroundColor: 'gray',
            paddingRight: '10px',
            paddingLeft: '10px',
            paddingBottom: '10px',
        },
    },
    form: {
      maxWidth: '450px',
        margin: 'auto',
    },
}));

export default function BasicTextFields() {
    const classes = useStyles();

    return (
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <h2>SUSCRIBETE</h2>
                    <form className={classes.root} noValidate autoComplete="off">
                        <Box className={classes.form}>
                            <TextField id="filled-basic" label="Nombre" variant="filled" fullWidth margin={'normal'} />
                            <TextField id="filled-basic" label="E-mail" variant="filled" fullWidth margin={'normal'} />
                            <Button variant="contained" fullWidth margin={'auto'} >Suscribirse</Button>
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </div>
    );
}