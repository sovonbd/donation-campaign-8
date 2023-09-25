const Searchbox = () => {
  return (
    <div className="px-6 py-4 lg:py-28">
      <h1 className="text-[#0B0B0B] font-bold text-3xl lg:text-5xl text-center">I Grow By Helping People In Need</h1>
      <div className="flex justify-center items-center my-10">
        <input
          className="bg-white p-3 border border-[#DEDEDE] rounded-lg rounded-r-none w-[380px] focus:outline-[#FF444A] focus:border-none "
          type="search"
          name=""
          id=""
          placeholder="Search here..."
        />
        <button className="bg-[#FF444A] border-none px-7 rounded-l-none rounded-lg text-white font-semibold btn hover:bg-[#FF444A] focus:bg-[#FF444A]">Search</button>
      </div>
    </div>
  );
};

export default Searchbox;
