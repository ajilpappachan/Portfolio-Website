import React from 'react';
import HomeCard from './HomeCard';

const HomeCardsFull = () => {
    return (
        <div className='w-100'>
            <article className="cf">
                <div className="fl w-50 tc">
                <HomeCard 
                title='Instagram'
                src="https://walls.io/k5t6s?nobackground=1&amp;show_header=0"  
                link="https://www.instagram.com/a_p_cubed/"/>
                </div>
                <div className="fl w-50 bg-light-gray tc">
                    <h1>Column Two</h1>
                </div>
            </article>

        </div>
    );
}

export default HomeCardsFull;