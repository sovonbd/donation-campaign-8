const Banner = () => {
  return (
    <div className="hero h-[80vh] lg:h-[60vh]" style={{ backgroundImage: "url(https://i.imgur.com/I7BUFGM.png)", backgroundBlendMode: "lighten", backgroundRepeat: "cover" }}>
      <div className="hero-overlay bg-white bg-opacity-80 bg-blend-overlay"></div>
    </div>
  );
};

export default Banner;
