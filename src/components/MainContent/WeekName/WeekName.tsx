import "./WeekName.css";

const weeksName = ["一", "二", "三", "四", "五", "六", "日"];

function WeekName() {
  return (
    <ul className="weekName">
      {weeksName.map((item) => {
        return (
          <li>
            <span>{item}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default WeekName;
