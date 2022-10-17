import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Select } from "antd";
import "./selector.css";

const { Option } = Select;

//选择触发回调
const handleChange = (value: string) => {
  console.log(value);
};

const yearsData = [2018, 2019, 2020, 2021, 2022];
const monthData = Array.from({ length: 12 }, (x, index) => index);

function Selector() {
  return (
    <article className="selector">
      <ul>
        <li>
          <span>
            <Select
              defaultValue="2022 年"
              onChange={handleChange}
              bordered={false}
              size="small"
              optionLabelProp="label"
            >
              {yearsData.map((item) => {
                return (
                  <Option value={item} label={item + " 年"}>
                    {item}
                  </Option>
                );
              })}
            </Select>
          </span>
        </li>
        <li>
          <span>
            <Select
              defaultValue="1 月"
              onChange={handleChange}
              bordered={false}
              size="small"
              optionLabelProp="label"
            >
              {monthData.map((item) => {
                return (
                  <Option value={item} label={item + " 月"}>
                    {item as number}
                  </Option>
                );
              })}
            </Select>
          </span>
        </li>
        <li>
          <LeftOutlined />
        </li>
        <li>
          <RightOutlined />
        </li>
      </ul>
    </article>
  );
}

export default Selector;
