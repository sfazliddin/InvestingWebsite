import { useState } from "react";
import Select from "react-select";
// import "bootstrap/dist/css/bootstrap.css";

const Support = () => {
  const options = [
    { value: "random", label: "Random" },
    { value: "math", label: "Math" },
    { value: "trivia", label: "Trivia" },
    { value: "date", label: "Date" },
    { value: "year", label: "Year" },
  ];
  const customStyles = {
    option: (defaultStyles, state) => ({
      ...defaultStyles,
      color: state.isSelected ? "#212529" : "#fff",
      backgroundColor: state.isSelected ? "#a0a0a0" : "#212529",
    }),

    control: (defaultStyles) => ({
      ...defaultStyles,
      backgroundColor: "#212529",
      padding: "10px",
      border: "none",
      boxShadow: "none",
    }),
    singleValue: (defaultStyles) => ({ ...defaultStyles, color: "#fff" }),
  };
  const [selected, setSelected] = useState(null);

  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };
  return (
    <>
      <div>support page</div>
      <div className="container">
        <div className="mt-5 m-auto w-50">
          <Select
            options={options}
            onChange={handleChange}
            autoFocus={true}
            styles={customStyles}
          />

          <div className="mt-4">
            {selected && <>You've selected {selected.label}</>}
          </div>
        </div>
      </div>
    </>
  );
};
export default Support;
