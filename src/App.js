import React, { useState } from "react";

function App() {

  const useForm = ({ initialValues, validation, onSubmit }) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({ account: "", password: "" });

    const handleChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      if (name === "rememberMe") {
        setValues((pre) => ({ ...pre, rememberMe: !pre.rememberMe }));
      } else {
        setValues((pre) => ({ ...pre, [name]: value }));
      }
    };

    const handleSubmit = () => {
      const errorMessages = validation(values);
      const {account, password} = errorMessages
      const isErrorsEmpty = () => {
        return Object.keys(errorMessages).length === 0;
      };
      if (isErrorsEmpty()) {
        setErrors({});
        onSubmit(values);
      } else {
        if (account) {
          setErrors((pre) => ({ ...pre, account }));
        } else {
          setErrors((pre) => ({ ...pre, account: '' }))
        }
        if (password) {
          setErrors((pre) => ({ ...pre, password }));
        } else {
          setErrors((pre) => ({ ...pre, password: '' }))
        }
      }
    };
    return {
      handleChange,
      handleSubmit,
      values,
      errors,
    };
  };

  const { handleChange, handleSubmit, values, errors } = useForm({
    initialValues: { account: "", password: "", rememberMe: false },
    validation: (values) => {
      const errors = {};
      if (!values.account) {
        errors.account = "請輸入帳號";
      } else if (!values.password) {
        errors.password = "請輸入密碼";
      }
      return errors;
    },
    onSubmit: (values) => console.table(values),
  });
  return (
    <>
      <input
        name="account"
        onChange={handleChange}
        value={values.account}
        placeholder="Account"
      />
      {errors.account && <div>{errors.account}</div>}

      <input
        name="password"
        onChange={handleChange}
        value={values.password}
        placeholder="password"
      />
      {errors.password && <div>{errors.password}</div>}
      <label>
        <input
          type="checkbox"
          name="rememberMe"
          onChange={handleChange}
          checked={values.rememberMe}
        />
        Remember Me
      </label>
      <button onClick={handleSubmit}>Login</button>
    </>
  );
}

export default App;