import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard({data}) {
    return (
        <div className="blog-card" key={data.id}>
            <img src={`./assets/img/${data.image}.webp`} alt="" />
            <div className='p-3 p-md-4'>
                <Link to="" className='text-decoration-none'><h2 className={`fw-600 fs-4 blog-title ${data.titleColor}`}>{data.title}</h2></Link>
                <p className='text-secondary'>{data.content}
                    <Link to="" className='fw-600 text-dark text-decoration-none'> Learn more...</Link></p>
            </div>
        </div>
    )
}
