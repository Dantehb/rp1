import React from 'react';
import Container from '@material-ui/core/Container';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './Components/NavBar';
import Carrusel from './Components/Carrusel';
import Card from './Components/Card'

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
                    <Carrusel/>
                    <Card></Card>
                </Container>
            </div>
        </div>
    );
}

export default App;
