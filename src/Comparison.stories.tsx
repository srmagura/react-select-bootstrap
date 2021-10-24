import { Story } from "@storybook/react";
import Select from "react-select";

export default {
  title: "React Select",
};

const options = [
  { value: 0, label: "Purple" },
  { value: 1, label: "Sea green" },
];

export const Comparison: Story = () => (
  <div style={{ width: 400 }}>
    <div className="mb-3">
      <Select options={options} />
    </div>
    <select className="form-select">
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  </div>
);
