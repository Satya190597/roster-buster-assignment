const NoTaskFound = (props) => {
  return (
    <div className="card mt-5 col-sm-6" style={{ margin: "auto" }}>
      <h5 style={{ margin: "auto" }}>{props.children}</h5>
    </div>
  );
};

export default NoTaskFound;
