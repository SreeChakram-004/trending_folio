import React from 'react';
import styled from 'styled-components';
import "../ExtraStyles/index.css"
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import PrimaryButton from '../Components/PrimaryButton';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactItem from '../Components/ContactItem';
import { useForm, ValidationError } from '@formspree/react';
import { Grid, Paper } from '@material-ui/core';





function ContactPage() {
    const phone = <PhoneIcon />
    const email = <EmailIcon />
    const location = <LocationOnIcon />
    const [state, handleSubmit] = useForm("xgedejjv");
  if (state.succeeded) {
      return <p>Thanks for Showing Interest. Message Sent. You will get reply asap.</p>;
  }


    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'} />
            <ContactPageStyled >

 <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
        <form className="form" onSubmit={handleSubmit}>
        <h4 className="h4">Get In Touch</h4>

    <div className="form-field">
      <label htmlFor="email">
        Email Address
      </label> <br/>
         <input 
        id="email"
        type="email" 
        name="email"
        placeholder="Enter Recruiter Email id"
      /><br/>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      /></div><br/>
      <div className="form-field">
      <label htmlFor="email">
        Description
      </label><br/>
      <textarea rows="3" 
        id="message"
        name="message"
        placeholder="Enter Description Here"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      /></div><br/>
      <button className="form-button cv-btn" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
        </Grid>
        <Grid item md={6} xs={12}>
        <div className="right-content">
                    <ContactItem title={'Phone'} icon={phone} cont1={'+91-9739318371'+"-"+"primary"} cont2={'+91-9381009142'+"-"+"secondary"} />
                    <ContactItem title={'Email'} icon={email} cont1={'chakramsree@gmail.com'}  />
                    <ContactItem title={'Address'} icon={location} cont1={'18-36-s9-1534,3rd floor,shanti nagar,Beside More Super Market, Tirupati - 517501'}  />
                    
                </div>
        </Grid>
      </Grid>
            <InnerLayout className={'contact-section'}>
                {/* <div className="left-content contact-forme">
                    <div className="contact-title"> */}
                        {/* <h4>Get In Touch</h4> */}
                    {/* </div>
                </div> */}
               
            </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
    .contact-section{
        // display: grid;
        // grid-template-columns: repeat(2, 1fr);
        // grid-column-gap: 2rem;
        // @media screen and (max-width: 978px){
        //     grid-template-columns: repeat(1, 1fr);
        //     .f-button{
        //         margin-bottom: 3rem;
        //     }
        // }
        // .right-content{
        //     display: grid;
        //     grid-template-columns: repeat(1, 1fr);
        //     @media screen and (max-width: 502px){
        //         width: 70%;
        //     }
        // }
        .contact-title{
            h4{
                color: var(--white-color);
                padding: 1rem 0;
                font-size: 1.8rem;
            }
        }
        .form{
            // width: 100%;
            @media screen and (max-width: 502px){
                // width: 100%;
            }
            .form-field{
                margin-top: 2rem;
                position: relative;
                // width: 100%;
                label{
                    position: absolute;
                    left: 20px;
                    top: -19px;
                    display: inline-block;
                    background-color: var(--background-dark-color);
                    padding:0 .5rem;
                    color: inherit;
                }
                input{
                    border: 1px solid var(--border-color);
                    outline: none;
                    background: transparent;
                    height: 50px;
                    padding:0 15px;
                    width: 100%;
                    color: inherit;
                }
                textarea{
                    background-color: transparent;
                    border: 1px solid var(--border-color);
                    outline: none;
                    color: inherit;
                    width: 100%;
                    padding: .8rem 1rem;
                }
            }

            
        }
    }
`;

export default ContactPage
