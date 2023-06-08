import Jsondata from './MOCK_DATA.json'
import './index.css'
function App() {
  return (
    <div className="App">
      <input type="text" placeholder='search...' />
      {Jsondata.map( (val,index) =>{
        return(

          <div className='name'>
             {val.first_name}

          </div>
        ) 
      })}
    </div>
  );
}

export default App;
