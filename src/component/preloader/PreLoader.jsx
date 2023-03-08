import { useEffect } from "react";
import "./preloader.css";
import { preLoaderAnim } from "../../animations";

export const PreLoader = () => {

  useEffect(() => {
    preLoaderAnim()
  }, []);


  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Developer,</span>
        <span>Frontend,</span>
        <span>React.</span>
      </div>
    </div>
  );
}
