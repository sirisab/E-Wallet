export function validateCardData(data) {
  let remSpacesInput = data.cardNumber.replace(/ /g, "");

  //   Fältet kortnummer måste innehålla 16 siffror.
  if (remSpacesInput.length !== 16) {
    return "Card number must consist of 16 digits";
  }

  // Utgångsdatum får inte vara ett datum som redan passerat.
  // if (data.validThru > Date.now()) {
  // }

  // Namnet får inte innehålla siffror.
  const letters = /^[A-Öa-ö ]+$/;
  if (!data.name.match(letters)) {
    return "Name cannot include numbers";
  }
}
