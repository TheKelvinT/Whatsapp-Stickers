async function getPin(phoneNumber, userId) {
  // Check if phone number is valid
  if (phoneNumber.length < 10 || phoneNumber.length > 13) {
    return {
      success: false,
      error: "Invalid Phone Number",
    };
  }

  //URL with query parameters
  const url = `https://75j6v3-8080.preview.csb.app/api/v1/trigger-pin?msisdn=${phoneNumber}&user_id=${userId}`;

  //Trigger 3 tries before throw an error
  let tries = 3;

  while (tries > 0) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        return { success: true, data: data };
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      tries--;
      if (tries === 0) {
        return { success: false, error: error };
      }
    }
  }
}

export default getPin;
