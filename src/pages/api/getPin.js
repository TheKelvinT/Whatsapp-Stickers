async function getPin(phoneNumber, userId) {
  // Check if phone number is between 8 and 12 characters long
  if (phoneNumber.length < 10 || phoneNumber.length > 12) {
    return {
      success: false,
      error: "Phone number must be atleast 10 to 12 characters long",
    };
  }

  //URL with query parameters
  const url = `https://75j6v3-8080.preview.csb.app/api/v1/trigger-pin?msisdn=${phoneNumber}&user_id=${userId}`;

  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return { success: true, data: data };
    } else {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    return { success: false, error: error };
  }
}

export default getPin;
