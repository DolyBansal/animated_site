import React from 'react'
import Sdata from './Sdata'
import Card from './Card'

function Service() {
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'><b>Our Services </b></h1>
            </div>

            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto " >
                        <div className="row gy-4">
                        {
                            Sdata.map((val,indx)=>{
                               return ( <Card 
                                    id={indx}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                />
                               )
                            })
                        }
                           
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Service
