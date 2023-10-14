import React from 'react'
import { UilGithub, UilLinkedin, UilGlobe } from '@iconscout/react-unicons'


const Navbar = () => {
    return (
        <div className='flex items-center justify-between h-10 border-b pb-4' id="navbar">
            <label htmlFor="" className="">WeatherMatic</label>
            <div className="flex items-center justify-around gap-6 social">
                {/* https://shailesh-attri.github.io/ */}
                <a href="https://shailesh-attri.github.io" target="_blank" rel="noopener noreferrer">
                    <UilGlobe className='pointer' />
                </a>

                <a href="https://github.com/shailesh-attri" target="_blank" rel="noopener noreferrer">
                    <UilGithub className='pointer' />
                </a>

                <a href="https://www.linkedin.com/in/shailesh-attri-web/" target="_blank" rel="noopener noreferrer">
                    <UilLinkedin className='pointer' />
                </a>

                <a href="mailto:shaileshattri83@gmail.com">
                    <button className='bg-blue-700 text-white font-small text-sm py-0.5 px-2.5 rounded transition-all emailBtn'>Email Us</button>
                </a>

            </div>

        </div>
    )
}

export default Navbar
