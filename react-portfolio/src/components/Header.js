import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata'


class Header extends Component {
    state = {}

    render() {

        const style = {
            color: '#9354AE'
        }

        return (<div>
        <h1 className='heading-background'>CREATE</h1>
            <header>
                <h1>
                    <Fade bottom cascade>{data.name}</Fade></h1>
            </header>
            <Fade bottom>
            <p className='header-title'>
            Hi! I'm <span style={style}>Raymond Amparo</span>.<br></br>{data.headerTagline[1]}<br></br>
            {data.headerTagline[2]}
               <br></br>
                    <button><a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer" >Contact</a></button>
                </p>
            </Fade>



        </div>);
    }
}

export default Header;