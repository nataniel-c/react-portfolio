// Import React Router Link component for internal hyperlinks
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation'

const Header = () => {
  return (
    <header>
      <div className="top">
        {/* Use Link component to create a link that returns to the homepage on click */}
        <Link to="/">
          <h1 className="myname" style={{ fontSize: '3rem' }}>
            Nataniel Carrasquillo
          </h1>
        </Link>
      </div>
      <div className="page">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
