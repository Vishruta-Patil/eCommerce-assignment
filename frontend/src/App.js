import { Header, Footer } from "./components";
import "./App.css";
import "./styles/index.css";
import { ToastContainer, } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Router } from "./components/router";

function App() {


  return (
    <div>
      <Header />
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="toast-font-size"
      />
      <Router />
      {/* {!state.userLoading ? <Footer />  : null} */}
      <Footer /> 
    </div>
  );
}

export default App;
