import { IOrder, IProduct } from "@/app/types";
import { ReactElement } from "react";

const OrderCard: React.FC<IOrder> = ({
  id,
  status,
  date,
  products,
}): ReactElement => {
  const getStatus = (status: string) => {
    switch (status) {
      case "approved":
        return "Aprobado";
      case "pending":
        return "Pendiente";
      case "rejected":
        return "Rechazado";
      default:
        return status;
    }
  };

  date = new Date(date);
  const formatDate = `${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}`;

  return (
    <div className="flex flex-col bg-mainColorLight p-8 rounded w-11/12 h-auto">
      <h1 className="text-textColor text-3xl font-bold underline mb-4 hover:text-textColorBlack">
        Id de la Orden: {id}
      </h1>
      <p className="text-textColor text-xl font-medium mb-1">
        Estado Actual: {getStatus(status)}
      </p>
      <p className="text-textColor text-xl font-medium mb-1">
        Fecha: {formatDate}
      </p>
      <h2 className="text-textColor text-xl font-medium mb-1">
        Productos Comprados:
      </h2>
      <div className="grid grid-cols-2 gap-2">
        {products.map((product: IProduct) => (
          <div
            key={product.id}
            className="flex flex-col text-center bg-mainColor p-2 hover:bg-secondaryColorStrong rounded"
          >
            <p className="text-textColor cursor-default">{product.name}</p>
            <p className="text-textColor cursor-default">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderCard;
