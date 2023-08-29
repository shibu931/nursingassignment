import React, { useEffect } from 'react'
import EmbedForm from './Form'

export default function Banner() {
    useEffect(()=>{
            const script = document.createElement("script");
    script.src = "https://assets.frms.link/widgets/mfwidget.js";
    script.async = true;

    document.body.appendChild(script);
        script.onload = () => {
            new window.MFWidget('64ed91de9d13aad6fcad0588').init();
        }
    },[])
    return (
        <>
            <div className="hero-banner position-relative">
                <div className="container px-3 px-md-5">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="mt-2 mt-md-5">
                                <div className='d-flex flex-column justify-content-center'>
                                    <h1 className='fw-500 display-5 mb-4 p-3 p-lg-0 mt-4 mb-lg-4 text-sm-start text-center'>Worried About Nursing Assignment?  Hire Nursing Assignment Expert</h1>
                                    <h2 className="fs-5 fw-light mb-4 p-2 p-lg-0 text-light text-sm-start text-center">Connect with highly qualified and experienced
                                        Nursing Assignment experts, writers for all assignment on nursing at best prices with upto 50% off.
                                    </h2>
                                    <div className='my-3'>
                                    <div id="64ed91de9d13aad6fcad0588" ></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className='banner-img'>
                                <span className='dots d-none d-lg-block'></span>
                                <img src="./assets/img/nurse.webp" className='position-relative ' style={{ zIndex: "2" }} width="90%" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="counter-box d-flex flex-wrap align-items-center justify-content-around p-3 p-lg-4 shadow border">
                    <div className='px-2 py-2 px-sm-4'>
                        <h2 className='mb-0 text-center'>100%</h2>
                        <p className='mb-0 text-center'><small>Got Better Grades</small></p>
                    </div>
                    <div className="vl d-none d-sm-block" />
                    <div className='px-2 py-2 px-sm-4'>
                        <h2 className='mb-0 text-center'>100%</h2>
                        <p className='mb-0 text-center'><small>Verified Answers</small></p>
                    </div>
                    <div className="vl d-none d-sm-block" />
                    <div className='px-2 py-2 px-sm-4'>
                        <h2 className='mb-0 text-center'>100%</h2>
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
