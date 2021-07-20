import React, { useState } from "react";

export default function Form(props) {
  const { values, update, submit } = props;

  const onChange = (e) => {};

  const onSubmit = (e) => {};

  return (
    <form className="form container">
      <label>
        Name
        <input />
      </label>
      <label>
        E-Mail
        <input />
      </label>
      <label>
        Role
        <select name="role">
          <option value="">--Select Role--</option>
          <option value="Senior Dev">Senior Developer</option>
          <option value="Frontend">Front End Developer</option>
          <option value="Backend">Back End Developer</option>
          <option value="Designer">Designer</option>
        </select>
        <div>
          <button>Submit</button>
        </div>
      </label>
    </form>
  );
}
