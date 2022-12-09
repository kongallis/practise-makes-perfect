export class DiffieHellman {
  constructor(p, g) {
    if (!isPrime(p) || !isPrime(g)) throw new Error("the constructor arguments are not prime")

    this.p = p
    this.g = g
  }

  getPublicKey(privateKey) {
    if (privateKey <= 1 || privateKey >= this.p) throw new Error("Private key does not fulfill its requirements")

    return Math.pow(this.g, privateKey) % this.p
  }

  getSecret(theirPublicKey, myPrivateKey) {
    return Math.pow(theirPublicKey, myPrivateKey) % this.p
  }
}

const isPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
}