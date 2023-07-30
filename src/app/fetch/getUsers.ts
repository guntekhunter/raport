import axios from "axios";
import { Users } from "../../../typings";

export const getUsers = async () => {
  const res = await axios.get("/api/users");
  return res;
};
