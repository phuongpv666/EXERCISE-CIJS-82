import { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [currentColor, setCurrentColor] = useState('white');
  const [currentCircle, setCurrentCircle] = useState(0);

  const handleNextClick = () => {
    setCurrentCircle(currentCircle => (currentCircle + 1) % 3);
    if (currentCircle === 0) {
      setCurrentColor('red');
    } else if (currentCircle === 1) {
      setCurrentColor('yellow');
    } else if (currentCircle === 2) {
      setCurrentColor('green');
    }
  };

  return (
    <div>
      <button onClick={handleNextClick}>Next</button>
      <div
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          border: '1px solid black',
          backgroundColor: currentCircle === 1 ? currentColor : 'white',
        }}
      />
      <div
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          border: '1px solid black',
          backgroundColor: currentCircle === 2 ? currentColor : 'white',
        }}
      />
      <div
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          border: '1px solid black',
          backgroundColor: currentCircle === 0 ? currentColor : 'white',
        }}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
export default App;





// import { useState } from 'react';
// import ReactDOM from 'react-dom';

// const App = () => {
//   const [currentColor, setCurrentColor] = useState('white');

//   const handleNextClick = () => {
//     if (currentColor === 'white') {
//       setCurrentColor('red');
//     } else if (currentColor === 'red') {
//       setCurrentColor('yellow');
//     } else if (currentColor === 'yellow') {
//       setCurrentColor('green');
//     } else if (currentColor === 'green') {
//       setCurrentColor('white');
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleNextClick}>Next</button>
      
//       <div
//         style={{
//           width: '100px',
//           height: '100px',
//           borderRadius: '50%',
//           backgroundColor: currentColor,
//         }}
//       />
//       <div
//         style={{
//           width: '100px',
//           height: '100px',
//           borderRadius: '50%',
//           backgroundColor: currentColor,
//         }}
//       />
//       <div
//         style={{
//           width: '100px',
//           height: '100px',
//           borderRadius: '50%',
//           backgroundColor: currentColor,
//         }}
//       />
      
//     </div>
//   );
// };

// ReactDOM.render(<App />, document.getElementById('root'));
// export default App;



// import React, { useState} from 'react';
// import ReactDOM from 'react-dom';

// const App = () => {
// const [currentColor, setCurrenColor] = useState('red');
// const handleNextClick = () => { 
//   if currentColor === ('red') {
//     setCurrenColor("green");
//   }
//   else if currentColor === ('green') {
//     setCurrenColor("yellow");
//   }
//   else if currentColor === ('yellow') {
//     setCurrenColor('red');
//   }
// }
// };
// return (
//   <div>
//   <div>
//     style={{
//       width: '100px',
//       height: '100px',
//       backgroundColor: currentColor,
//     }}
//   </div>
//     <button onClick={handleNextClick}>NEXT</button>
//   </div>
// )
// export default App;
