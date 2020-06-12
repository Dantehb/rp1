import React from 'react';
import {Box, Grid} from '@material-ui/core/';
import './Footer.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        marginTop:'15px',
    },
});

const Footer = () => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <a href="https://www.facebook.com/teamcherrygames/">
                        <div className={'foo1'}>
                            <img src={'img/facebook-brands.svg'} width={'30px'} />
                        </div>
                    </a>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <a href="https://twitter.com/TeamCherryGames">
                        <div className={'foo2'}>
                            <img src={'img/twitter-brands.svg'} width={'30px'} />
                        </div>
                    </a>
                </Grid>
                <Grid  item xs={12} sm={4}>
                    <a href="https://www.youtube.com/channel/UCZS2K8ZsUmujTuj3cNMyBSA">
                        <div className={'foo3'}>
                            <img src={'img/youtube-brands.svg'} width={'30px'} />
                        </div>
                    </a>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;