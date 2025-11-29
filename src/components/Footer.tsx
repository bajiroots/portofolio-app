import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Email from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <h1>FROM CONCEPT TO <b>CREATION !</b></h1>
        <h1>LET'S MAKE IT <b>HAPPEN !</b></h1>
      </div>
      <div>
        <a href="https://github.com/bajiroots" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        <a href="https://www.linkedin.com/in/dicky-armansyah-214377193/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
        <a href="mailto:dickyarmansyah007@gmail.com" target="_blank" rel="noreferrer"><Email /></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noreferrer">Yuji Sato</a> with 💜</p>
    </footer>
  );
}

export default Footer;