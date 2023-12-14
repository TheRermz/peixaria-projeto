import "./AdminProfile.css";
import { Link } from "react-router-dom";

const AdminProfile = () => {
  return (
    <div className="admin-profile">
      <h1>Olá Admin</h1>
      <h2>Escolha uma opção</h2>
      <ul className="list-admin">
        <li>
          <Link to={`/profile/edit`}>Editar Perfil</Link>
        </li>
        <li>
          <Link to={`/fish/create`}>Adicionar Peixe</Link>
        </li>
        <li>
          <Link to={`/fish/edit`}>Editar Peixe</Link>
        </li>
        <li>
          <Link to={`/fish/remove`}>Remover Peixe</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminProfile;
