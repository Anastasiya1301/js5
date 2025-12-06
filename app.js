//common.js

const helloMessage = "Hello!";
const byeMessage = "Good bye";
const hello = () => helloMessage;
const bye = () => byeMessage;
// експортування common.js
module.export = {
  hello,
  bye,
};

