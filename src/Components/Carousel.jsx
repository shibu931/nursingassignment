import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


export default function Carousel() {
    const options = {
        loop: true,
        autoplay: true,
        dots: false,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin:10
            },
            600: {
                items: 2,
                margin:10
            },
            1000: {
                items: 3,
                margin:10
            },
            1200:{
                margin: 40,
            }
        }
    };
    const reviews =[
        {
            id:1,
            name:"Sophia",
            review:"This is the 2nd experience with this guys and I am quite happy with their nursing assignment service. Great quality and good support. Highly recommended",
            profile:"sophia",
            orderCode:"NAE2454"
        },
        {
            id:2,
            name:"Steph",
            review:"Nursing Assignment Expert have a good team of nursing assignment experts. I'm so appreciate their works with assignments and time management. Also they have satisfied assistance. I got my assignment within 24 hours",
            profile:"steph",
            orderCode:"NAE2453"
        },
        {
            id:3,
            name:"Ashley",
            review:"Great experience. They have nailed the work. the nursing experts they have are just so knowledge and give me exactly what I want",
            profile:"ashley",
            orderCode:"NAE3212"
        },
    ]
    return (
        <>
            <div className="container mt-4" id='reviews'>
                <div className="title mb-4">
                    <h2 className='fw-bold'>The Road to <span className='text-primary'>Better Service</span> Starts Here</h2>
                </div>
                <OwlCarousel className='owl-theme' {...options}>
                    {
                        reviews.map((data)=>(
                            <div className="c-card p-xl-4 p-3" key={data.id}>
                                <div>
                                <img src={`./assets/img/${data.profile}.webp`} alt="" style={{ width: "75px" }} />
                                <p className='fs-5 fw-bold'>{data.name}</p>
                                <p>{data.review}</p>
                                </div>
                                <div className='h-100 d-flex flex-column justify-content-end'>
                                <p className='mb-0 '><strong>Order Code:</strong>{data.orderCode}</p>
                                <p className='verifiedBadge mb-0'><strong>Verified Order</strong></p>
                                </div>
                            </div>
                        ))
                    }
                </OwlCarousel>
            </div>
        </>
    )
}
