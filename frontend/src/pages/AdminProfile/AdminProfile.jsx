import "./AdminProfile.css";
import { Link } from "react-router-dom";
import { getAdminProfile } from "../../slices/adminSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const AdminProfile = () => {
  const { admin } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdminProfile());
  }, [dispatch]);
  return (
    <div className="admin-profile">
      <h1>Olá {admin.name}!</h1>
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
