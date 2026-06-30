const API_URL = "https://riveyra.onrender.com/api/inquiries";

export const getInquiries = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch inquiries");
  }

  return response.json();
};


export const deleteInquiry = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete inquiry");
  }

  return response.json();
};