const verifyPin = async (pinString, userId) => {
  //URL with query parameters
  const url = `https://75j6v3-8080.preview.csb.app/api/v1/verify-pin?pin=${pinString}&user_id=${userId}`;

  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    return { success: data.success };
  } else {
    throw new Error("Failed to verify PIN");
  }
};

export default verifyPin;
