import React from 'react'

function Common(props) {
  return (
    <>
         <section id="header" className="home">
         <div className="container-fluid nav-bg">
            <div className="row">
                <div className="col-10 mx-auto " >
                <div className="row">
                <div className="col-md-6 pt-10 pt-lg-0 order-2 order-lg-1 home1" >
                    <h1>
                       {props.name}
                         <strong className='brand-name'> Doly Bansal</strong>
                    </h1>
                    <h4 className='my-3'>
                        we are the team of talnted developer making wedsite
                    </h4>
                    <div className="mt-3">
                        <a href={props.visit} className="btn btn-outline-info"> {props.button}</a>
                    </div>
                </div>

                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                    <img src={props.imgsrc} alt="home img" className='img-fluid animated' />
                </div>
                </div>
                
                </div>
            </div>
        </div>
    </section>
    </>
  )
};

export default Common;
