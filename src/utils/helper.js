export function validateCardData(data) {
  //   Fältet kortnummer måste innehålla 16 siffror.
  if (data.cardNumber.length !== 16) {
    return "Card number must consist of 16 digits";
  }

  // Utgångsdatum får inte vara ett datum som redan passerat.
  // if (data.validThru > Date.now()) {
  // }

  // Namnet får inte innehålla siffror.
  const letters = /^[A-Za-z]+$/;
  if (!data.name.match(letters)) {
    return "Name cannot include numbers";
  }
}
