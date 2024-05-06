const Inbox = () => {
  return (
    <div className="rounded-2xl	 shadow  w-fit">
      <div className=" flex w-80 justify-between pt-4 px-4 ">
        <div className="flex-col">
          <p className="text-lg font-bold">Inbox</p>
          <p className="text-xs ">
            Group: <span className="font-bold">Support</span>
          </p>
        </div>
        <p className="text-sm text-sky-500 font-semibold">View details</p>
      </div>

      <div className="mt-5 gap-y-3 flex flex-col">
        <div className="flex justify-between pr-5 pl-5">
          <p className="font-semibold">Waiting for order#12345</p>
          <p className="text-gray-400 ">4:39</p>
        </div>

        <div className="flex justify-between border-t-2 pr-5 pl-5 pb-5">
          <p className="font-semibold">Customer support id#22234</p>
          <p className="text-gray-400 ">11:07</p>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
