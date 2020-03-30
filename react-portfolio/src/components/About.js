import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class About extends Component {
    state = {  }
    render() { 

        const mystyle = {
            marginRight: '60px'
        }

        const color = {
            color: '#9354AE'
        }

        return (<div className='about'>
            <div className='about-content'>
            <h1><Fade bottom cascade>About.</Fade></h1>
            <Fade bottom>
                    <p style={mystyle}>{data.abouttext}</p>
            </Fade>
            </div>
            {data.ShowAboutImage ? <img src={data.aboutImage} alt='about iamge'></img> : null}
            

        </div>  );
    }
}
 
export default About;