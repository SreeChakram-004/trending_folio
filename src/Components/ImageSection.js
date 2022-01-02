import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';
import "./ImageSection.css";

function ImageSection() {
    return (
        <ImageSectionStyled>
            
            <div className="left-content">
                <div className="imge">
                <img src={require("../images/me.jpeg").default} alt=""/>
                </div>
            </div>
            <div className="right-content">
                <h4>I am <span>SREE CHAKRAM</span></h4>
                <p className="paragraph skills">
                Hi, my name is Sree Bhargav Chakram. I am a Graduate in B.Tech(ECE) at Jain University,Banglore and completed my Mern Stack Development Course at Guvi Geek Pvt Ltd,IIT MADRAS. I am passionate about learning new things and developing beautiful applications with a focus on UX/UI design and development. Am Excited to leverage skills and provide fresh ideas as part of a passionate, continually learning to build better experiences on the web.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        {/* <p>Full Name</p> */}
                        {/* <p>Age</p> */}
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p> <br/>
                    </div>
                    <div className="info">
                        {/* <p>: SREE BHARGAV CHAKRAM</p> */}
                        {/* <p>: 36</p> */}
                        <p>: INDIAN </p>
                        <p>: Telugu, English , Hindi , Kannada </p>
                        <p>: 18-36-s9-1534,3rd floor,shanti nagar,Beside More Super Market, Tirupati - 517501</p>
                    </div>
                </div>
                {/* <PrimaryButton title={'Download Cv'} /> */}
                <p className="skills"> HTML/CSS | JavaScript | React | NodeJS | ExpressJS | MongoDB | MaterialUI | Bootstrap | CSS Flex | Heroku | Netlify</p><br/>
                <div className="cv-btn">
                        <a href={require("../images/Sree_Chakram_Resume.pdf").default} target="_blank" rel="noopener noreferrer">DownLoad CV</a>
                    </div>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        margin:0px 15px;
        // width: 100%;
        img{
            width:22rem;
            
            object-fit: cover;
        }
    }
    .right-content{
        margin:15px 10px;
        // width: 100%;
        text-align:justify;
    
    
        h4{
            font-size: 2rem;
            text-align:left;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
