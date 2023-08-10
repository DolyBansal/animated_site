import React, { useState } from 'react'

function Contact() {
    const[data,setdata]=useState(
        {
            fullname:"",
            phone:"",
            email:"",
            msg:""

        }
    );
    const InputEvent= (event)=>{
       const { name,value} =event.target;
        
       setdata((preval)=>{
        return{
            ...preval,
            [name] : value,
        };
       });  

    };
    const froms = (e)=>{
        e.preventDefalut();

    }
    return (
        <>
            <div className='my-5'>
                <h1 className=' text-center'><b> contact us</b></h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={froms} >
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                            <input
                             type="text" 
                             class="form-control" 
                             id="exampleFormControlInput1"
                              name="fullname"
                              value={data.fullname}
                              onChange={InputEvent}                            
                                placeholder="Enter your full name" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Moblie Number</label>
                            <input
                             type="Number" 
                             class="form-control" 
                             id="exampleFormControlInput1"
                              name="phone"
                              value={data.phone}
                              onChange={InputEvent}                            
                                placeholder="Enter your number" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input
                             type="email" 
                             class="form-control" 
                             id="exampleFormControlInput1"
                              name="email"
                              value={data.email}
                              onChange={InputEvent}                            
                                placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">send the message </label>
                            <textarea class="form-control" 
                            id="exampleFormControlTextarea1"
                             rows="3"
                             name="msg"
                              value={data.msg}
                              onChange={InputEvent}  ></textarea>
                        </div>
                        <div class="col-12">
                           <button class="btn btn-outline-primary" type="submit">Submit form</button>
                                </div>
                                </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
