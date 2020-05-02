import React from 'react';
import AppBar from './Components/AppBar';
import Carousel from './Components/Carousel';
import Card from './Components/Card';
import './App.css';

function App() {
    const config = {
        systemName: 'HK.com'
    }
    return (
        <div className="App">
            <header className="App-header">
                <AppBar systemName={config.systemName} />
                <Carousel/>
                <Card/>
            </header>
        </div>
    );
}

export default App;
