import { DELETE_USER } from "./type";

export const actDeleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  };
};
