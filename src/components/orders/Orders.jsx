import "./orders.css";
const Orders = ({ title, num, image }) => {
  return (
    <div className="bg-red-300 flex p-2 container">
      <div>
        <h1>{title}</h1>
        <img src={image} alt={title} />
      </div>
      <div className="flex">
        <h2 className="mt-10">{num}</h2>
      </div>
    </div>
  );
};

export default Orders;
