import React from 'react'

export default function LocationBar({title, location}) {
    return (
        <div className='leading-[21px] text-sm font-poppins py-3.5 bg-[#f8f8f8]'>
            <div className='mx-auto min-[1220px]:w-[1180px] max-[1219px]:px-5 flex gap-x-2'>
                <p className='text-[#666666]'>You Are Here:</p>
                <a className='text-[#333333]' href="#">Home</a>
                <span>»</span>
                <a className='text-[#333333]' href="#">{title}</a>
                <span>»</span>
                <p className='text-[#666666]'>{location}</p>
            </div>
        </div>
    )
}
