import { ReactComponent as LinkedInIcon } from "./linkedin.svg";
import { ReactComponent as YoutubeIcon } from "./youtube.svg";
import { ReactComponent as InstagramIcon } from "./instagram.svg";
import "./styles.css";

function Footer() {
  return (
    <footer className="main-footer">
      App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
      <div className="footer-icons">
        <a href="https://www.youtube.com/c/DevSuperior" target="_new">
          <YoutubeIcon />
        </a>
        <a href="https://www.linkedin.com/school/devsuperior/" target="new">
          <LinkedInIcon />
        </a>
        <a href="https://www.instagram.com/devsuperior.ig/" target="new">
          <InstagramIcon />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
