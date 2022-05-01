import "./InvalidInput.css";

const InvalidInput = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.onClose}></div>
      <div className="invalid-input">
        <div className="invalid-input-header">Invalid Input</div>
        <div className="invalid-input-body">{props.errorMessage}</div>
        <div className="invalid-input-footer">
          <button type="button" onClick={props.onClose}>
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvalidInput;
