const API_URL = "http://localhost:5000/api/services";

export const getPublishedServices = async () => {
  const response = await fetch(`${API_URL}/published`);

  if (!response.ok) {
    throw new Error("Failed to fetch services");
  }

  return response.json();
};