import React from "react";

const FeedbackSections = () => {
  const datas = [
    {
      id: 1,
      name: "Bob Johnson",
      message: "Interesting insights, keep up the good work",
      time: "5 min",
    },
    {
      id: 2,
      name: "John Doe",
      message: "Enjoyed the presentation, clear and concise",
      time: "10 min",
    },
    {
      id: 3,
      name: "Jane Smith",
      message: "Great job, looking forward to the next update",
      time: "20 min",
    },
  ];
  return (
    <div className="my-6">
      <div className="">
        <p className="text-[18px] font-bold">Feedback</p>
      </div>
      <div className="my-[10px] bg-[#EDEFFC] p-[15px] rounded-xl">
        {datas.map((data) => (
          <div className="flex flex-row justify-between items-center gap-3 my-5">
            <div className="w-[35px] h-[35px] rounded-full bg-slate-500 "></div>
            <div className="flex-1">
              <p className="text-[16px] font-bold">{data.name}</p>
              <p className="text-[12px] leading-3 text-balance">
                {data.message}
              </p>
            </div>
            <div>
              <p>{data.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackSections;
