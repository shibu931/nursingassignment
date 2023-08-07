import React from 'react'

export default function Banner() {
    return (
        <>
            <div className="hero-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-10">
                            <div className="row">
                                <div className="col-lg-8 d-flex flex-column justify-content-center">
                                    <h1 className='fw-400'>Worried About Nursing Assignment?</h1>
                                    <h1 className='fw-400 mb-4'>Hire Nursing Assignment Expert</h1>
                                    <h2 className="fs-4 fw-light mb-4 text-light">Connect with highly qualified and experienced
                                        Nursing Assignment experts, writers for all assignment on nursing at best prices with upto 50% off.
                                    </h2>
                                    <div className="counter-box d-flex flex-wrap align-items-center justify-content-center py-3 me-lg-5">
                                        <div className='col-6 col-md-4 p-1'>
                                            <h2 className='mb-0 text-center'>100%</h2>
                                            <p className='mb-0 text-center'>money back guarantee</p>
                                        </div>
                                        <div className='col-6 col-md-3 p-1'>
                                            <h2 className='mb-0 text-center'>100%</h2>
                                            <p className='mb-0 text-center'><small>got better grades</small></p>
                                        </div>
                                        <div className='col-6 col-md-2 p-1'>
                                            <h2 className='mb-0 text-center'>100%</h2>
                                            <p className='mb-0 text-center'><small>Verified answers</small></p>
                                        </div>
                                        <div className='col-6 col-md-3 p-1'>
                                            <h2 className='mb-0 text-center'>100%</h2>
                                            <p className='mb-0 text-center'><small>Always on time</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <span className='dots'></span>
                                    <img src="./assets/img/nurse.webp" className='position-relative' style={{zIndex:"2"}} width="100%" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
