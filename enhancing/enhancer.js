module.exports = {
  success,
  fail,
  repair,
  get,
};

item = {name: "", durability: 0, enhancement: 0}

function success(name, durability, enhancement) {
  if(enhancement <20){
    return enhancement+1
  } else if (enhancement === 20){
    return enhancement
  }
  return {name, durability, enhancement};
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
