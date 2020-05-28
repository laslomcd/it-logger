import React, { useEffect } from "react";
import { connect } from "react-redux";
import LogItem from "./LogItem";
import Preloader from "../Preloader/Preloader";
import { getLogs } from "../../actions/logActions";

const Logs = ({ logs: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No Logs to Show...</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  logs: state.log,
});

const mapDispatchToProps = (dispatch) => ({
  getLogs: () => dispatch(getLogs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logs);
