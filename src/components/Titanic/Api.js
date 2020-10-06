import axios from "axios";

export async function findSampleData() {
  const response = await axios
    .get("https://api.jsonbin.io/b/5f7c73aa302a837e95759a22")
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    });
  return response;
}

export async function findExplanationData() {
  const response = await axios
    .get("https://api.jsonbin.io/b/5f7c73aa302a837e95759a22")
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    });
  return response;
}
