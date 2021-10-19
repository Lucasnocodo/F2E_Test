// Data
const userIds = ["U01", "U02", "U03"];
const orderIds = ["T01", "T02", "T03", "T04"];
const userOrders = [
  { userId: "U01", orderIds: ["T01", "T02"] },
  { userId: "U02", orderIds: [] },
  { userId: "U03", orderIds: ["T03"] },
];
const userData = { U01: "Tom", U02: "Sam", U03: "John" };
const orderData = {
  T01: { name: "A", price: 499 },
  T02: { name: "B", price: 599 },
  T03: { name: "C", price: 699 },
  T04: { name: "D", price: 799 },
};

// Functions
const findOrder = (id) => {
  const [target] = userOrders.filter((e) => e.userId === id);
  return target;
};

const findUserName = (id) => {
  const target = userData[id];
  return target;
};

const getOrders = (arr) => {
  let targetOrders = [];
  arr.forEach((e) => targetOrders.push({ id: e, ...orderData[e] }));
  return targetOrders;
};

// Main Function
const DataTransformer = (inputUserId) => {
  const { userId, orderIds } = findOrder(inputUserId);
  return {
    user: {
      id: userId,
      name: findUserName(userId),
    },
    orders: getOrders(orderIds),
  };
};

// Input user Id to get the result
console.log(DataTransformer("U03"));
