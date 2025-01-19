"use client";
import Overview from "@/app/components/dashboard/Overview";
import CreateOrderForm from "@/app/components/Order/CreateOrderForm";
import OrderEmptyState from "@/app/components/Order/OrderEmptyState";
import { useState } from "react";

const Page = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [showCreateOrder, setShowCreateOrder] = useState(false);
  return (
    <div className="mx-auto max-w-[1400px] p-6">
      <Overview />
      {isEmpty && !showCreateOrder ? (
        <OrderEmptyState setShowCreateOrder={setShowCreateOrder} />
      ) : (
        <CreateOrderForm setShowCreateOrder={setShowCreateOrder} />
      )}
    </div>
  );
};

export default Page;
