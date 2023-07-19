import './App.css';
import Footer from './components/Common/Footer';
import Navbar from './components/Common/Navbar';
import Editor from './components/Main/Editor';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Instructions from './components/Main/Instruction';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Instructions/>
      <Editor/>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
