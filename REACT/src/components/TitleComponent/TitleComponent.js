import React from 'react';
import './TitleComponent.css';

function TitleComponent({ title, lines=false, color='#606060', italics=true }) {
    return (
        <div 
            className="title-container"
            style={{
                borderTop: lines? 'black solid 1px': 'none',
                borderBottom: lines? 'black solid 1px': 'none',
                borderTopColor: color,
                borderBottomColor: color
            }}
        >
            <h2 
                className="title"
                style={{
                    color: color,
                    fontStyle: italics? 'italic': 'none'
                }}
            >{title}</h2>
        </div>
    );
}

export default TitleComponent;
