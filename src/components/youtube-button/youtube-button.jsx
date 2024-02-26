import React from 'react';

const customStyle = {
    background: '#f5c51c',
    padding: '5px 10px',
    width: '120px',
    borderRadius: '4px',
    color: '#000',
    textAlign: 'center',
    display: 'block',
    fontWeight: '600',
}

const YoutubeButton = ({videoKey}) => {
    return (
        <a href={`https://www.youtube.com/watch?v=${videoKey}`} style={customStyle}>
            Watch Trailer
        </a>
    );
};

export default YoutubeButton;