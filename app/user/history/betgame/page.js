import TransactionTable from "@/components/UserLayouts/transactionTable";
import CommonHeader from "@/components/commonHeader/page";
import React from "react";

const page = () => {
  return (
    <div className=" transition-all duration-300 relative w-[100%] max-w-[100%] min-w-[82%]">
      <div className="h-screen overflow-y-scroll bg-[#e8e8e8] px-10">
        <CommonHeader />
        <div>
          <TransactionTable />
        </div>
      </div>
    </div>
  );
};

export default page;
