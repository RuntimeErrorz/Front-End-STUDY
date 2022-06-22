import request from "./request.js";

export const getUsers = (params) => {
  return request({
    url: "/users",
    params,
  });
};

export const changeUserState = (uid, type) => {
  return request({
    url: `users/${uid}/state/${type}`,
    method: "put",
  });
};

export const addUser = (data) => {
  return request({
    url: "users",
    method: "post",
    data,
  });
};

export const editUser = (data) => {
  return request({
    url: `users/${data.id}`,
    method: "put",
    data,
  });
};

export const deleteUser = (data) => {
  return request({
    url: `users/${data.id}`,
    method: "delete",
    data,
  });
};

export const getGoods = (params) => {
  return request({
    url: "/goods",
    params,
  });
};

export const deleteGood = (data) => {
  return request({
    url: `goods/${data.goods_id}`,
    method: "delete",
    data,
  });
};

export const addGood = (data) => {
  return request({
    url: "goods",
    method: "post",
    data,
  });
}

export const editGood = (data) => {
  return request({
    url: `goods/${data.id}`,
    method: "put",
    data,
  });
};