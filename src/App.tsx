import React, { FC, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { getMonth } from './utils/getMonth'


const App: FC = () => {
	const [currentMonth, setCurrentMonth] = useState(getMonth())

	console.log(currentMonth);
  return (
    <>
      <Navbar />
      <Sidebar />
    </>
  );
};

export default App;
