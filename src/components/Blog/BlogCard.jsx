import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = ({ post }) => {
    const { title, body, id } = post
    return (
        <div className='flex flex-col gap-[20px] mb-[20px]'>
            <div className="top flex">
                <div className="imgContainer w-[90%] h-[400px] relative">
                    <Image className='object-cover' src="https://images.pexels.com/photos/10375901/pexels-photo-10375901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' fill />
                </div>
                <span className='text-[12px] m-auto' style={{ transform: "rotate(270deg)" }}>01.01.2024</span>
            </div>
            <div className="bottom">
                <h1 className="title text-[24px] mb-[20px] w-[90%]">{title}</h1>
                <p className='mb-[20px] font-300 text-gray-400 w-[90%]'>{body}</p>
                <Link prefetch={false} href={`/blog/${id}`} className='underline'>READ MORE</Link>
            </div>
        </div>
    )
}

export default BlogCard;