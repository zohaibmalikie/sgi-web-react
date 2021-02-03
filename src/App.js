import './App.css';
import Navbar from '../src/component/navbar/navbar';
import Sidebar from '../src/component/sidebar/sidebar';
import ButtonBelowNavbar from '../src/component/sidebar/buttonsBelowNavbar'
function App() {
  return (
    <div className="App">
      <div className="bg-color-gray container-fluid pl-5 pr-5 ">
      

    <Navbar/>
    <div className="row">
    <Sidebar />
    <ButtonBelowNavbar/>
    </div>
    
      </div>
    </div>
  );
}

export default App;
