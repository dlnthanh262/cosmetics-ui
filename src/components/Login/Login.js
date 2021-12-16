import React from "react";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const Login = ({ setToken }) => {
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [hasError, setHasError] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser({
      username,
      password,
    });
    if (response.login) {
      setTokenSession(response.token);
      setToken(response.token);
      setHasError(false);
    } else {
      setHasError(true);
    }
  };

  function setTokenSession(userToken) {
    sessionStorage.setItem("token", JSON.stringify(userToken));
  }

  return (
    <div className="container p-5">
      <div className="row justify-content-md-center align-items-center">
        <h3>Đăng nhập</h3>
      </div>

      <form onSubmit={handleSubmit} className="login-wrapper">
        <label>
          <p className="text-center mt-4">Tài khoản</p>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            className="text-center"
          />
        </label>
        <label>
          <p className="text-center">Mật khẩu</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="text-center"
          />
        </label>
        {hasError ? (
          <p className="text-center mt-4 text-danger">
            Sai tài khoản hoặc mật khẩu!
          </p>
        ) : null}
        <div className="mt-2">
          <button type="submit">Đăng nhập</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
