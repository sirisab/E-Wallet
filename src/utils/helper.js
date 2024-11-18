export function validateCardData(data) {
  let removeSpacesInput = data.cardNumber.replace(/ /g, '');
  //   Fältets kortnummer måste innehålla 16 siffror.
  if (removeSpacesInput.length !== 16) {
    return `Card number must consist of 16 digits`;
  }

  // Utgångsdatum får inte vara ett datum som redan passerat.

  // Get the month and year from today
  const thisDate = new Date();

  // Create a date object from input values
  let validThruDate = new Date(
    `20${data.validThruYear}`,
    data.validThruMonth,
    0
  );

  if (validThruDate < thisDate) {
    return 'The card is expired';
  }

  // Namnet får inte innehålla siffror.
  const letters = /^[A-Öa-ö ]+$/;
  if (!data.cardHolder.match(letters)) {
    return 'Name cannot include numbers';
  }
}
