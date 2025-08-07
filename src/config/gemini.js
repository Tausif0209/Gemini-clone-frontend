const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
// console.log("API Key:", apiKey);

export const askGemini = async (question) => {
  const payload = {
    contents: [
      {
        parts: [
          {
            text: question
          }
        ]
      }
    ]
  };

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    console.log(data.candidates[0].content.parts[0].text);
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Error talking to Gemini:", error);
  }
};

// Call it for testing

