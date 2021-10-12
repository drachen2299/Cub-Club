import { useState } from "react";
import { loginUser } from "../../services";

const LoginForm = (props) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const userInfo = {
        username,
        password
      };
      const user = await loginUser(userInfo);
      props.setUser(user);
    } catch (e) {
      console.error(e.message)
    }
  }

  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <label htmlFor="password">Password:</label>
        <input id="password" type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">Log in</button>
      </form>
  );
};

export default LoginForm;
