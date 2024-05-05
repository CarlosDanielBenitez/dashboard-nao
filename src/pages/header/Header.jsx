import "./header.css";
const Header = () => {
  return (
    <div className="headerGlobal" >
    <div className="headerSection">
        <p className="totalRevenue">Total Revenue</p>
      <div>
        <div className="estadisticasGlobal">
          <h1>$ 45,365.00</h1>
          <div className="estadisticasChild">
            <img src="/public/header/decrement.svg" alt="" />
            <p  className="totalDecrement">$1,294</p>
          </div>

          <div className="estadisticasChild">
            <img src="/public/header/increment.svg" alt="" />
            <p className="totalIncrement">$1,294</p>
          </div>
        </div>
      </div>
    </div>
    <div className="searchContainer">
        <div>
            <input type="text" placeholder="Search" />
            <img src="/public/header/search.svg" alt="" />
        </div>
    </div>
    <div className="headerIconNotifications">

   <img src="../../../public/header/messenger.svg" alt="" />
   <img src="../../../public/header/notification.svg" alt="" />
   <img src="../../../public/header/user.svg" alt="" />
    </div>

    </div>
  );
};

export default Header;
