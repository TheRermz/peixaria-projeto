import { api, reqConf } from "../utils/config";

// get user detais

const profile = async (data, token) => {
  const config = reqConf("GET", data, token);

  try {
    const res = await fetch(`${api}/admin/profile`, config)
      .then((r) => r.json())
      .catch((e) => e);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const adminService = {
  profile,
};

export default adminService;
