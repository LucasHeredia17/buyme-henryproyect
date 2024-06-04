"use client";

import { IOrder } from "@/app/types";
import { getOrder } from "@/helpers/order.helper";
import OrderCard from "../order_card";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";

const OrdersCards: React.FC = () => {
  const [orders, setOrders] = useState<IOrder[]>([]);
  const { token } = useAuth();

  useEffect(() => {
    const fetchOrders = async () => {
      const orders = await getOrder(token!);
      setOrders(orders);
    };
    fetchOrders();
  }, [token]);

  return (
    <div className="grid 2xl:grid-cols-3 gap-5 justify-items-center my-10 mx-10 lg:grid-cols-3 lg:mx-20 md:grid-cols-2 md:mx-12 sm:grid-cols-1 sm:mx-10">
      {orders.length === 0 && (
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-3xl font-bold">No existen ordenes</p>
        </div>
      )}
      {orders.map((order) => (
        <OrderCard key={order.id} {...order} />
      ))}
    </div>
  );
};

export default OrdersCards;
