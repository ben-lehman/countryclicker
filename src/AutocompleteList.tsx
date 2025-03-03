import { useState } from "react";
import "./AutocompleteList.css";

function AutocompleteList({ options }: { options: string[] }) {
  const [inputValue, setInputValue] = useState<string>("");
  const [filteredOptions, setFilteredOptions] =
    useState<Array<string>>(options);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  };

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    setFilteredOptions([]);
  };

  return (
    <div>
      <input value={inputValue} onChange={handleInputChange} />
      <div className="optionsList">
        <ul>
          {filteredOptions.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AutocompleteList;
