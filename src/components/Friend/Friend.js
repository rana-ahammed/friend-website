import React from 'react';
import { Link, useNavigate} from 'react-router-dom';


const Friend = (props) => {
  const {name, email, id} = props.friend;
  const navigate = useNavigate();
 

  const friendStyle = {
    border: "1px solid purple",
    margin: "20px",
    padding: "20px",
    borderRadius: "20px"
  }
  return (
    <div style={friendStyle}>
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
     <Link to={`friend/${id}`}>Show detail of {id}</Link>
      <button onClick={() => {navigate(`friend/${id}`)}}>Click Me</button>

    </div>
  );
};

export default Friend;