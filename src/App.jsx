import  './app.css';
import { PreLoader } from "./component/preloader/PreLoader";
import { Navigation } from "./component/Navigation";


function App() {

  return (
    <>
      <PreLoader />
      <Navigation />
      <div class="image-container">
        <div class="overlay">
          <h2>Nombre de la imagen</h2>
        </div>
      </div>
    </>
  );
}

export default App




{/* <div className="App"> */}
  {/* <h1>hi</h1> */}
  {/* <div className="wraper">
    <div className="test"></div>
    <div className="test2"></div>
    <div className="test3"></div>
    <div className="test4"></div>
  </div> */}
{/* </div> */}