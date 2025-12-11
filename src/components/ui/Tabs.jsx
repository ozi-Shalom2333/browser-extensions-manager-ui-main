import { useExtensions } from "../../context/ExtensionsContext";

const Tabs = ({ tabs }) => {
  const { activeTab, setActiveTab } = useExtensions();

  return (
    <div className="flex gap-4">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`
            px-4  py-2 rounded-3xl font-medium  transition
            ${activeTab === tab 
              ? "bg-custum-red-700 text-white" 
              : "bg-custum-neutral-0 text-custum-neutral-900 hover:bg-custum-neutral-300"}
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
