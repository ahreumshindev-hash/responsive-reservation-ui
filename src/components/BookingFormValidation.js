export function validateDate(date) {
  return date.trim() !== "";
}

export function validateTime(time) {
  return time.trim() !== "";
}

export function validateGuests(guests) {
  const value = Number(guests);
  return Number.isInteger(value) && value >= 1 && value <= 10;
}

export function validateOccasion(occasion) {
  return occasion.trim() !== "";
}

export function validateFirstName(firstName) {
  return firstName.trim() !== "";
}

export function validateLastName(lastName) {
  return lastName.trim() !== "";
}

export function validatePhone(phone) {
  return phone.trim() !== "";
}

export function validateEmail(email) {
  if (email.trim() === "") return true; // optional
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isFormValid(formData) {
  return (
    validateDate(formData.date) &&
    validateTime(formData.time) &&
    validateGuests(formData.guests) &&
    validateOccasion(formData.occasion) &&
    validateFirstName(formData.firstName) &&
    validateLastName(formData.lastName) &&
    validatePhone(formData.phone) &&
    validateEmail(formData.email)
  );
}