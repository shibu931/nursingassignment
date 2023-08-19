import React from 'react'

export default function BlogCard({data}) {
    return (
        <div className="blog-card" key={data.id}>
            <img src={`./assets/img/${data.image}.webp`} alt="" />
            <div className='p-3 p-md-4'>
                <h2 className={`fw-600 fs-4 blog-title ${data.titleColor}`}>{data.title}</h2>
                <p className='text-secondary'>{data.content}
                    <a href="" className='fw-600 text-dark text-decoration-none'> Learn more...</a></p>
            </div>
        </div>
    )
}
