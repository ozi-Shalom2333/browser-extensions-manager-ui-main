import useTheme from "../context/useTheme";
import moon from "../../public/assets/images/icon-moon.svg"
import sun from "../../public/assets/images/icon-sun.svg"


const Header = () => {
   const { isDark, toggle } = useTheme();

  return (
    <div className="
      w-full md:w-8/10 mx-auto flex justify-between items-center p-4 
      bg-custum-neutral-0 dark:bg-custum-neutral-900
      rounded-2xl transition
    ">
      
      <div className="w-1/2">
        <img src="/assets/images/logo.svg" alt="logo" />
      </div>

      <button
        onClick={toggle}
        className="
          bg-custum-neutral-200 dark:bg-custum-neutral-700 
          hover:bg-custum-neutral-300 dark:hover:bg-custum-neutral-600
          p-3 flex items-center justify-center rounded-xl transition
        "
      >
        <img src={isDark ? sun : moon} alt="logo" />
      </button>

    </div>
  );
};

export default Header;
