import React from "react";
import { LoginForm } from "../Form";
import "./style.css"


function Modal() {
  return (
    <>
      <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginLabel">Welcome</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body m-2">
              <LoginForm/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal;