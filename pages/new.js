import React,{useState} from 'react';
import Link from 'next/link';
import Aoo from '../components/navbar';

export default function Off () {
  const [view,setView] = useState('column is-3 ');
  const[view1,setEdu] =useState('column is-3 is-offset-1');
  const[view2,setSkills]=useState('column is-3 is-offset-1');
  const[box,setBox]=useState('is-hidden');
  const[abot,setAbout]=useState(['About Me','Rehannnnnnnnnnnnnnnnnnnnnnnn','fdfdfdffsddddddddddsdssdsd'])
  const [na,setName]=useState([]);
  const[isvis,setVis]=useState('is-hidden');

  

 function submit(){
   setVis('');
 }
 
  function fishy(){
    setView('column is-3 is-offset-2');
    setEdu('column is-0 is-hidden');
    setSkills(' column is-0 is-hidden');
    setBox('null');
    setAbout(['About','dsdsdsd','sdasdasd']);


  }

  function fishy1(){
    setView('column is-0 is-hidden');
    setEdu('column is-3 is-offset-2');
    setSkills('column is-0 is-hidden');
    setBox('null');
    setAbout(['Education','dsdsdsd','sdasdasd']);
  }

  function fishy2(){
    setView('column is-0 is-hidden');
    setEdu('column is-0 is-hidden');
    setSkills('column is-3 is-offset-2');
    setBox('null');
    setAbout(['Skills','dsdsdsd','sdasdasd']);
  }

  function close(){
    setView('column is-3');
    setEdu('column is-3 is-offset-1');
    setSkills('column is-3 is-offset-1');
    setBox('is-hidden');
  }



  return(
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div className="backimg" >
    <Aoo/>

    
        
  




 
<div className="icon-bar">
<a href="https://www.facebook.com/" className="facebook"><i className="fa fa-facebook"></i></a>
<a href="https://github.com/" className="github"><i className="fa fa-github"></i></a>
  <a href="https://twitter.com/login?lang=en" className="twitter"><i className="fa fa-twitter"></i></a>
  <a href="https://google.com/" className="google"><i className="fa fa-google"></i></a>
  <a href="https://www.linkedin.com/login" className="linkedin"><i className="fa fa-linkedin"></i></a>
  <a href="https://www.instagram.com/" className="instagram"><i className="fa fa-instagram"></i></a>
  <a href="https://www.youtube.com/" className="youtube"><i className="fa fa-youtube"></i></a></div>
  <section class="section">
    <div class="container" >
      <div class="columns ml-6 mt-5" >
        <div class={view}>
          <div class="">
        <div class="card">
        <header class="card-header">
        <p class="card-header-title">
          About Me
    </p>
        </header>
            <div class="card-image">
              <figure class="image is-256x256">
              <img src="/reee.jpg" alt="Placeholder image" style={{height:240}}/>

              </figure>
              </div>
              <div class="content">
                <p>My name is Syed Rehan Ahmed</p>
                <p>I am React js Developer</p><br/>
                <p>I am living in Bangalore</p>
                <button class="button is-outlined is-success ml-6 mb-2 " onClick={fishy}>View More</button>
              </div>
        </div> 
        </div>
        </div>

        
        <div class={view1}>
         <div class=""> 
        <div class="card">
        <header class="card-header">
        <p class="card-header-title">
          Education
    </p>
        </header>
            <div class="card-image">
              <figure class="image is-256x256">
              <img src="images.jpg" alt="Placeholder image" style={{height:240}}/>

              </figure>
              </div>
              <div class="content">
                <p>S J B institute of technology</p>
                <p>Cambridge PU college</p><br/>
                <p>Cambridge Public School</p>
                <button class="button is-success is-outlined ml-6 mb-2 " onClick={fishy1} >View More</button>
              </div>
        </div>
        </div>
        </div>

      

        <div class={view2}>
        <div class="">
          <div class="card">
        <header class="card-header">
        <p class="card-header-title">
          Skills
    </p>
        </header>
            <div class="card-image">
              <figure class="image is-256x256">
              <img src="/aws-flask-react.png" alt="Placeholder image" style={{height:240}}/>

              </figure>
              </div>
              <div class="content " >
                <p>Html,css,Javascript</p>
                <p>React js,Next js,Python</p><br/>
                <p>Aws,Docker</p>
                <button class="button is-success is-outlined ml-6 mb-2 " onClick={fishy2}>View More</button>
              </div>
        </div> 
        </div>
        </div>

        <div class={box}>
          
          
            <div class="column is-5">
            <article class="message is-dark">
  <div class="buttons has-addons is-right">
    
    <button class="delete " aria-label="delete" onClick={close} color='red'></button>
  </div>
  <div class="message-body">
  <p>{abot[0]}</p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
  </div>
</article>
              </div>
            </div>
            

       
    </div>
    </div>
    
    
   

  </section>
  <div class="column is-5 is-offset-3 is-hidden">
    <div class="box">
      <div class="content">
        <h4 class="subtitle is-4">Projects</h4>
      </div>
    </div>


  </div>
  </div>
  <div class="column is-5 is-offset-3">
    {/* <div class="box">
    <div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input is-success" type="text" placeholder="Text input" onChange={(event)=>setName(event.target.value)}/>
  <button onClick={submit} >Submit</button>
  <p class={isvis}>
    {na}
  </p>
  </div>

</div>



    </div> */}

  </div>
  

  
       
    </>
  )
}