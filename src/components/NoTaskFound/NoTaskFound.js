const NoTaskFound = (props) => {
  return (
    <div className="card mt-5 col-sm-6 center-container">
      <h5 className="mt-3 mb-3 center-container">{props.children}</h5>
    </div>
  );
};

export default NoTaskFound;
