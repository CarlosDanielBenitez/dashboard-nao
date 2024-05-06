import Orders from "../../components/orders/Orders";

const OrdersComponent = () => {
  return (
    <div className="justify-between flex mt-4  mb-4 ">
      <Orders
        title="Shipped orders"
        number="67"
        image="/public/orders/order-car.svg"
      />
      <Orders
        title="Pending orders"
        number="09"
        image="/public/orders/order-cart.svg"
      />
      <Orders
        title="New orders"
        number="35"
        image="/public/orders/order-portfolio.svg"
      />
    </div>
  );
};

export default OrdersComponent;
