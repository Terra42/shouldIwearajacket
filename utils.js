export const getAnswer = (result) => {
  let answer;

  if (result > 30) {
    answer = "Definitely not. Bring a fan instead.";
  }
  else if (result > 20) {
    answer = "No need, it's warm enough.";
  }  
  else if (result > 10) {
    answer = "Yes, that would be a good idea."
  } else {
    answer = "Absolutely! A heavy one in fact.";
  }
  
  return answer;
};
