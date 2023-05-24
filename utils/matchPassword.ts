const bcrypt = require('bcrypt');
export async function comparePasswords(enteredPassword: string, storedPassword: string) {
  const isMatch = await bcrypt.compare(enteredPassword, storedPassword);
  return isMatch;
}
