import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

export default function Faqs() {
    const faqs =[
        {
            id:1,
            title:"How Are Nursing Assignment Experts Going To Assist?",
            content:"The greatest and most well-known gurus of nursing writing services can offer you the best solutions and enhance your chance of being chosen as a nurse. Our nursing assignment expert and Canada standards."
        },
        {
            id:2,
            title:"What Makes Us The Best Nursing Assignment Writing Service?",
            content:"Since you recruited us to do my nursing assignments, we'll ensure to be available round-the-clock for guidance, both during the process and after it is complete. We can save you a ton of time by providing rapid feedback, and our prompt responses will ascertain our commitment to assignment help seekers."
        }
        ,
        {
            id:3,
            title:"How To Hire Someone To Do My Nursing Assignment?",
            content:"Please contact us right away if you need help with your nursing homework or assignments. Our competent nursing assignment experts will assist you with outstanding online nursing assignment at a reasonable price. Visit our website, and fill out the form to acquire our professionals with ease. They possess significant expertise and are well qualified"
        }
        ,
        {
            id:4,
            title:"How Quickly Can You Deliver My Nursing Assignments?",
            content:"It depends on the length and level of complexity of your task. If you choose our advanced-level nursing writing service in Australia. Our skilled assignment writing helpers will begin working promptly and deliver you accurate responses prior to your deadline. If not, you will receive the solution by the deadline."
        }
        ,
        {
            id:5,
            title:"Can I Apply For Editing And Proofreading Services For My Nursing Assignments?",
            content:"Certainly, you can rely on our editing and proofreading assignment writing services since we have a professional team that can readily review your content and edit any errors that ought to be changed."
        }
    ]
    return (
        <>
            <div className="container my-5">
                <h2 className='fs-3 fw-bold mb-4'>Questions <span className='text-primary'>Asked by</span> Nursing</h2>
                <Accordion defaultActiveKey={['1','2','3','4','5']} alwaysOpen>
                    {
                        faqs.map((data)=>(
                                <Accordion.Item eventKey={`${data.id}`} key={data.id}>
                                    <Accordion.Header>{data.title}</Accordion.Header>
                                    <Accordion.Body>
                                        <p className='fs-5 fw-light'>{data.content}</p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            ))
                    }
                </Accordion>
            </div>
        </>
    )
}
