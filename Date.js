const currentdate = new Date();

const date = currentdate.getDate();

const day = currentdate.getDay();

const year = currentdate.getFullYear();

const month = currentdate.getMonth();

const time = currentdate.getTime();

const seconds= currentdate.getSeconds();

const hours= currentdate.getHours();

const minutes= currentdate.getMinutes();


console.log(`Current Date: ${day}-${month}-${year}`);

console.log(`Current time: ${time}-${minutes}-${hours}-${seconds}`);

