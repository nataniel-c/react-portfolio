const Footer = () => {
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        <a href="">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png"></img>
        </a>
        <a href="">
          <img src="https://image.pngaaa.com/822/1100822-middle.png"></img>
        </a>
        <a href="https://www.instagram.com/chaloloo2/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"></img>
        </a>
        <h4>&copy; {new Date().getFullYear()} - Tech Friends</h4>
        
      </div>
    </footer>
  );
};

export default Footer;
