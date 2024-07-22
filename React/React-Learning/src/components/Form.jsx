import React from "react";

const Form = () => {
  const validate = (e) => {
    e.preventDefault();
    console.log("Form submitted!");

    const name = f.na.value;
    const email = f.em.value;
    const emailValid = document.getElementById(2);
    const dob = f.dob.value;
    const role = f.role.value;
    const password = f.pswd.value;
    const confirmPassword = f.cpswd.value;

    try {
      if (
        !(
          name === " " &&
          email === " " &&
          dob === " " &&
          role === " " &&
          password === " " &&
          confirmPassword === " "
        ) &&
        password === confirmPassword
      ) {
        if (!emailValid.validity.valid) {
          alert("Invalid Email");
        } else {
          alert(
            "Name : ${name}, Email : ${email}, DOB : {dob},  Role : {role}"
          );
        }
      } else {
        alert("Fill these blanks");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <form name="f" onSubmit="validate()">
        <fieldset>
          <legend>Registration</legend>
          Name: <input type="text" id="1" name="na" required />
          <br />
          Email: <input type="email" id="2" name="em" required />
          <br />
          DOB: <input type="date" id="3" name="dob" required />
          <br />
          Role:
          <select id="$" name="Role" required>
            <option value="">Select a role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
          <br />
          Password: <input type="password" id="5" name="pswd" required />
          <br />
          Confirm Password:
          <input type="password" id="6" name="cpswd" required />
          <br />
          <button type="submit">Submit</button>
          <br />
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
