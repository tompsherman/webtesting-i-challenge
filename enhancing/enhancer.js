module.exports = {
  success,
  fail,
  repair,
  get,
};

item = {name: "", durability: "", enhancement: ""}

function success(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100};
}

function get(item) {
  return { ...item };
}
