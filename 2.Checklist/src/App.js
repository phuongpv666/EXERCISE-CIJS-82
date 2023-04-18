// import logo from './logo.svg';
import './App.css';
// import Header from './components/Header/Header';
import MyCheckbox from './components/Todolist/Checkbox';

function App() {
  return (
   <>
   
   
   <div className='Checkbox'>
   <MyCheckbox /> <h3>Clean up bedroom</h3>
   </div>
   <div className='Checkbox'>
   <MyCheckbox /> <h3>Buy some milk</h3>
   </div>
   <div className='Checkbox'>
   <MyCheckbox /> <h3>Jogging</h3>
   </div>
   <div className='Checkbox'>
   <MyCheckbox /> <h3>Learn React</h3>
   </div>
   <div className='Checkbox'>
   <MyCheckbox /> <h3>Doing exercise</h3>
   </div>
    </>
  
  );
}

export default App;
