import React, { useEffect, useState } from 'react'
import OffcanvasExample from './comman/Header';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';

export const Wachlist = () => {

    const imageurl = "https://image.tmdb.org/t/p/w1280";

    let [showdat,setdata]=useState([]);


    let getdata = ()=>{

        let wachlistdata = JSON.parse(localStorage.getItem('uesdata')) ?? [];
        setdata(wachlistdata)

    }

    useEffect(()=>{
        getdata()
    },[])

   

    let delet = (dataremove)=> {

        let wachlistdata = JSON.parse(localStorage.getItem('uesdata'));
        let filterdata =  wachlistdata.filter((v,i)=>dataremove!== v.id);
        localStorage.setItem('uesdata',JSON.stringify(filterdata)); 
        getdata()
        toast.error('Delete Movie in  PlayList');
    
    }

  

  return (
    <>
        <OffcanvasExample/>
        <section className='container mt-5'>
        <div className='row pt-5 mt-5'>
          {
            showdat.map((v,i) => {
              return (
                <div key={i} className='col-lg-3 col-12 my-4'>
                  <div className="card" >
                    <img src={imageurl + v.poster_path} style={{height:'400px'}} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">
                        {v.title}
                      </h5>
                      <p className="card-text"></p>
                        <button onClick={()=>delet(v.id)} className='btn add'>
                           Remove movie in  PlayList
                        </button>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
        </section>
        <ToastContainer/>
    </>
  )
}
