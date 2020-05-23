import React from 'react';
import Box from '@material-ui/core/Box';
import './Logo.css';

const Logo = (config) => {
    return (
        <div>
            <img src={'img/logo.png'} className={'Logo'} />
            <Box component={"spam"} className={"logoText"}>
                {config.systemName}
            </Box>
        </div>
    )
}

export default Logo;