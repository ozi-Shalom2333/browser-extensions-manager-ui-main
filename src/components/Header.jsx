
const Header = () => {
 

  return (
    <div className="
      w-full md:w-8/10 mx-auto flex justify-between items-center p-4 
      bg-custum-neutral-0
      rounded-2xl transition
    ">
      
      <div className="w-1/2">
        <img src="/assets/images/logo.svg" alt="logo" />
      </div>

      <button
        
        className="
          bg-custum-neutral-200
          hover:bg-custum-neutral-300 
          p-3 flex items-center justify-center rounded-xl transition
        "
      >
        <img src="/assets/images/icon-moon.svg" alt="Toggle theme" />
      </button>

    </div>
  );
};

export default Header;
