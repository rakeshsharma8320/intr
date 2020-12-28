import React, { useState, useEffect, useRef } from "react";
import "./App.scss";

function App() {
  const firstName = useRef(null);
  const lastName = useRef(null);
  const submit = useRef(null);

  useEffect(() => {
    firstName.current.focus();
  }, []);

  const firstNameHandler = (e) => {
    if (e.key === "Enter") lastName.current.focus();
  };
  const lastNameHandler = (e) => {
    if (e.key === "Enter") submit.current.focus();
  };
  const submitHandler = (e) => {
    if (e.key === "Enter") alert("form submitted");
  };

  return (
    <div className="App">
      <input
        ref={firstName}
        onKeyDown={firstNameHandler}
        placeholder="enter first name"
      />
      <input
        ref={lastName}
        onKeyDown={lastNameHandler}
        placeholder="enter last name"
      />
      <input
        ref={submit}
        onKeyDown={submitHandler}
        type="submit"
        value="submit"
      />
    </div>
  );
}

export default App;
