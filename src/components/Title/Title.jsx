import PropsTypes from "prop-types";

export const Title = ({ content }) => {
  return <h1 className="text-2xl font-bold text-gray-900">{content}</h1>;
};

Title.propTypes = {
  content: PropsTypes.string.isRequired,
};
