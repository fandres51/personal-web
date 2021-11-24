import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import MessageComponent from '../components/MessageComponent/MessageComponent';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShareIcon from '@mui/icons-material/Share';
import ImgWithDescComponent from '../components/ImgWithDescComponent/ImgWithDescComponent';
import TitleComponent from '../components/TitleComponent/TitleComponent';
import Coding from '../assets/img.png';

function MainScreen() {

    const myDescription =
        `
    I\'m a graduated Software Engeniering student who resides in Quito, Ecuador. 
    I always like to be up to date in new technologies and now I\'m interested in web. 
    I know javascript, typescript and React. Also Flutter in mobile.
    I'm also interested in web design, advertising, pop culture and videogames.
    `

    return (
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: 'rgb(53, 53, 53)' }}>
                <div>
                    <NavBar
                        items={['Me', 'Work', 'Contacts', 'Blog']}
                        lastItem={true}
                        line={true}
                    ></NavBar>
                </div>
                <div style={{ display: "flex", flexDirection: window.innerWidth > 768 ? "row" : "column", height: "100%", padding: "40px" }}>
                    <div style={{ flex: "2", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <MessageComponent
                            message="Hi!, I'm a software developer specialiced in web and mobile apps. I created this site so you can have an idea of who am I and something about my job."
                        ></MessageComponent>
                    </div>
                    <div style={{ flex: "1", display: "flex", flexDirection:'column', alignItems: "center", justifyContent: window.innerWidth > 768 ? "center" : "flex-end" }}>
                        <div style={{width: "100%", textAlign: "start"}}>
                            <TitleComponent
                                title={'Follow me:'}
                                italics={true}
                                color={'white'}
                            ></TitleComponent>
                        </div>
                        <div>
                            <Stack direction="row" spacing={2}>
                                <Avatar sx={{ bgcolor: 'white' }}><LinkedInIcon sx={{ color: 'rgb(53, 53, 53)' }} /></Avatar>
                                <Avatar sx={{ bgcolor: 'white' }}><TwitterIcon sx={{ color: 'rgb(53, 53, 53)' }} /></Avatar>
                                <Avatar sx={{ bgcolor: 'white' }}><InstagramIcon sx={{ color: 'rgb(53, 53, 53)' }} /></Avatar>
                                <Avatar sx={{ bgcolor: 'white' }}><WhatsAppIcon sx={{ color: 'rgb(53, 53, 53)' }} /></Avatar>
                                <Avatar sx={{ bgcolor: 'white' }}><ShareIcon sx={{ color: 'rgb(53, 53, 53)' }} /></Avatar>
                            </Stack>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', padding: '20px', boxSizing: 'border-box' }}>
                <div style={{width: '100%'}}>
                    <TitleComponent
                        title={'This is me'}
                    ></TitleComponent>
                </div>
                <div style={{flex:'1', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <ImgWithDescComponent
                        btnTxt={'Check my profile!'}
                        description={myDescription}
                        image={Coding}
                        icon={LinkedInIcon}
                    ></ImgWithDescComponent>
                </div>
            </div>
        </div>
    )
}

export default MainScreen;
