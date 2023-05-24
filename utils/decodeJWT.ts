const jwt = require('jsonwebtoken');
export function decodeJWT(token: any) {
  const data = jwt.decode(token);
  return data;
}
