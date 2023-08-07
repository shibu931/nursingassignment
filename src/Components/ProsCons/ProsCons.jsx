import React from 'react';
import './style.css';

function ProsCons() {
  return (
   <>
   <div className='container'>
   <div className='py-2'>
   <div className='heading'>
            <p className='subheading'>Hack Only The Pro’s Know</p>
            <h2>Nursing Assignment Experts Outlines <br/>Do’s and Don’ts:</h2></div>
            </div>
   </div>
   <section className='prooscons-sect'>
    <div className='container'>
       
        <div className='row'>
            <div className='col'>
              <div>
              <h4 className='pros-const-head'>Pros</h4>
                <div className='pros'>
                <ul class="lft_facts_list"> <li> Always Document The Information</li><li> Stay Precise</li><li> Utilize Verified Protocol</li><li> Use Professional Phrases</li><li> Using cliche titles</li><li> Appropriate Citations and Referencing</li> </ul>
                </div>
              </div>
            </div>
            <div className='col'>
              <div>  <img className="pros-cons-img" alt="abc" src="../assets/img/pros-cons-img.webp"/></div>
                {/* <img className="countryimg" alt="abc"
                  src="../assets/img/australia.webp"
                /> */}
            </div>
            <div className='col'>
            <div>
              <h4 className='pros-const-head'>Cons</h4>
                <div className='cons'>
                <ul class="lft_facts_list"> <li> Overlooking Formatting</li><li> Using Generic Terms</li><li> Plagiarised Content</li><li> Vague Conclusion</li><li> Using cliche titles</li><li> Improper Reasoning</li> </ul>
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