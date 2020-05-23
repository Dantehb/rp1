import React from 'react';
import AppBar from './Components/AppBar';
import Carousel from './Components/Carousel';
import Card from './Components/Card';
import NaviBar from './Components/NavBar';

import Container from '@material-ui/core/Container';
import './App.css';

function App() {
    const config = {
        systemName: 'HK.com'
    }
    return (
        <div className="App">
            <Container maxWidth={'lg'}>
                <header className="App-header">
                    <NaviBar systemName={config.systemName} />
                </header>
            </Container>
        </div>
    );
}

export default App;
