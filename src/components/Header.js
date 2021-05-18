import '../styles/Header.css';

const Header = () => (
  <header className="header">
    <div className="header__wrapper">
      <div className="header__left">
        <a className="logo" href="/">Bookstore CMS</a>

        <nav className="menu">
          <ul className="menu__items">
            <li className="menu__item active">Home</li>
            <li className="menu__item">Categories</li>
          </ul>
        </nav>
      </div>

      <div className="user header__right">
        <img className="user__img" src="/user.svg" alt="User" />
      </div>
    </div>
  </header>
);

export default Header;
