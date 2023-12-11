import { useState } from "react";
import "./Auth.css";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const admin = {
      name,
      email,
      password,
      confirmPassword,
    };
    console.log(admin);
  };
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
          <button type="submit" value="register">
            Cadastrar
          </button>
        </label>
      </form>
    </div>
  );
};

export default Register;
