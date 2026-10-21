const Hero = () => {
  return (
    <div>
      {" "}
      <div
        className="hero min-h-[60vh] lg:min-h-screen"
        style={{
          backgroundImage: "url(bg-sbds.webp)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-3xl font-bold">Welcome !</h1>
            <p className="mb-5">Swapnabaaz Development Society</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
