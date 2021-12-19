import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
  const {students, deleteStudent, editStudent} = props;

  if (!students.length) {
    return (
    <div>
      <p>There are no students.</p>
      <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/campuses">
          <button>All Campuses</button>
        </Link>
        <Link to="/newcampus">
          <button>Add New Student</button>
        </Link>
    </div>
    );
  }
  
  return (
    <div>
      {students.map((student) => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
          <Link to={`/student/${student.id}`}>
            <h1>{name}</h1>
          </Link>
          <button onClick={() => deleteStudent(student.id)}>Delete</button>
          <Link to="/editStudent">
            <button onClick={() => editStudent(student.id)}>Edit</button>
          </Link>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/campuses">
            <button>All Campuses</button>
          </Link>
          <Link to="/newcampus">
            <button>Add New Student</button>
          </Link>
          </div>
        );
      }
      )}
    </div>
  );
};


export default AllStudentsView;