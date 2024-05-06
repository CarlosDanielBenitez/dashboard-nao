import NavBar from "../navbar/NavBar";
import Activity from "../pages/actitity/Activity";
import Header from "../pages/header/Header";
import Inbox from "../pages/inbox/Inbox";
import OrdersComponent from "../pages/orders/Orders";
import "./home.css";
const Home = () => {
  return (
    <div className="homeApplication">
      <NavBar />
      <div className="flex-column ">
        <Header />
        <OrdersComponent />
        <Inbox/>
        <Activity/>
      </div>
    </div>
  );
};

export default Home;
