import "./navBar.css";
const NavBar = () => {
  return (
    <header className="aside mr-4">
      <img className="aside__off" src="/public/navbar/off.svg" alt="" />
      <nav className="aside__nav">
        <ul className="aside__nav__container">
          <li className="container__box">
            <img src="/public/navbar/dashboard.svg" alt="" />
            <h1>Dashboard</h1>
          </li>

          <li className="container__box">
            <img src="/public/navbar/order.svg" alt="" />
            <p>Order</p>
          </li>

          <li className="container__box">
            <img src="/public/navbar/products.svg" alt="" />
            <p>Products</p>
          </li>

          <li className="container__box">
            <img src="/public/navbar/shopping.svg" alt="" />
            <p>Shipping</p>
          </li>

          <li className="container__box">
            <img src="/public/navbar/payments.svg" alt="" />
            <p>Payments</p>
          </li>

          <li className="container__box">
            <img src="/public/navbar/settings.svg" alt="" />
            <p>Settings</p>
          </li>
        </ul>
      </nav>
      <div className="sopportSection">
        <p className="customerSupport">Customer Support</p>
        <textarea
          placeholder="Ask you query , place
requests or important
issues. Our support 
team will contact 24/7 
to you. "
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <div className="iconSupport">
          <img src="/public/navbar/support.svg" alt="" />
          <p>Connect Now</p>
        </div>
        <p className="policy">Terms & Services Privacy Policy</p>
      </div>
    </header>
  );
};

export default NavBar;
