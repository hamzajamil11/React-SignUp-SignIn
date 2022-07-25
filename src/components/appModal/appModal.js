// @flow
import "./style.css";
import * as React from "react";
import Button from "../button";
/**
 * This component is an Modal box.
 * It accepts headerTitle, headerDescription,
 * body (component), and footer (component)
 * Can be used anywhere.
 */
const Header = props => {
  return (
    <div className="box-modal-header">
      <div className="close-modal">
        <i onClick={props.onClose} className="fa fa-times"></i>
      </div>
      <div className="title">{props.title}</div>
    </div>
  );
};

const AppModal = (props) => {
  return (
    <div className={`modals ${props.active ? "show-this-flex" : "hide-this"}`}>
      <div className={`box-modal ${props.className}`}>
        <div className={`content-modal`}>
          <div className="content">
            <Header
              title={props.headerTitle}
              description={props.headerDescription}
              onClose={props.onClose}
            />
            {props.body}
            <div className="box-modal-footer">
              {props.footer}
              {/* <div className="group-button">
                <Button
                  title="Cancel"
                  className="modal-close button button-line"
                  onClick={props.closeModal}
                />
                <Button
                  title="Save"
                  className="modal-close button button-blue"
                  onClick={props.saveModal}
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div onClick={props.onClose} className={`overlay ${props.overlayBackground}`} />
    </div>
  );
};

export default AppModal;
