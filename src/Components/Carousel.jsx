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
        {
            id:4,
            name:"Steph",
            review:"Nursing Assignment Expert have a good team of nursing assignment experts. I,m so appreciate their woks with assignments and time management. Also their have a satisfied assistance. I got my assignment on nursing within 24 hours.",
            profile:"ashley",
            orderCode:"NAE2453"
        },
        {
            id:5,
            name:"Jennifer",
            review:"According to me my experience with Nursing Assignment Expert, they provide plag-free assignment at affordable price. I was in trouble doing one of my nursing assignment and they supported me and thereby I submitted it on time within 2 days.",
            profile:"ashley",
            orderCode:"NAE3221"
        },
        {
            id:6,
            name:"Ruby",
            review:"Nursing Assignment Expert is one of the best assignment helper for me as a nursing stduents. They fulfils all the requirements, provide the assignment work on time with the best quality. MY experience with them is wonderful. I hope, they will do best as well in future. Keep it up.",
            profile:"ashley",
            orderCode:"NAE2321"
        },
        {
            id:7,
            name:"Samantha",
            review:"The Writers in Nursing Assignment Expert are really professional! I am extremely pleased with the academic service. Online support team were very helpful explaining how to place an order on your site and how to upload assignments instructions. And I received my nursing assignment before submission deadline.",
            profile:"ashley",
            orderCode:"NAE3453"
        }
    ]
    return (
        <>
            <div className="container mt-4" id='reviews'>
                <div className="title mb-4">
                    <h2 className='fw-bold text-sm-start text-center'>The Road to <span className='text-primary'>Better Service</span> Starts Here</h2>
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
