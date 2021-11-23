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

function MainScreen() {
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
                <div style={{ display:"flex", flexDirection: window.innerWidth > 768? "row" : "column", height:"100%", padding:"40px"}}>
                    <div style={{flex:"2",display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <MessageComponent
                            message="Get your web or mobile apps done with highter mantainability and scalability standards"
                        ></MessageComponent>
                    </div>
                    <div style={{flex:"1", display: "flex", justifyContent: "center", alignItems:  window.innerWidth > 768? "center" : "flex-end"}}>
                        <div>
                            <Stack direction="row" spacing={2}>
                                <Avatar sx={{ bgcolor: 'white' }}><LinkedInIcon sx={{color: 'rgb(53, 53, 53)'}}/></Avatar>
                                <Avatar sx={{ bgcolor: 'white' }}><TwitterIcon sx={{color: 'rgb(53, 53, 53)'}}/></Avatar>
                                <Avatar sx={{ bgcolor: 'white' }}><InstagramIcon sx={{color: 'rgb(53, 53, 53)'}}/></Avatar>
                                <Avatar sx={{ bgcolor: 'white' }}><WhatsAppIcon sx={{color: 'rgb(53, 53, 53)'}}/></Avatar>
                                <Avatar sx={{ bgcolor: 'white' }}><ShareIcon sx={{color: 'rgb(53, 53, 53)'}}/></Avatar>
                            </Stack>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div>
                ljsdfn
            </div>
        </div>
    )
}

export default MainScreen;
