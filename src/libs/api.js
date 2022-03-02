import axios from 'axios';
const baseURI = 'http://localhost:5000';

export const TestText = 'test';

export const CooksList = async () => {
  return await axios.get(`${baseURI}/cooks`)
    .then(({ data }) => data)
    .catch(() => alert('요리사 정보를 가져오지 못했습니다.'));
};

export const DishesList = async () => {
  return await axios.get(`${baseURI}/dishes`)
    .then(({ data }) => data)
    .catch(() => alert('메뉴 정보를 가져오지 못했습니다.'));
};

export const TabletsList = async () => {
  return await axios.get(`${baseURI}/tablets`)
    .then(({ data }) => data)
    .catch(() => alert('타블렛 정보를 가져오지 못했습니다.'));
};

export const orderRequest = async (saveObject) => {
  return await axios.post(`${baseURI}/orders`, saveObject);
};

export const getOrderList = async () => {
  return await axios.get(`${baseURI}/orders`)
    .then(({ data }) => data)
    .catch(() => alert('주문 정보를 가져오지 못했습니다.'));
};

export const currentOrderList = async () => {
  return await axios.get(`${baseURI}/orders?current=true`)
    .then(({ data }) => data)
    .catch(() => alert('현재 주문 정보를 가져오지 못했습니다.'));
};

export const orderChange = async (orderId, state) => {
  return await axios.put(`${baseURI}/orders/${orderId}/state`, state);
};

export const orderDelete = async (orderId) => {
  return await axios.delete(`${baseURI}/orders/${orderId}`);
};