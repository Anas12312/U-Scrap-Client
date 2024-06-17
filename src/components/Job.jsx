import React from 'react'

export default function Job({
    title,
    body,
    link,
    price,
    time,
    timeAgo
}) {
    return (
        <div className='w-full border-b-2 p-3 flex flex-col hover:bg-gray-200 cursor-pointer' onClick={() => {
            window.open(link,'_blank');
        }}>
            <div className='flex justify-between'>
                <div>
                    <div className='text-sm'>{timeAgo}</div>
                    <div className='text-lg mt-1 font-semibold'>{title}</div>
                </div>
                <div className='italic text-lg'>
                    {price}
                </div>
            </div>
            <div className='text-sm mt-3'>{body}</div>

        </div>
    )
}
