// import React from 'react';
// // import './App.css';
// import './home';
// import Hometicket from './home';
// function App() {
//   return (
//     <div className="App">
//      <Hometicket/>
//     </div>
//   );
// }

// export default App;
import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Login from "./Components/Login";
import Logout from "./Components/Logout";
import { selectUser } from "./features/userSlice";
const App = () => {
  const user = useSelector(selectUser);
  console.log(user);

  return <div>{user ? <Logout /> : <Login />}</div>;
};

export default App;