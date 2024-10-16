export function validateCardData(data) {
  let errors = [];

  //   Fältet kortnummer måste innehålla 16 siffror.
  if (data.cardNumber.length < 16) {
    errors.push("Card number must consist of 16 digits");
  }

  // Utgångsdatum får inte vara ett datum som redan passerat.
  // if (data.validThru > Date.now()) {
  // }

  // Namnet får inte innehålla siffror.
  if (data.match("/d+/")) {
    errors.push("Name cannot include numbers");
  }
}
