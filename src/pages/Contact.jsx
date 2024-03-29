import React from 'react'
import './contact.css'
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

function Contact() {
    return (
        <>
            <div className='contanier'>
                <div className="imagebox">
                    <div className="contentText">
                        <h1>Contact Us.</h1>
                    </div>
                </div>
                <div className='container1'>
                    <div className='info'>
                        <img src='/image/div.jpg' />
                        <div className='pro'>
                            <div className='name'>
                                <input type="text" placeholder='Name' /></div>
                            <div className='email'><input type="email" placeholder='Email' /></div>
                        </div>
                        <div className='pro1'>
                            <div className='name'>
                                <input type="no" placeholder='Phone no' /></div>
                            <div className='email'><input type="text" placeholder='Service Ex Cement Supplier' /></div>
                        </div>
                        <div className='pro1'>
                            <textarea type="text" placeholder='Your Message' />
                        </div>
                        <button type='submit'>Send</button>
                    </div>
                    <div className='info1'>
                        <img src='image/div.jpg' />
                        <div className='A'>
                            Our dedicated team is ready to provide you with the <br />support and information you require.
                            Your inquiries<br /> are important to us, and we look forward <br />to hearing from you.
                            <br />Let's connect and make your real <br />estate and construction journey exceptional!</div>

                        <div className='icon'>
                            <div className='call'>
                                <IoMdCall />
                                <div className='have'>Have any question?<div className='h'>
                                    9877503362
                                </div>

                                </div>
                            </div>
                            <div className='gmail'>
                                <MdEmail />
                                <div className='have1'>
                                    Write email<div className='h1'>
                                        info@21sqft.com
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact