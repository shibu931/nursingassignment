import React from 'react'

export default function Footer() {
  return (
    <>
        <footer>
            <div className="footer-top">
              <div className="container text-light py-4">
                <div className="row">
                  <div className="col-lg-3 col-md-6 p-2">
                    <h2 className='fs-4 fw-600'>LOGO</h2>
                    <p className='fs-5 mb-5'>Company's Motto</p>
                    <ul className='list-unstyled d-flex'>
                      <li><span className='text-secondary fs-4 m-2'><i class="fa-brands fa-facebook"></i></span></li>
                      <li><span className='text-secondary fs-4 m-2'><i class="fa-brands fa-square-instagram"></i></span></li>
                      <li><span className='text-secondary fs-4 m-2'><i class="fa-brands fa-square-twitter"></i></span></li>
                      <li><span className='text-secondary fs-4 m-2'><i class="fa-brands fa-pinterest"></i></span></li>
                      <li><span className='text-secondary fs-4 m-2'><i class="fa-brands fa-linkedin"></i></span></li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6 p-2">
                    <h2 className='fs-4 fw-600'>SERVICES</h2>
                    <ul className='list-unstyled'>
                      <li><a href="#" className='fs-5'>Aged Care Nursing</a></li>
                      <li><a href="#" className='fs-5'>Clinical Nursing</a></li>
                      <li><a href="#" className='fs-5'>Caridac Nursing</a></li>
                      <li><a href="#" className='fs-5'>Cardiac Nursing</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6 p-2">
                    <ul className="list-unstyled">
                    <li><a href="#" className='fs-5'>Mental Health Nursing</a></li>
                    <li><a href="#" className='fs-5'>Nursing Reflection</a></li>
                    <li><a href="#" className='fs-5'>Nursing Poster Making</a></li>
                    <li><a href="#" className='fs-5'>Community Care Nursing</a></li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6 p-2">
                    <h2 className='fs-4 fw-600'>Contact US</h2>
                    <ul className='list-unstyled'>
                      <li><p className='mb-1 fs-5'><strong>Phone: </strong>+123445667</p></li>
                      <li><p className='mb-1 fs-5'><strong>Email: </strong>abc@gmail.com</p></li>
                      <li><p className='mb-1 fs-5'><strong>Address: </strong>abc, Street 1, State</p></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
                <div className="container text-center text-light p-2 p-md-4">
                  <p className='mb-0'><small>Copyright 2010-2023</small></p>
                  <p className='mb-4'><small>Nursing Assignment Expert All rights reserved</small></p>

                  <p className='mb-0'><small>Assignment Solutions available on Nursingassignmenthelp.com.au serves as model papers or reference materials for students however, they are not to be submitted as it is. These solutions are intended to be used as reference purpose only.</small></p>
                </div>
            </div>
        </footer>
    </>
  )
}
