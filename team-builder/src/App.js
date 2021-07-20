import React, { useState } from "react";

import Form from "./Form";

const initialFormValues = {
  name: "",
  email: "",
  role: "",
};
function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [teamMember, setTeamMember] = useState([]);

  const updateForm = (inputName, inputValue) => {};

  const submitForm = () => {};

  return (
    <div className="container">
      <h3>Submit your information to be added to the roster.</h3>
      <Form values={formValues} update={updateForm} submit={submitForm} />
    </div>
  );
}

export default App;
