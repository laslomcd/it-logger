import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getTechs } from "../../actions/techActions";
import TechItem from "./TechItem";

const ShowTechsModal = ({ technicians: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>System Technicians</h4>
        <ul className="collection">
          {!loading && techs === null ? (
            <p className="center">No Techs to Show...</p>
          ) : (
            techs.map((tech) => <TechItem tech={tech} key={tech.id} />)
          )}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  technicians: state.tech,
});

const mapDispatchToProps = (dispatch) => ({
  getTechs: () => dispatch(getTechs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowTechsModal);
