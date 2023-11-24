const validateEmail = (input: string): boolean => {
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.match(validRegex)) return true;
  else return false;
};

const isNumericString = (input: string): boolean => {
  return /^\d+$/.test(input);
};

const isCardExpireDate = (input: string): boolean => {
  return (
    input.length === 5 &&
    isNumericString(input.replace("/", "")) &&
    input[2] === "/"
  );
};

export { validateEmail, isNumericString, isCardExpireDate };
