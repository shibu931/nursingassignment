import React, { useEffect } from 'react'
import Form from './Form'

export default function Banner() {
    return (
        <>
            <div className="hero-banner">
                <div className="container-fluid px-3 px-md-5">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="mt-2 mt-md-5">
                                <div className='d-flex flex-column justify-content-center'>
                                <h1 className='fw-500 title-text mb-4 p-3 p-lg-0 mt-4 mb-lg-3 d-none d-sm-block text-sm-start text-center'>Worried About Nursing Assignment? <br className='d-none d-sm-block'/> Hire Nursing Assignment Expert</h1>
                                <h1 className='fw-500 title-text mb-4 p-2 p-lg-0 mt-4 mb-lg-3 display-4 d-block d-sm-none text-sm-start text-center'>Worried About Nursing Assignment <br className='d-none d-sm-block'/> Hire Nursing Assignment Expert</h1>
                                <h2 className="fs-5 fw-light mb-4 p-2 p-lg-0 text-light text-sm-start text-center">Connect with highly qualified and experienced
                                    Nursing Assignment experts, writers for all assignment on nursing at best prices with upto 50% off.
                                </h2>
                                <div className="counter-box d-flex flex-wrap align-items-center justify-content-around py-3 me-lg-5">
                                    <div className='px-3 py-2 p-sm-2'>
                                        <h2 className='mb-0 text-center'>100%</h2>
                                        <p className='mb-0 text-center'><small>got better grades</small></p>
                                    </div>
                                    <div className='px-3 py-2 p-sm-2'>
                                        <h2 className='mb-0 text-center'>100%</h2>
                                        <p className='mb-0 text-center'><small>Verified answers</small></p>
                                    </div>
                                    <div className='px-3 py-2 p-sm-2'>
                                        <h2 className='mb-0 text-center'>100%</h2>
                                        <p className='mb-0 text-center'><small>Always on time</small></p>
                                    </div>
                                    <div className='px-3 py-2 p-sm-2'>
                                        <h2 className='mb-0 text-center'>100%</h2>
                                        <p className='mb-0 text-center'>money back <br className='d-block d-sm-none'/> guarantee</p>
                                    </div> 
                                </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className='banner-img'>
                                <span className='dots d-none d-lg-block'></span>
                                <img src="./assets/img/nurse.webp" className='position-relative d-none d-lg-block' style={{zIndex:"2"}} width="370px" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 pe-2 pe-lg-0 ps-2 ps-lg-5 d-flex justify-content-center">
                            <Form/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
