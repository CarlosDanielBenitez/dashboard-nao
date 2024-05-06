const Activity = () => {
  return (
    <div className="rounded-2xl	 shadow  w-fit mt-5">
      <div className=" flex w-80 justify-between pt-4 px-4 ">
        <div className="flex-col">
          <p className="text-lg font-bold">Recent Activity</p>
        </div>
        <p className="text-sm text-sky-500 font-semibold">View all</p>
      </div>

      <div className="mt-5 flex-col flex w-80 justify-between pt-4 px-4  ">
        <div className="flex justify-between">
          <img src="/public/activity/blue.svg" alt="" />
          <p className="font-semibold  pr-8">Confirm order update</p>
          <p className="text-white  bg-amber-400 border-solid border-2  rounded-lg pr-1 pl-1">URGENT</p>
        </div>

        <div className="flex justify-between border-t-2  mt-4  pt-4">
          <img src="/public/activity/red.svg" alt="" />

          <p className="font-semibold  pr-7">Finish shipping update</p>
          <p className="text-white bg-amber-400 border-solid border-2  rounded-lg pr-1 pl-1 ">URGENT</p>
        </div>

        <div className="flex justify-between border-t-2 mt-4  pt-4">
          <img src="/public/activity/gray.svg" alt="" />

          <p className="font-semibold  pr-24">Create new order</p>
          <p className="text-white bg-emerald-400 border-solid border-2  rounded-lg pr-1 pl-1">NEW</p>
        </div>

        <div className="flex justify-between border-t-2  mt-4  pt-4 mb-5">
          <img src="/public/activity/blue.svg" alt="" />
          <p className="font-semibold  pr-5">Update payment report</p>
          <p className="text-slate-400 bg-slate-300 border-solid border-2  rounded-lg pr-1 pl-1 ">DEFAULT</p>
        </div>
      </div>
    </div>
  );
};

export default Activity;
