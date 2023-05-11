import React from 'react';
import Background from '../../data/hero.jpg'
import Button from '../Button';
import { useStateContext } from '../../contexts/ContextProvider';

const Hero = () => {
    const {currentColor} = useStateContext();

    return (
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-64 md:h-44 rounded-xl w-full md:ml-auto md:mr-auto
            p-8 pt-9 mt-3 bg-hero-pattern bg-no-repeat bg-cover bg-center" style={{backgroundImage: `url(${Background})`}}>
            <div className='flex justify-between h-full items-end md:items-center'>
            <div className=''>
                <p className='font-bold text-gray-500'>Report</p>
                <p className='text-2xl'>1,439 Updates</p>
            </div>
            <div className=''>
                <Button color="white" bgColor={currentColor} text="Download" borderRadius="10px" size="md"/>
            </div>
            </div>
        </div>
    )
}

export default Hero