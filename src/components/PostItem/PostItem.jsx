import PropTypes from "prop-types";

export const PostItem = ({ title, text }) => {
  return (
    <div className="p-5 border border-gray-500 rounded-xl bg-slate-100 shadow-lg">
      <h2 className="text-2xl">{title}</h2>
      <span className="text-gray-500">{text}</span>
    </div>
  );
};

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
