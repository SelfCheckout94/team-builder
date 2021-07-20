import React from "react";

export default function TeamMember(props) {
  const { details } = props;
  if (!details) {
    return <h4>Fetching member data...</h4>;
  }
  return (
    <div>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
    </div>
  );
}
