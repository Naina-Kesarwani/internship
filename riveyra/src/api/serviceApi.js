const API_URL = "https://riveyra.onrender.com/api/inquiries";

export const getPublishedServices = async () => {
  const response = await fetch(`${API_URL}/published`);

  if (!response.ok) {
    throw new Error("Failed to fetch services");
  }

  return response.json();
};