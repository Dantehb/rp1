import React from 'react';
import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import Grid from '@material-ui/core/Grid';

/*
* PARA QUE EL CARRUSEL FUNCIONE ES NECESARIO INSTALAR LA SIGUIENTE LIBRERIA:
* https://brainhubeu.github.io/react-carousel/docs/gettingStarted
* */


const useStyles = makeStyles({
    root: {
        maxWidth: "100%",
        marginTop: '1%',
        backgroundColor: '#636363',
        color: '#636363',
        paddingTop: '15px',
        paddingBottom: '15px',
        fontFamily: "'Metal Mania', cursive",
        opacity: '95%',
        border: '1px royalblue solid'
    },
    media: {
        height: 400,
    },
});

const Carrusel = () => {

    const classes = useStyles();
    return(
        <div>
            <Grid container>
                <Grid item xs={12}>
                    <Carousel
                        autoPlay={4500}
                        animationSpeed={1000}
                        infinite
                        className={classes.root}
                    >
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component={'img'}
                                    image={'./img/c1.png'}
                                    height={400}
                                />
                                <CardContent>
                                    <Typography variant="h5" component="h2" >
                                        Banco
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Aqui te puedes dormir muy a gusto
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component={'img'}
                                    image={'./img/c3(web).jpg'}
                                    height={400}
                                />
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        Expansiones
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Creo son 2, aunque podrian ser 3
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Carousel>
                </Grid>
            </Grid>
        </div>
    )
}

export default Carrusel;