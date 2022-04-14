import { useState } from 'react';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';

// import classes from './App.module.css';

function App() {
  const [sidebar, toggleSidebar] = useState(true)
  const [message, setMessage] = useState()
  const [showModal, setShowModal] = useState()
  return (
    <>
      {sidebar ? <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} /> : null}
      <Navbar sidebar={sidebar} toggleSidebar={toggleSidebar} showModal={showModal} setShowModal={setShowModal} setMessage={setMessage} message={message} />
      <Main />
    </>
  );
}

export default App;
