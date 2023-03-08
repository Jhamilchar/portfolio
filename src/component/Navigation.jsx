import 'animate.css';
import '../styles/nav.css'

export const Navigation = () => {
  return (
    <header className="header-portfolio">
      <nav>
        <a href="/">
          <img className="logo" src="/src/img/logo.png" alt="logo-jhamil" />
        </a>
        <ul>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="wraper-info">
        <div className="wraper-description">
          <p className="presentation animate__animated animate__fadeInLeft animate__delay-5s">
            Hi, my name is
          </p>
          <h3 className="presentation animate__animated animate__fadeInRight animate__delay-5s full-name">
            Jhamil Arroyo
          </h3>
          <h3 className="presentation animate__animated animate__fadeInUp animate__delay-5s description">
            I build page for the web
          </h3>
        </div>
        <div>
          <img
            // src="/src/img/shape.png"
            // alt=""
            // style={{
            //   width: "40rem",
            //   borderRadius: "30%",
            // }}
          />
          <img
            className="animate__animated animate__fadeIn animate__delay-5s"
            style={{
              width: "31.25rem",
              borderRadius: "30%",
            }}
            src="/src/img/picture2.png"
            alt=""
          />
        </div>
      </div>
    </header>
  );
}
