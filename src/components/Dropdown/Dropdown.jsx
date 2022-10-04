import { useState } from "react";
import { DropdownArrow } from "../Icons/DropdownArrow/DropdownArrow";
import PropTypes from "prop-types";

export const Dropdown = ({ title, items, dropdownValue, setDropdownValue }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-5">
      <button
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title} {items.find(({ value }) => value === dropdownValue).name}{" "}
        <DropdownArrow />
      </button>

      <div
        id="dropdown"
        className={`${
          !isOpen && "hidden"
        } z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700`}
      >
        <ul
          className="py-1 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefault"
        >
          {items.map(({ id, name, value }) => (
            <li
              onClick={() => {
                setDropdownValue(value);
                setIsOpen(false);
              }}
              key={id}
            >
              <span
                className={`${
                  value === dropdownValue ? "text-blue-500" : "text-gray-500"
                } block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white`}
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
  dropdownValue: PropTypes.string.isRequired,
  setDropdownValue: PropTypes.func.isRequired,
};
