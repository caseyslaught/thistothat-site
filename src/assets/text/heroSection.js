export const title = "Convert stuff from one format to another";

export const subtitle = `
ThisToThat is an API for converting things like currencies and commodity codes. \
The service is free to use and you can do whatever you want with the data. \
Grab an API key to get started!
`;

export const code = `
// Lookup Harmonized System code description

const baseUrl = "https://data.thistothat.io"
const queryParams = "?api_key="+API_KEY

fetch(baseUrl + "/commodities/hs/01" + query)
  .then(res => res.json())
  .then(data => console.log(data))

/*
  {
    "code": "01",
    "description": "Animals; live",
    "level": "chapter"
  }
*/
`;
