const Header = ({ heading = '', subHeading = '', text = '' }) => {
  return (
    <div className="header">
      <p className="header__preheading">Hello, my name is</p>
      <h1 className="header__heading">{ heading}</h1>
      <h2 className="header__subheading">{ subHeading }</h2>
      <p className="header__text">{ text }</p>
      <div className="header__cta">
        <button>CTA</button>
      </div>
    </div>
  )
}

export default Header;