const Footer = () => {
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        <a href="https://www.linkedin.com/in/nataniel-carrasquillo-medina-a7793b155/">
          <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"></img>
        </a>
        <a href="https://github.com/nataniel-c">
          <img className="logo" src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png"></img>
        </a>
        <a href="https://www.instagram.com/chaloloo2/">
          <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"></img>
        </a>
        <h4>&copy; {new Date().getFullYear()} - Nataniel Carrasquillo</h4>
        
      </div>
    </footer>
  );
};

export default Footer;
