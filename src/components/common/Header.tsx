import React from 'react';

const Header: React.FC = () => {
    const upperPath = window.location.pathname.replace('/', '').toUpperCase();
    return (
        <header>
            <h1>CSSGenerator</h1>
            <p>{upperPath}</p>
        </header>
    );
};

export default Header;
