const axios = require("axios");

const computeSimilarity = async (text1, text2, model = "minilm") => {
  const response = await axios.post(
    "http://python-service/compute-embeddings",
    {
      text1,
      text2,
      model,
    }
  );

  return response.data;
};

module.exports = { computeSimilarity };