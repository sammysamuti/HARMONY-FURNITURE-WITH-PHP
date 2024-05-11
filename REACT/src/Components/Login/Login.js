import React, { useState, useEffect } from "react";
import "../Login/Login.css";
// import Admin from "../../Pages/Admin/Admin";

function Login() {
  const [error, setError] = useState("");
  useEffect(() => {
    const registerBtn = document.querySelector(".Register-btn");
    const loginBtn = document.querySelector(".Login-btn");
    const form = document.querySelector(".Form-box");

    const handleRegisterClick = () => {
      form.classList.add("change-form");
    };

    const handleLoginClick = () => {
      form.classList.remove("change-form");
    };

    registerBtn.addEventListener("click", handleRegisterClick);
    loginBtn.addEventListener("click", handleLoginClick);

    return () => {
      registerBtn.removeEventListener("click", handleRegisterClick);
      loginBtn.removeEventListener("click", handleLoginClick);
    };
  }, []);
  const [response, setResponse] = useState(null);
  const [insertResponse, set] = useState(null);
  const [Response, setRes] = useState(null);
  const handleSubmit = async (event, type, tableName) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      formData.append("type", type);

      const response = await fetch("http://localhost/PHP/emailValidate.php", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      setResponse(data);
      if (data && data.status === "success") {
        formData.append("tableName", tableName);

        const insertResponse = await fetch(
          "http://localhost/PHP/insertTOTables.php",
          {
            method: "POST",
            body: formData,
          }
        );
        const resData = await insertResponse.json();
        set(resData);
        console.log(resData);
      }
    } catch (error) {
      console.error("Error:", error);
      setResponse({
        status: "error",
        message: "An error occurred. Please try again later.",
      });
    }
  };
  const handlelogin = async (event, type) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.target);
      formData.append("type", type);

      const response = await fetch("http://localhost/PHP/login.php", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      setRes(data);
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
      setRes({
        status: "error",
        message: "An error occurred. Please try again later.",
      });
    }
  };

  return (
    <>
      <section className="login">
        <div className="Form-box">
          <form
            className="Login-form"
            onSubmit={(event) => handlelogin(event, "login")}
            method="post"
          >
            {/* Error Box */}
            {error && (
              <div className="error-box">
                {error}
                <button onClick={() => setError("")}>Close</button>
              </div>
            )}
            {Response && (
              <div
                className={
                  Response.status === "error" ? "error-box" : "success-box"
                }
              >
                <p>{Response.message}</p>
                <button onClick={() => setRes("")}>Close</button>
              </div>
            )}

            <h1>Login</h1>
            <div className="input-box">
              <input type="text" name="login-email" required />
              <label>Email</label>
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="input-box">
              <input type="password" name="login-password" required />
              <label>Password</label>
              <span className="view-password">
                <ion-icon name="eye-outline"></ion-icon>
              </span>
            </div>
            <div className="checkbox">
              <span>
                <input type="checkbox" id="login-checkbox" />
                <label htmlFor="login-checkbox">Remember Me</label>
              </span>
              <h5>Forget password ?</h5>
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
            <h5 className="Register-btn">Don't have an account? Register</h5>
          </form>

          <form
            className="Register-form"
            onSubmit={(event) => handleSubmit(event, "register", "Users")}
            method="post"
          >
            {/* Error Box */}
            {error && (
              <div className="error-box">
                {error}
                <button onClick={() => setError("")}>Close</button>
              </div>
            )}

            {response &&
              (response.status === "error" ? (
                <div className={"error-box"}>
                  <p>{response.message}</p>
                  <button onClick={() => setResponse("")}>Close</button>
                </div>
              ) : insertResponse && insertResponse.status === "error" ? (
                <div className={"error-box"}>
                  <p>{insertResponse.message}</p>
                  <button onClick={() => setResponse("")}>Close</button>
                </div>
              ) : (
                <div className={"success-box"}>
                  <p>{response.message}</p>
                  <button onClick={() => setResponse("")}>Close</button>
                </div>
              ))}

            <h1>Register</h1>
            <div className="input-box">
              <input type="text" name="username" required />
              <label>Username</label>
              <ion-icon name="person-outline"></ion-icon>
            </div>
            <div className="input-box">
              <input type="text" name="email" required />
              <label>Email</label>
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="input-box">
              <input type="password" name="password" required />
              <label>Password</label>
              <span className="view-password">
                <ion-icon name="eye-outline"></ion-icon>
              </span>
            </div>

            <div className="checkbox">
              <input type="checkbox" id="register-checkbox" required />
              <label htmlFor="register-checkbox">
                I agree to the terms & conditions
              </label>
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
            <h5 className="Login-btn">Already registered? Login</h5>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
