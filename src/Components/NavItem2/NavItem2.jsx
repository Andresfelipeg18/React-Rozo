import { Link } from 'react-router-dom';

export const NavItem2 = ({ to, content }) => (
  <li>
    <Link to={to}>{content}</Link>
  </li>
);
