import React from 'react';

const Logo = () => {
    return (
        <div className='logo'>
            {/* les image importer depuis la balise img sont accessible dans public LES BALISE IMG CEST COMME SI J4ETAIT DANS PUBLIC*/}
            <img src="./logo192.png" alt="logo react" />
            <h3>React World</h3>
        </div>
    );
};

export default Logo;