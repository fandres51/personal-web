import React from 'react';
import './ImgWithDescComponent.css';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

function ImgWithDescComponent({image, description, btnTxt, icon}) {

    const Icon = icon;
    const CustomButton = styled(Button) ({
        textTransform: 'none',
        backgroundColor: '#0A66C2'
    })

    return (
        <div className="container">
            <div className="img-container">
                <img src={image} alt="" className="img"/>
            </div>
            <div className="desc-container">
                <p className="desc">{description}</p>
            </div>
            <div className="btn-container">
                <CustomButton className="btn" variant="contained"  endIcon={<Icon/>}>{btnTxt}</CustomButton>
            </div>
        </div>
    )
}

export default ImgWithDescComponent
