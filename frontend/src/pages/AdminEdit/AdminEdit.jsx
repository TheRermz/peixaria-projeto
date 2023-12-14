import { useState } from "react";
import "./AdminEdit.css";
const AdminEdit = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEdit = (e) => {
    e.preventDefault();
    const admin = {
      name,
      password,
      confirmPassword,
    };
    console.log(admin);
  };
  return (
    <div className="admin-edit">
      <h1>Edite dados de seu perfil!</h1>
      <form onSubmit={handleEdit}>
        <label htmlFor="name">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label htmlFor="password">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor="confirm-password">
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <label htmlFor="btn-submit">
          <button type="submit" value="edit">
            Editar
          </button>
        </label>
      </form>
    </div>
  );
};

export default AdminEdit;
