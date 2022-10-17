import "./Header.css";
function Header() {
  return (
    <header>
      <div className="leftContent">
        <h1>
          <span>14</span>:<span>13</span>:<span>11</span>
        </h1>
        <span className="date">2020年8月14日 六月廿五</span>
      </div>
      <div className="rightContent"></div>
    </header>
  );
}

export default Header;
