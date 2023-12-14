import "./Auth.css";
const Login = () => {
  return (
    <div className="login">
      <h1>Login de Administrador</h1>
      <form>
        <label htmlFor="email">
          <input type="email" name="email" id="email" placeholder="Email" />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Senha"
          />
        </label>
        <label htmlFor="btn-submit">
          <button type="submit" value="login">
            Entrar no Sistema
          </button>
        </label>
      </form>
    </div>
  );
};

export default Login;
