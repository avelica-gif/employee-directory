import React from "react";

const styles = {
  form: {
    marginRight: "50%",
  },
  input: {
    width: "200px",
  },
};

function Form(props) {
  return (
    <div style={styles.form}>
      <input
        style={styles.input}
        type="email"
        className="form-control"
        id="exampleFormControlInput"
        placeholder="Search"
        onChange={props.onSearch}
      ></input>
    </div>
  );
}

export default Form;
