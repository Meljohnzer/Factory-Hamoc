// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';


//function component 
const BackgroundColor = (props) =>{
    return  <div className='App-header' style={{backgroundColor:props.label,width:"100vw",display:props.display}}>
      <input onChange={props.onChange} placeholder={props.placeholder}/>
    </div>
    
}



//function that called the component
const Factory = ({change,...props}) =>{
  return <BackgroundColor {...props} />
}

//main functions
function App() {

  const [show,setShow ] = useState('')
  const [show1,setShow1 ] = useState('')
  const [show2,setShow2 ] = useState('')

  //  const display = () => {

  //   return (
  //     <div className='App'>
  //     <div className='App-header' style={{backgroundColor:'white'}}>
  //       <button onClick={()=>{
  //         setShow(true)
  //       }
  //       }>Turn OFF</button>
  //     </div>
  //     </div>
  //   )
  //  }

  return (
     <div className="App">
      <div style={{flexDirection:"column",position:"absolute",textAlign:'center',color:"white",top:0}}>
          <h1><span>Sample Factory Pattern Design</span></h1>
          <h4>(Input Color to change Background)</h4>
          
      </div>
      <Factory label={show}  display = {show} placeholder="First" onChange={ e=> setShow(e.target.value)}/>
      <Factory label={show1} placeholder="Second" onChange={ e=> setShow1(e.target.value)}/>
      <Factory label={show2} placeholder="Third" onChange={ e=> setShow2(e.target.value)}/>
    </div> 
  );
}

export default App;
