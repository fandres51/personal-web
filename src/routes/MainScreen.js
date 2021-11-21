import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import MainScreenMessage from '../components/MainScreenMessage/MainScreenMessage';
import { Link } from 'react-router-dom';

function MainScreen() {
    return (
        <div>
            <NavBar
                items={['Me', 'Work', 'Contacts', 'Blog']}
                lastItem={true}
                line={true}
            ></NavBar>
            <MainScreenMessage></MainScreenMessage>
        </div>
    )
}

export default MainScreen;
