import logo from './logo.svg';
import './App.css';
import Footer from './components/Common/Footer';
import Navbar from './components/Common/Navbar';
import Editor from './components/Main/Editor';
import OrdersTable from './components/Main/Tables/OrdersTable';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Editor/>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;
