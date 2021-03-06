import React, { useRef } from "react";
import { connect } from "react-redux";
import { searchLogs } from "../../actions/logActions";

const SearchBar = ({ searchLogs }) => {
  const text = useRef("");

  const onChange = (e) => {
    searchLogs(text.current.value);
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <form style={{ marginBottom: "30px" }} className="blue">
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search Logs..."
              ref={text}
              onChange={onChange}
              required
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

const mapDispatchToProps = (dispatch) => ({
  searchLogs: (text) => dispatch(searchLogs(text)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
