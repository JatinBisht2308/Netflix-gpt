export const validateUserCreds = (email, password) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!emailRegex.test(email)) return "Email is not valid";
  if (!passwordRegex.test(password)) return "Password is not valid";
  else return null;
};
