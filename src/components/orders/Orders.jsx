import "./orders.css";
const Orders = ({ title, number, image }) => {
  return (
    <div className=" p-2 pt-3 container">
      <div >
        <h1>{title}</h1>
      </div>
      <div className="flex justify-between">
        <img src={image} alt={title} />
        <h2 className=" mr-1 text-end text-4xl">{number}</h2>
      </div>
    </div>
  );
};

export default Orders;
