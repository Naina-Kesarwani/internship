const BASE_URL = "https://riveyra.onrender.com/api/services";

// Get all services
export const getServices = async () => {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch services");
  }

  return response.json();
};

// Create service
export const createService = async (serviceData) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(serviceData),
  });

  if (!response.ok) {
    throw new Error("Failed to create service");
  }

  return response.json();
};

export const removeService = async (id) => {
  const response = await fetch(`http://riveyra.onrender.com/api/services/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete service");
  }

  return response.json();
};

export const updateService = async (id, serviceData) => {
  const response = await fetch(
    `http://riveyra.onrender.com/api/services/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serviceData),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update service");
  }

  return response.json();
};