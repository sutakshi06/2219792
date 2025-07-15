export const loggingMiddleware = async (url, options = {}) => {
  const startTime = performance.now();
  const response = await fetch(url, options);
  const endTime = performance.now();

  const responseData = await response.clone().json();

  console.log("Request URL:", url);
  console.log("Method:", options.method || "GET");
  console.log("Request Body:", options.body || "N/A");
  console.log("Response:", responseData);
  console.log("Response Time:", `${(endTime - startTime).toFixed(2)} ms`);

  return response;
};
