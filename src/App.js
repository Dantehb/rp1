import React from 'react';
import Container from '@material-ui/core/Container';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './Components/NavBar';
import Carrusel from './Components/Carrusel';
import Card from './Components/Card';
import Form from './Components/Form';
import Footer from './Components/Footer';
import {Box} from "@material-ui/core";

const useStyles = makeStyles({
    back: {
        background: 'url("img/back.jpeg")',
    }
});


function App() {
    const config = {
        systemName: 'HK.com'
    }
    const classes = useStyles();
    return (
        <div className={classes.back}>
            <div className="App">
                <Container maxWidth={'md'}>
                    <header className="App-header">
                        <NavBar systemName={config.systemName}></NavBar>
                    </header>
                    <Box className="AppText">
                        <h1>HOLLOW KNIGHT</h1>
                        <h2>Hollow Knight es un videojuego perteneciente al género metroidvania desarrollado y publicado por Team Cherry.</h2>
                        <h4>El videojuego cuenta la historia del Caballero, en su búsqueda para descubrir los secretos del largamente abandonado reino de Hallownest, cuyas profundidades atraen a los aventureros y valientes con la promesa de tesoros o la respuesta a misterios antiguos.</h4>
                    </Box>
                    <Carrusel/>
                    <Card></Card>
                    <Form/>
                    <Footer/>
                </Container>
            </div>
        </div>
    );
}

export default App;
