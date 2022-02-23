import React, { FC } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

const App: FC = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
    </>
  );
};

export default App;
