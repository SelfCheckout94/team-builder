import React, { useState } from "react";

import Form from "./Form";
import TeamMember from "./TeamMember";

const initialFormValues = {
  name: "",
  email: "",
  role: "",
};
function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [teamMembers, setTeamMembers] = useState([]);

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    if (!teamMembers.name || !teamMembers.email || !teamMembers.role) {
      return;
    }
  };
  return (
    <div className="container">
      <h3>Submit your information to be added to the roster.</h3>
      <Form values={formValues} update={updateForm} submit={submitForm} />
      {teamMembers.map((member) => {
        return <TeamMember key="member.id" details={member} />;
      })}
    </div>
  );
}

export default App;
