import React, { useEffect } from 'react'
import EmbedForm from './Form'

export default function Banner() {
    return (
        <>
            <div className="hero-banner position-relative pb-5">
                <div className="container-fluid px-3 px-md-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6">
                            <div className="mt-2 mt-md-5">
                                <div className='d-flex flex-column justify-content-center'>
                                    <h1 className='fw-500  title-text mb-4 p-3 p-lg-0 mt-4 mb-lg-4 text-sm-start text-center'>Need Help With Nursing<br className='d-none d-lg-block'/> Assignment? Hire Nursing<br className='d-none d-lg-block'/>Assignment Help  In Australia</h1>
                                    <h2 className="fs-5 fw-light mb-4 p-2 p-lg-0 text-light text-sm-start text-center">Connect with highly qualified and experienced
                                        Nursing Assignment experts, writers for all assignment on nursing at best prices and guranteed quality.
                                    </h2>
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-4 d-none d-xl-block">
                            <div className='banner-img'>
                                <span className='dots d-none d-lg-block'></span>
                                <img src="./assets/img/nurse.webp" className='position-relative ' style={{ zIndex: "2" }} width="90%" alt="" />
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 d-flex justify-content-center ps-0 ps-lg-3 pb-5 pb-lg-0 pt-2">
                            <EmbedForm/>
                        </div>
                    </div>
                </div>
                <div className="counter-box d-flex flex-wrap flex-sm-nowrap align-items-center justify-content-around p-3 p-lg-4 shadow border">
                    <div className='px-2 py-2 px-sm-4'>
                        <h2 className='mb-0 text-center'>96%</h2>
                        <p className='mb-0 text-center'><small>Got Better Grades</small></p>
                    </div>
                    <div className="vl d-none d-sm-block" />
                    <div className='px-2 py-2 px-sm-4'>
                        <h2 className='mb-0 text-center'>100%</h2>
                        <p className='mb-0 text-center'><small>Verified Answers</small></p>
                    </div>
                    <div className="vl d-none d-sm-block" />
                    <div className='px-2 py-2 px-sm-4'>
                        <h2 className='mb-0 text-center'>99%</h2>
                        <p className='mb-0 text-center'><small>Always On Time</small></p>
                    </div>
                    <div className="vl d-none d-sm-block" />
                    <div className='px-2 py-2 px-sm-4'>
                        <h2 className='mb-0 text-center'>100%</h2>
                        <p className='mb-0 text-center'>Money Back <br className='d-block d-sm-none' /> Guarantee</p>
                    </div>
                </div>
            </div>
        </>
    )
}
