import { useEffect, useState } from "react";
import "./Auth.css";
import { regAdmin, reset } from "../../slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const onSubmit = (e) => {
    e.preventDefault();

    const admin = {
      name,
      email,
      password,
      confirmPassword,
    };
    console.log(admin);
    dispatch(regAdmin(admin));
  };

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  return (
    <div className="reg">
      <h1>Cadastro de novo administrador</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome do administrador"
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
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
        <label htmlFor="confirmPassword">
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirme a Senha"
            value={confirmPassword || ""}
            onChange={(e) => setConfirmPassword(e.target.value)}
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

export default Register;
