import PropTypes from "prop-types";

export default function Welcome({ name, age }) {
  return (
    <>
      <p>
        Welcome {name} your age
        {age}
      </p>
    </>
  );
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};
