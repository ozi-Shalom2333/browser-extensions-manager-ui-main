import ToggleSwitch from "./ToggleSwitch";
import { useExtensions } from "../../context/ExtensionsContext";

const Card = ({ extension }) => {
  const { toggleExtension, removeExtension } = useExtensions();
  const { id, logo, name, description, isActive } = extension;

  return (
    <div className=" bg-custum-neutral-0 dark:bg-custum-neutral-700 rounded-2xl p-4 flex flex-col gap-6">
      <div className="flex gap-4">
        <div className="w-2/5 lg:w-1/5 md:w-4/5 h-fit overflow-hidden">
          <img src={logo} alt={name} className="object-cover w-full h-full" />
        </div>

        <div>
          <h2 className="font-extrabold text-custum-neutral-900 dark:text-custum-neutral-0 text-2xl lg:text-xl">{name}</h2>
          <p className="text-custum-neutral-600 dark:text-custum-neutral-300 text-lg  md:text-base">{description}</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={() => removeExtension(id)}
          className="border border-custum-neutral-600 dark:hover:border-custum-red-700 px-4 lg:px-2 py-2 lg:py-1 rounded-full text-sm lg:text-[12px] font-medium text-custum-neutral-900 dark:text-custum-neutral-300 transition-all duration-300 hover:bg-custum-red-700 dark:hover:bg-custum-neutral-600 hover:text-custum-neutral-0 hover:border-transparent"
        >
          Remove
        </button>

        <ToggleSwitch 
          isOn={isActive}
          onToggle={() => toggleExtension(id)}
        />
      </div>
    </div>
  );
};

export default Card;
