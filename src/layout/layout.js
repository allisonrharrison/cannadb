import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/flower">Flower</Link>
          </li>
          <li>
            <Link to="/extracts">Extracts</Link>
          </li>
          <li>
            <Link to="/edibles">Edibles</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/seeds">Seeds</Link>
          </li>
          <li>
            <Link to="/brands">Brands</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;