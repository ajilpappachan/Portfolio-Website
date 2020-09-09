import React from 'react';
import './Home.css'

const HomeCard = ({ src, title, link }) => {
    return (
        <div className='pa3'>
            <article class="br2 ba dark-gray b--white w-100 center">
                <a className="db center tc black link dim"
                    title={title}
                    target="_blank"
                    rel="noopener noreferrer"
                    href={link}><dt className="f3 pa3 white">{title}</dt>
                    <div className='container'>
                        <iframe
                            className="responsive-iframe"
                            allowFullScreen id="wallsio-iframe"
                            src={src}
                            loading="lazy"
                            title="My social wall">
                        </iframe>
                    </div>
                </a>
            </article>
        </div>
    );
}

export default HomeCard;