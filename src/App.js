import { useState } from 'react';
import Jsondata from './MOCK_DATA.json'
import './index.css'
function App() {
  const[searchTerm,setSearchTerm] = useState('')
  console.log(searchTerm)

  return (
    <div className="App">
      <input type="text" placeholder='search...' onChange={event => {setSearchTerm(event.target.value)}}/>
      {Jsondata.filter((val) => {
        if(searchTerm==""){
        return val
      }else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
        return val
      }
      }).map( (val,index) =>{
        return(
 
          <div className='name' key={index}>
             {val.first_name}

          </div>
        ) 
      })}
    </div>
  );
}

export default App;
