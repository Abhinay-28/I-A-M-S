// import React from 'react';
// import { Link } from 'react-router-dom';
// import './sidebar.css';
// import Btn from './Btn';

// const Halfside = () => {
//   return (
//     <div className="sidebar">
//       <ul>
//         <li>
//           <Link to="/users" className='dropdown-btn'>Members</Link>
//           <div><Btn /></div>
//           <Link to="/statistics" className='dropdown-btn'>Statistics</Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Halfside;



import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import Btn from './Btn';

const Halfside = () => {
  
  const handleClick = (e) => {
// e.preventDefault()
    console.log('Link clicked', e.target);
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/users" className='dropdown-btn' onClick={handleClick}>Members</Link>
          <div><Btn /></div>
          <Link to="/statistics" className='dropdown-btn' onClick={handleClick}>Statistics</Link>
        </li>
      </ul>
    </div>
  );
}

export default Halfside;
