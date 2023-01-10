import { SHA256 } from 'crypto-js';

export function hashPassword(password) {
	return SHA256(password).toString();
}
