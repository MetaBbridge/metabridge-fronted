import { Button } from "@/components/ui/Button";
import Image from "next/image";
import React from "react";

const OrderEmptyState = ({
  setShowCreateOrder,
}: {
  setShowCreateOrder: (value: boolean) => void;
}) => {
  return (
    <div className="mb-8 rounded-[24px] bg-[#F2F2F3] p-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[24px] font-semibold">Your Orders</h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 overflow-hidden rounded-[16px] bg-white py-10">
        <Image
          src="/assets/order_empty_state.png"
          width={120}
          height={120}
          alt="empty_order"
        />
        <p className="text-base font-normal text-[#575760]">No records found</p>
        <Button
          onClick={() => setShowCreateOrder(true)}
          variant="primary"
          className="flex w-[153px] items-center gap-1 leading-[12px]"
        >
          <span>+</span> Create New Order
        </Button>
      </div>
    </div>
  );
};

export default OrderEmptyState;
