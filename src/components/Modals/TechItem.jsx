import React from "react";
import { connect } from "react-redux";
import { deleteTech } from "../../actions/techActions";

const TechItem = ({ tech: { id, lastName, firstName }, deleteTech }) => {
  const onDelete = () => {
    deleteTech(id);
  };

  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteTech: (id) => dispatch(deleteTech(id)),
});

export default connect(null, mapDispatchToProps)(TechItem);
