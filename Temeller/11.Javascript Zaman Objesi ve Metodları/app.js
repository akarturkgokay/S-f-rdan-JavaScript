let value;


const now = new Date(); // Şuanki xamanı almamızı sağlar..

const date1 = new Date("1998-07-19T09:15:00");
const date2 = new Date("July 19 1998");
const date3 = new Date("19/07/1998");

value = date1;
value = date1.getMonth();
value = date1.getDate();
value = date1.getDay();
value = date1.getHours();


date1.setMonth(7);
date1.setDate(15);
date1.setFullYear(1997);
date1.setHours(0);
date1.setMinutes(15);
value = date1;


console.log(value);