import React from 'react';
import './style.css';

function ProsCons() {
  return (
    <>
      <div className='container'>
        <div className='py-2'>
          <div className='heading'>
            <p className='subheading fs-4 mb-4'>Hack Only The Pro’s Know</p>
            <h2 className='fs-1 fw-bold'>Nursing Assignment Experts Outlines <br />Do’s and Don’ts:</h2></div>
        </div>
      </div>
      <section className='prooscons-sect'>
        <div className='container-fluid px-2 px-md-5'>

          <div className='row'>
            <div className='col-lg-4 col-md-6 com-sm-12 col-12 d-flex align-items-center justify-content-center'>
              <div>
                <h4 className='pros-const-head'>Pros</h4>
                <div className='pros'>
                  <ul className="lft_facts_list">
                     <li className='fs-5'> Always Document The Information</li>
                     <li className='fs-5'> Stay Precise</li>
                     <li className='fs-5'> Utilize Verified Protocol</li>
                     <li className='fs-5'> Use Professional Phrases</li>
                     <li className='fs-5'> Using cliche titles</li>
                     <li className='fs-5'> Appropriate Citations and Referencing</li> 
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 com-sm-12 col-12'>
              <div>  <img className="pros-cons-img" alt="abc" src="../assets/img/pros-cons-img.webp" /></div>
            </div>
            <div className='col-lg-4 col-md-6 com-sm-12 col-12 d-flex align-items-center justify-content-center'>
              <div>
                <h4 className='pros-const-head'>Cons</h4>
                <div className='cons'>
                  <ul className="lft_facts_list"> <li className='fs-5'> Overlooking Formatting</li>
                  <li className='fs-5'> Using Generic Terms</li>
                  <li className='fs-5'> Plagiarised Content</li>
                  <li className='fs-5'> Vague Conclusion</li>
                  <li className='fs-5'> Using cliche titles</li>
                  <li className='fs-5'> Improper Reasoning</li> 
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProsCons