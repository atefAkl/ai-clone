import React from 'react';
import './App.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';

const App = () => {
  return (
    <>
      <Sidebar />
      <Main />
    </>
  );
}

export default App;
