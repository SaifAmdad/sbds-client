const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center gap-3 h-[30vh]">
      <h1 className="text-[#183c2c] font-semibold text-xl">Loading</h1>
      <span className="loading loading-dots loading-lg text-[#183c2c]"></span>
    </div>
  );
};

export default LoadingPage;
