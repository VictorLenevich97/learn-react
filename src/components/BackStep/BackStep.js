import { Title } from "../Title/Title";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const BackStep = ({ content }) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className="flex items-center mb-5">
      <span className="pr-2">{"<-"}</span>
      <Title content={content} />
    </button>
  );
};

BackStep.propTypes = {
  content: PropTypes.string.isRequired,
};
