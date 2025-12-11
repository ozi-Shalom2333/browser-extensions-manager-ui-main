import { createContext, useContext, useState, useEffect } from "react";
import data from "../../data.json";

const ExtensionsContext = createContext();

export const ExtensionsProvider = ({ children }) => {
  const [extensions, setExtensions] = useState([]);
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    setExtensions(data);
  }, []);

  const toggleExtension = (id) => {
    setExtensions(prev =>
      prev.map(ext =>
        ext.id === id ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  const removeExtension = (id) => {
    setExtensions(prev => prev.filter(ext => ext.id !== id));
  };

  const filteredExtensions = extensions.filter(ext => {
    if (activeTab === "All") return true;
    if (activeTab === "Active") return ext.isActive === true;
    if (activeTab === "Inactive") return ext.isActive === false;
  });

  return (
    <ExtensionsContext.Provider value={{
      extensions,
      filteredExtensions,
      activeTab,
      setActiveTab,
      toggleExtension,
      removeExtension
    }}>
      {children}
    </ExtensionsContext.Provider>
  );
};

export const useExtensions = () => useContext(ExtensionsContext);
