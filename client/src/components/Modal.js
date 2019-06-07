import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  return ReactDOM.createPortal(
    <div onClick={props.onDismiss}>
      <div
        className="modal fade"
        id="modelId"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          onClick={e => {
            e.stopPropagation();
          }}
          className="modal-dialog modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{props.title}</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">{props.content}</div>
            </div>
            <div className="modal-footer">{props.action}</div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
