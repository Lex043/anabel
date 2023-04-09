import disneyLogo from "../assets/images/33dadd63-762d-47d7-a0da-812bd20a8d60 1.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-5 px-6">
      <figure className="w-[200px] h-20">
        <img src={disneyLogo} alt="Logo" />
      </figure>

      <section className="flex items-center gap-10">
        <div className="text-white flex gap-10 text-xs">
          <a href="#">Home</a>
          <a href="#">Episodes</a>
          <a href="#">Cast</a>
          <a href="#">Plot</a>
          <a href="#">Disney Club</a>
        </div>
        <button className="text-white bg-gradient-to-br from-[#4523B0] to-[#6E8EFF] rounded-full text-xs px-3 py-2">
          Create Account
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
