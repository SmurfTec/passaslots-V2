const jwt = require('jsonwebtoken');
export function generateJWT(payload: any, secretKey: string, expiresIn: any) {
  const token = jwt.sign(payload, secretKey, { expiresIn });
  return token;
}
