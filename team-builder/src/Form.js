import React, { useState } from "react";

export default function Form(props) {
  const { values, update, submit } = props;

  const onChange = (e) => {
    const { name, value } = e.target;
    update(name, value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    submit();
  };

  return (
    <form className="form container">
      <label>
        Name
        <input
          type="text"
          name="name"
          onChange={onChange}
          value={values.name}
          placeholder="Name"
        />
      </label>
      <label>
        E-Mail
        <input
          type="email"
          name="email"
          onChange={onChange}
          value={values.email}
          placeholder="example@test.com"
        />
      </label>
      <label>
        Role
        <select name="role" value={values.role} onChange={onChange}>
          <option value="">--Select Role--</option>
          <option value="Senior Dev">Senior Developer</option>
          <option value="Frontend">Front End Developer</option>
          <option value="Backend">Back End Developer</option>
          <option value="Designer">Designer</option>
        </select>
        <div>
          <button disabled={!values.name || !values.email || !values.role}>
            Submit
          </button>
        </div>
      </label>
    </form>
  );
}
