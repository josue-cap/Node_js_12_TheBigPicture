const rocks = who => {
  console.log(who + ' rocks');
};
//TODO: en este Timeout el tercer argumento que es 'Pluralsight' pasa a la funcion rocks como parametro who
setTimeout(rocks, 2 * 1000, 'Pluralsight');
