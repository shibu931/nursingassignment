import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard({data}) {
    let url = data.title.replace(/\s+/g, '-');
    return (
        <div className="blog-card ms-2" key={data.id}>
            <img src={`./assets/img/${data.image}.webp`} alt="" />
            <div className='p-3 p-md-4'>
                <Link to={`/article/${url}`} className='text-decoration-none'><h2 className={`fw-600 fs-4 blog-title ${data.titleColor}`}>{data.title}</h2></Link>
                <p className='text-secondary'>{data.content}
                    {/* <Link to={`/article/${url}`} className='fw-600 text-dark text-decoration-none'> Learn more...</Link> */}
                    </p>
            </div>
        </div>
    )
}
