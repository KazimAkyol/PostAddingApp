import React from 'react'
import { BiLogOut } from 'react-icons/bi'

const Navbar = () => {
    return (
        <div className='h-20 bg-indigo-600 flex items-center justify-between px-5'>
            <div className='text-white font-bold text-2xl cursor-pointer'>
                Share Post
            </div>
            <div className='flex items-center space-x-5'>
                <input type="text" placeholder='Search' className='p-2 outline-none rounded-md' />
                <div className='w-36 border border-indigo-900 p-2 rounded-md text-center text-white cursor-pointer'>
                    Post Create
                </div>
                <BiLogOut size={25} className='text-white cursor-pointer' />
            </div>
        </div>
    )
}

export default Navbar