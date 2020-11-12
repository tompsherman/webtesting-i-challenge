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

function fail(name, durability, enhancement) {
  if(enhancement < 15){
    return durability-5
  } else if(enhancement >15){
    return durability-10
  } else if(enhancement>16){
    return durability -10, enhancement -1
  }
  return { name, durability, enhancement };
}

function repair(item) {
  return { ...item, durability: 100};
}

function get(item) {
  return { ...item };
}
