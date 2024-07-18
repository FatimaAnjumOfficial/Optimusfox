import React, { useState } from "react";

const LoggedIn = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    {
      user === "user" && password === "password"
        ? setIsLoggedIn(true)
        : alert("Incorrect username or password");
    }
  };

  return (
    <div>
      {!isLoggedIn ? (
        <div>
          <div>
            User Name{" "}
            <input
              type="text"
              name="user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <br />
            Password{" "}
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
          </div>
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <div>
          <h1>Welcome, {user}!</h1>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default LoggedIn;
