import { useState } from "react";
import { DropdownArrow } from "../Icons/DropdownArrow/DropdownArrow";
import PropTypes from "prop-types";

export const Dropdown = ({ title, items, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(items[0].value);

  return (
    <div className="my-5 relative">
      <button
        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title} {items.find(({ value }) => value === dropdownValue).name}{" "}
        <DropdownArrow />
      </button>

      <div
        className={`${
          isOpen ? "absolute top-12 left-0" : "hidden"
        } z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow`}
      >
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
          {items.map(({ id, name, value }) => (
            <li
              onClick={() => {
                setDropdownValue(value);
                setIsOpen(false);
                onSelect(value);
              }}
              key={id}
            >
              <span
                className={`${
                  value === dropdownValue ? "text-blue-500" : "text-gray-500"
                } block py-2 px-4 hover:bg-gray-100`}
              >
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
};
