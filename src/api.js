import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID aSMkNenbCOBAxd57XegQvUcMYf-7FSbIOvmI1JDspic",
    },
    params: {
      query: term,
    },
  });
  console.log(response.data.results);
  return response.data.results;
};

export default searchImages;
