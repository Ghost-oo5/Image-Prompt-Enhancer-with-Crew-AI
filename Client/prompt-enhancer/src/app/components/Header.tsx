import Image from 'next/image'
import React from 'react'
import logo from '../../../public/alphabase-logo.png'
const Header = () => {
    return (
        <>
            <div className='bg-gray-900 flex justify-between py-3 px-10 items-center sticky top-0'>
                <Image alt='image' src={logo} className='w-16' />
                <h1 className='text-2xl text-white'>Alpha Prompt Enhancer</h1>
            </div>
        </>
    )
}

export default Header