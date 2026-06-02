const axios = require("axios");

const computeSimilarity = async (text1, text2, model = "minilm") => {
  const response = await axios.post(
    "https://ai-text-similarity-python.onrender.com/compute-embeddings",
    {
      text1,
      text2,
      model,
    }
  );

  return response.data;
};

module.exports = { computeSimilarity };
