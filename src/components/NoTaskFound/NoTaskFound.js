const NoTaskFound = (props) => {
  return (
    <div className="card mt-5 col-sm-6" style={{ margin: "auto" }}>
      <h5 style={{ margin: "auto" }} className="mt-3 mb-3">
        {props.children}
      </h5>
    </div>
  );
};

export default NoTaskFound;
