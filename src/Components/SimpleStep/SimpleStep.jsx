import React from 'react';
import './style.css';

function SimpleStep() {
  return (
    <>
    <section className='simplestep-back'>
        <div className='container'>
<div className='text-center text-white py-3'>
    <h2 className='fw-bold'>How To Connect Us With Simple Steps </h2>
</div>


<div className='row'>
    <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
<div className='simple-step-div p-5 mt-3'>
<img
                  className="stepimagesize"
                  alt="abc"
                  src="../assets/img/place-order.webp"
                />
    <h4>Place Your Order</h4>
   <p>Fill in your details at Write <br/>my assignment form</p>
  
</div>
    </div>

    <div className='col-lg-3 col-md-6 col-sm-6 col-12'>
    <div className='simple-step-div p-5 mt-3'>
<img
                  className="stepimagesize"
                  alt="abc"
                  src="../assets/img/talk-to-us.webp"/>
    <h4>Talk To Us</h4>
    
   <p>The writing work is <br/>allocated to the most </p>
       
   
</div>
</div>

<div className='col-lg-3 col-md-6 col-sm-6 col-12'>
    <div className='simple-step-div p-5 mt-3'>
<img
                  className="stepimagesize"
                  alt="abc"
                  src="../assets/img/make-payment.webp"
                />
   <h4>Make Payment</h4>
    <p>You need to make <br/>payment through the <br/>secured payment system.</p>
       
   
</div>
</div>

<div className='col-lg-3 col-md-6 col-sm-6 col-12'>
    <div className='simple-step-div last p-5 mt-3'>
<img
                  className="stepimagesize"
                  alt="abc"
                  src="../assets/img/dilivery-quality.webp"
                />
   <h4>Delivered Quality <br/>Work On-Time</h4>
    <p>On time and quality work <br/>is delivered to you.</p>
       
   
</div>
</div>



</div>

        </div>
    </section>
    </>


  )
}

export default SimpleStep