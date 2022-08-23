import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={'/'}>
              <h2>Logo</h2>
            </Link>
          </li>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/newcel'}>New</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
