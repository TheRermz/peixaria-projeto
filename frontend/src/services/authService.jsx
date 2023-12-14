import { api, reqConf } from "../utils/config";

// register an admin
const regAdmin = async (admin) => {
  const config = reqConf("POST", admin);

  try {
    const res = await fetch(`${api}/admin/register`, config)
      .then((r) => r.json())
      .catch((e) => e);

    if (res) {
      localStorage.setItem("admin", JSON.stringify(res));
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

// login an admin
const loginAdmin = async (admin) => {
  const config = reqConf("POST", admin);

  try {
    const res = await fetch(`${api}/admin/login`, config)
      .then((r) => r.json())
      .catch((e) => e);

    if (res) {
      localStorage.setItem("admin", JSON.stringify(res));
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

// logout an admin
const logoutAdmin = () => {
  localStorage.removeItem("admin");
};

const authService = {
  regAdmin,
  loginAdmin,
  logoutAdmin,
};

export default authService;
