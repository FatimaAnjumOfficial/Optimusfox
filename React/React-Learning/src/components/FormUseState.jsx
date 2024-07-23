import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validate = (e) => {
    e.preventDefault();
    console.log("Form submitted!");

    try {
      if (
        name.trim() && //trim() eliminates any spaces, tabs, or other whitespace characters from the start and end of the string.
        email.trim() &&
        dob.trim() &&
        role.trim() &&
        password.trim() &&
        confirmPassword.trim() &&
        password === confirmPassword
      ) {
        if (!/\S+@\S+\.\S+/.test(email)) {
          alert("Invalid Email");
        } else {
          alert(`Name: ${name}, Email: ${email}, DOB: ${dob}, Role: ${role}`);
        }
      } else {
        alert("Fill all the blanks and ensure passwords match");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <form name="f" onSubmit={validate}>
        <fieldset>
          <legend>Registration</legend>
          Name:
          <input
            type="text"
            id="1"
            name="na"
            required
            value={name}
            onChange={(e) => setName(e.target.value)} //e.target.value gets the current value of the input field.
          />
          <br />
          Email:
          <input
            type="text"
            id="2"
            name="em"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          DOB:
          <input
            type="date"
            id="3"
            name="dob"
            required
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <br />
          Role:
          <select
            id="$"
            name="role"
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select a role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
          <br />
          Password:
          <input
            type="password"
            id="5"
            name="pswd"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          Confirm Password:
          <input
            type="password"
            id="6"
            name="cpswd"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <br />
          <button type="submit">Submit</button>
          <br />
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
