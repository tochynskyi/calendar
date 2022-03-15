import dayjs from "dayjs";
import React, { FC, useEffect } from "react";
import ButtonCreate from "./components/ButtonCreate/ButtonCreate";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { changeMonth } from "./store/reducers/calendarSlice";

const App: FC = () => {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(changeMonth(dayjs().month()));
  }, []);

  return (
    <>
      <Navbar />
		<ButtonCreate/>
      <Sidebar />
    </>
  );
};

export default App;
