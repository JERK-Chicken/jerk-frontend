import PropTypes from "prop-types";

const TitleCase = (props) => {
  let key = props.content;
  return key
  .slice(0, 1).toUpperCase() + key.slice(1)
  .replace("_", " ");
};

export default TitleCase;

TitleCase.propTypes = {
  content: PropTypes.string.isRequired,
};