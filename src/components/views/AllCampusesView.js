import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { deleteCampus } from "../../store/actions/actionCreators";

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return(
      <div>
        <p>There are no campuses.</p>
        <Link to="/newcampus">
          <button>Add New Campus</button>
        </Link>
    </div>);
  }

  return (
    <div>
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <p>{campus.description}</p>
          <button onClick={() => deleteCampus(campus.id)}>Delete Campus</button>
        </div>
      ))}
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;