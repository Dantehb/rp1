import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Logo from './Logo';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px black solid',
        fontFamily: "'Metal Mania', cursive",
        opacity: '90%',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function GroupSizesColors() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={3}>
                    <a href="#">
                        <Logo/>
                    </a>
                </Grid>
                <Grid item xs={9}>
                    <ButtonGroup aria-label="small outlined button group">
                        <Button>
                            <Link href={"#"}>
                                Home
                            </Link>
                        </Button>
                        <Button>
                            <Link href={"#"}>
                                Aranas
                            </Link>
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </div>
    );
}
