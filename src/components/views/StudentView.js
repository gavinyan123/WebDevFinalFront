const StudentView = (props) => {
    const { student } = props;
    return (
      <div>
        <h1>{student.firstname + " " + student.lastname}</h1>
        <br/>
        <h3>{student.campus.name}</h3>
        <br/>
        <h2>{student.email}</h2>
        <br/>
        <h4>{student.gpa}</h4>
        <br/>
      </div>
      
    );
  
  };
  
  export default StudentView;