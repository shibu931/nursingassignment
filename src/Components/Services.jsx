import React from 'react'

export default function Services() {
    const services=[
        {
            id:1,
            name:"Nursing PICOT Questions",
            color:"text-danger"
        },
        {
            id:2,
            name:"Argumentative Essay",
            color:"text-warning"
        },
        {
            id:3,
            name:"Nursing Research Paper",
            color:"text-success"
        },
        {
            id:4,
            name:"Discussion Post",
            color:"text-info"
        },
        {
            id:5,
            name:"Laboratory Notebook",
            color:"text-danger"
        },
        {
            id:6,
            name:"Nursing Dissertation",
            color:"text-warning"
        },
        {
            id:7,
            name:"Nursing thesis Writing",
            color:"text-success"
        },
        {
            id:8,
            name:"Laboratory Worksheet",
            color:"text-info"
        },
        {
            id:9,
            name:"Nursing Dissertation",
            color:"text-danger"
        },
        {
            id:10,
            name:"Nursing Thesis Writing",
            color:"text-warning"
        },
        {
            id:11,
            name:"Laboratory Worksheet",
            color:"text-success"
        },
        {
            id:12,
            name:"Nursing Reflection",
            color:"text-info"
        },
        {
            id:13,
            name:"Nursing Presentation",
            color:"text-danger"
        },
        {
            id:14,
            name:"Pre-lab Assignment",
            color:"text-success"
        },
        {
            id:15,
            name:"Nursing Poster",
            color:"text-warning"
        },
        {
            id:16,
            name:"Homework Writing",
            color:"text-info"
        },
        {
            id:17,
            name:"Nursing Essay",
            color:"text-danger"
        },
        {
            id:18,
            name:"Nursing Case Study",
            color:"text-warning"
        },
        {
            id:19,
            name:"Annotated Biblography",
            color:"text-success"
        },
        {
            id:20,
            name:"Nursing Care Plan",
            color:"text-info"
        },
        {
            id:21,
            name:"Nursing Capstone Project",
            color:"text-danger"
        }
    ] 
  return (
    <>
        <div className="container my-5 py-2 py-lg-4 " id='services'>
            <h2 className='text-center fs-2 fs-lg-2 pb-2 fw-bold'>Types of <span className='text-primary'>Assignment Written</span><br/> By Nursing Assignment Experts</h2>
            <div className="d-flex justify-content-center pb-5">
                <img src="./assets/img/usp.webp" width={'310px'} className='mt-4' alt="" />
            </div>
            <div className="d-flex flex-wrap justify-content-around">
                {
                    services.map((data)=>(
                        <div className="d-flex service-box py-4 px-3 align-items-center mb-3" key={data.id}>
                                <img src="./assets/img/rightfinger.webp" className='me-4' width={'30px'} alt="" />
                                <p className="mb-0 fw-bold"><span className={data.color}>{data.name}</span></p>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}
