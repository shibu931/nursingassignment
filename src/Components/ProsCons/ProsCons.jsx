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
        <div className='container-fluid px-2 px-md-5 overflow-hidden'>

          <div className='row py-5'>
            <div className='col-lg-4 col-md-6 com-sm-12 col-12 d-flex align-items-center justify-content-center ps-4 ps-lg-0'>
              <div>
                <h4 className='pros-const-head'>Pros</h4>
                <div className='pros'>
                  <table className='table-borderless'>
                    <tbody>
                      <tr>
                        <td className='pe-4'><img src="./assets/img/green_tick.webp" width={35} alt="" /></td>
                        <td><p className='fs-5 fw-bold mb-0'>Always Document The Information</p></td>
                      </tr>
                      <tr>
                        <td className='pe-4'><img src="./assets/img/green_tick.webp" width={35} alt="" /></td>
                        <td><p className='fs-5 fw-bold mb-0'>Stay Precise</p></td>
                      </tr>
                      <tr>
                        <td className='pe-4'><img src="./assets/img/green_tick.webp" width={35} alt="" /></td>
                        <td><p className='fs-5 fw-bold mb-0'>Utilize Verified Protocol</p></td>
                      </tr>
                      <tr>
                        <td className='pe-4'><img src="./assets/img/green_tick.webp" width={35} alt="" /></td>
                        <td><p className='fs-5 fw-bold mb-0'>Use Professional Phrases</p></td>
                      </tr>
                      <tr>
                        <td className='pe-4'><img src="./assets/img/green_tick.webp" width={35} alt="" /></td>
                        <td><p className='fs-5 fw-bold mb-0'>Using cliche titles</p></td>
                      </tr>
                      <tr>
                        <td className='pe-4'><img src="./assets/img/green_tick.webp" width={35} alt="" /></td>
                        <td><p className='fs-5 fw-bold mb-0'>Appropriate Citations and Referencing</p></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6 com-sm-12 col-12'>
              <div>  <img className="pros-cons-img d-none d-md-block" alt="abc" src="../assets/img/pros-cons-img.webp"  /></div>
            </div>
            <div className='col-lg-4 col-md-6 com-sm-12 col-12 d-flex align-items-center justify-content-start justify-content-lg-start ps-4 ps-lg-0'>
              <div>
                <h4 className='pros-const-head'>Cons</h4>
                <div className='cons'>
                  <table className='table-borderless'>
                    <tbody>
                      <tr>
                        <td className='pe-4'><img src="./assets/img/red_tick.webp" width={35} alt="" /></td>
                        <td><p className='fs-5 fw-bold mb-0'>Overlooking Formatting</p></td>
                      </tr>
                      <tr>
                        <td className='pe-4'><img src="./assets/img/red_tick.webp" width={35} alt="" /></td>
                        <td><p className='fs-5 fw-bold mb-0'>Using Generic Terms</p></td>
                      </tr>
                      <tr>
                        <td className='pe-4'><img src="./assets/img/red_tick.webp" width={35} alt="" /></td>
                        <td><p className='fs-5 fw-bold mb-0'>Plagiarised Content</p></td>
                      </tr>
                      <tr>
                        <td className='pe-4'><img src="./assets/img/red_tick.webp" width={35} alt="" /></td>
                        <td><p className='fs-5 fw-bold mb-0'>Vague Conclusion</p></td>
                      </tr>
                      <tr>
                        <td className='pe-4'><img src="./assets/img/red_tick.webp" width={35} alt="" /></td>
                        <td><p className='fs-5 fw-bold mb-0'>Using cliche titles</p></td>
                      </tr>
                      <tr>
                        <td className='pe-4'><img src="./assets/img/red_tick.webp" width={35} alt="" /></td>
                        <td><p className='fs-5 fw-bold mb-0'>Improper Reasoning</p></td>
                      </tr>
                    </tbody>
                  </table>
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