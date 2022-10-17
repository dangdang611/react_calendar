import Header from "./Header/Header";
import Selector from "./Selector/Selector";
import WeekName from "./WeekName/WeekName";
import DateArea from "./DateArea/DateArea";
import { Fragment } from "react";

function MainContent() {
  return (
    <Fragment>
      <Header />
      <Selector />
      <WeekName />
      <DateArea />
    </Fragment>
  );
}

export default MainContent;
