import './App.css';
import OffcanvasExample from './comman/Header';
import axios from 'axios';
import { Apimaindata } from './ApiBashUrl';
import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';
import { ApiSearchurl } from './searchApiurl';


function App() {


  const imageurl = "https://image.tmdb.org/t/p/w1280";

  let [datamovie, setdatamovie] = useState([]);
  let [pages,setpages]=useState(1);

  let setprev = ()=>{
    if(pages>1){
      setpages(--pages)
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } else{
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } 
  }
  let setnext = ()=>{
      setpages(++pages)
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      toast.success(`WellCom To New Page`)
  }

  let getmoviedata = () => {

    let Apiurl = Apimaindata;

    axios.get(Apiurl + pages)
      .then((res) => {
        return res.data
      })
      .then((finaldata) => {
        setdatamovie(finaldata.results)
      })
  }

  useEffect(() => {
    getmoviedata()
  },[pages])

  let searchgetdata = (e)=>{

    let SearchApi = ApiSearchurl;

    if(e.target.value != ''){

      axios.get(SearchApi + e.target.value)
      .then((res) => {
        return res.data
      })
      .then((finaldata) => {
        setdatamovie(finaldata.results)
      })

    }else{
      getmoviedata()
    }
  } 


  let setmovieadd = (adddata)=>{

    let iddata = adddata ;

    let mygetdata = JSON.parse(localStorage.getItem('uesdata')) ?? [];

    if(mygetdata.some((item)=> item.id == iddata.id)){

      toast.error('allready Exit in PlayList')

    }else{

      let fainaldata = [...mygetdata,iddata];
  
      localStorage.setItem('uesdata',JSON.stringify(fainaldata));
  
      toast('this movie add to wichlist ');
    }

    

  

  }


  
  return (
    <div className="App">
      <OffcanvasExample />
      <section className='container pt-5 mt-lg-5 text-center'>
        <h1 className='text-light textheding'>
          The biggest Indian hits. The best Indian  movies. <br /> All streaming here.
        </h1>
        <h5 className='text-light pt-3 fw-semibold '>
          Watch anywhere. Cancel anytime.
        </h5>
        <form className='mt-5' onChange={(e)=>searchgetdata(e)}>
          <input type="search" autoComplete='off' name='search' placeholder='Search Your Movie Name' className='py-2 px-2 rounded mt-2 input w-100' />
        </form>
      </section>
      <section className='container mt-5'>
        <div className='row pt-5 mt-5'>
          {
            datamovie.map((v,i) => {
              console.log();
              return (
                <div key={i} className='col-lg-3 col-12 my-4'>
                  <div className="card" >
                    <img src={imageurl + v.poster_path} style={{height:'400px'}} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">
                        {v.title}
                      </h5>
                      <p className="card-text"></p>
                        <button onClick={()=>setmovieadd(v)} className='btn add'>
                           Add To Play List
                        </button>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
        <div className='pages rounded my-3 d-flex justify-content-around'>
            <button onClick={()=>setprev()} className='btn btnn m-2 fw-bold'>
                prev
            </button>
            <button onClick={()=>setnext()} className='btn btnn m-2 fw-bold'>
               Next
            </button>
        </div>
      </section>
      <ToastContainer position='top-center'  />
    </div>
  );
}

export default App;
