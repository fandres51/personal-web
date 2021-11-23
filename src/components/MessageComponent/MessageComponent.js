import React from 'react';
import CodeImg from '../../assets/code.png';
import CodeImg2 from '../../assets/coded.png';
import './MessageComponent.css';

function MessageComponent({message, imageUrl}) {
    return (
        <div className="MessageComponentContainer">
            {/* <div><img src={CodeImg} alt="Code img" className="mc-image"/></div>        
            <div><img src={CodeImg2} alt="Code img" className="mc-image"/></div>         */}
            <div className="mc-message-container"><p className="mc-message">{message}</p></div>
        </div>
    )
}

export default MessageComponent
