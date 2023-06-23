export const DEFAULT_API_URL = 'http://localhost:8000'; // Replace with your API URL

export async function fetchAPI(endpoint, options = {}) {
    const url = `${DEFAULT_API_URL}${endpoint}`;
    const response = await fetch(url, options);
    const data = await response.json();
  
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message || 'Something went wrong');
    }
  }
  