import React from 'react'
import '../css/General.css'
import '../css/About.css'

function About(){
    return (
        <div className='about-container'>
            <h1 className='general-text'>About Cook Web<hr className='general-line'></hr></h1>
            <p className='about-paragraph'>Cook Web is a space for anybody to learn, share, and improve on their cooking. You can 
                look at what recipes other people have been cooking while you can also submit your very own recipe. 
                We hope with Cook Web, we can help to connect people with their favourite recipes, both online,
                and in real life.
            </p>
            <h1 className='general-text'>About Us<hr className='general-line'></hr></h1>
            <p className='about-paragraph'>This website is created by 2 developers, one being an 
                experienced programmer with bachelor degree, partnering with a self-taught 
                programmer, this website is the very first project we tackle on web development in our developer 
                partnership. Our goal in mind is to be experienced enough to be a freelancer web developers,
                so we can make websites that people can find reliable, and pleasent to have and/or use.
                We hope that with this first project, we can take on many more projects in the future while 
                always improving along the way.
            </p>
        </div>
    )
}

export default About