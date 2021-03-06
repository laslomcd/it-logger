import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addLogs } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";
import { getTechs } from "../../actions/techActions";

const AddLogModal = ({ addLogs, technicians: { techs, loading } }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  useEffect(() => {
    getTechs();
  }, []);

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date(),
      };
      addLogs(newLog);
      M.toast({ html: "Your log has been added" });
      // Clear fields
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              {!loading && techs === null ? (
                <option value="" disabled>
                  Select Technician
                </option>
              ) : (
                techs.map((tech) => (
                  <option
                    value={tech.firstName + " " + tech.lastName}
                    key={tech.id}
                  >
                    {tech.firstName + " " + tech.lastName}
                  </option>
                ))
              )}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: "75%",
  height: "75%",
};

const mapStateToProps = (state) => ({
  technicians: state.tech,
});

const mapDispatchToProps = (dispatch) => ({
  addLogs: (log) => dispatch(addLogs(log)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddLogModal);
