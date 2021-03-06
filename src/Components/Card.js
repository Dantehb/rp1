import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    root: {
        maxWidth: '80%',
        marginTop: '1%',
        backgroundColor: 'white',
        color: '#404040',
        opacity: '95%',
        margin: 'auto',
        border: '1px royalblue solid'
    },
    sp: {
        maxWidth: '80%',
        marginTop: '1%',
        backgroundColor: 'gray',
        color: '#404040',
        opacity: '95%',
        margin: 'auto',
        border: '1px royalblue solid'
    },
});

export default function ImgMediaCard() {
    const classes = useStyles();

    return (
        <Grid container spacing={1}>
            <Grid item item xs={12} sm={6}>
                <Card className={classes.sp}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="350"
                    image="./img/c2(web).png"
                />
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Hechizos
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Ademas de la "Aguja" existen otras formas de hacer daño, sin embargo consumen Almas para poder usarse.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Mas
                </Button>
            </CardActions>
        </Card>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="350"
                            image="./img/card1.jpg"
                        />
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Personajes
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Un gran variedad, cada uno con sus metas y personalidad unica. Sin embargo, todos son insectos.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Mas
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}
