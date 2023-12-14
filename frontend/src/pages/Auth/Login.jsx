import { useEffect, useState } from "react";
import "./Auth.css";
import { useSelector, useDispatch } from "react-redux";
import { loginAdmin, reset } from "../../slices/authSlice";
import Message from "../../components/Message";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const handleLogin = (e) => {
    e.preventDefault();

    const admin = {
      email,
      password,
    };
    dispatch(loginAdmin(admin));
  };

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);
  return (
    <div className="login">
      <h1>Login de Administrador</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            value={password || ""}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor="btn-submit">
          {error && <Message msg={error} type="error" />}
          {!loading && (
            <button type="submit" value="register">
              Cadastrar
            </button>
          )}
          {loading && (
            <button type="submit" value="register" disabled>
              Aguarde
            </button>
          )}
        </label>
      </form>
    </div>
  );
};

export default Login;
