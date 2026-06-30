export function isValidEmail(email: string) {
  const emailRegex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email)
}

export function capitalizeWords(str: string) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}