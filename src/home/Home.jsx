import Orders from "../components/orders/Orders";
import NavBar from "../navbar/NavBar";
import Header from "../pages/header/Header";
import "./home.css"
const Home = () => {
  return (
    <div className="homeApplication" >
      <NavBar />
      <div className="flex-column ">
      <Header />
      <Orders/>
      </div>
    </div>
  );
};

export default Home;
