import Header from "./components/Header";
import Card from "./components/ui/Card";
import Tabs from "./components/ui/Tabs";
import { useExtensions } from "./context/ExtensionsContext";

const App = () => {
  const { filteredExtensions, activeTab, setActiveTab } = useExtensions();

  const tabState = ["All", "Active", "Inactive"];

  return (
    <div className="w-screen min-h-screen bg-custum-neutral-200 px-4 py-6 flex flex-col gap-4">
      <Header />

      <div className="w-full lg:w-8/10 mx-auto flex flex-col sm:flex-row sm:justify-between items-center my-6">
        <h2 className="text-4xl font-bold text-custum-neutral-900 py-4">Extensions List</h2>

        <Tabs 
          tabs={tabState}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:w-8/10 mx-auto ">
        {filteredExtensions.map(ext => (
          <Card key={ext.id} extension={ext} />
        ))}
      </div>
    </div>
  );
};

export default App;
