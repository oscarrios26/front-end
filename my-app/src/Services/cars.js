import api from "./apiConfig";



const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Bearer ${localStorage.getItem("token") || null}`);
  });
};

export const getCars = async () => {
  try {
    const response = await api.get("/make/");
    return response.data;
  } catch (error) {
    throw error;
  }
};



export const getCar = async (id) => {
  try {
    const response = await api.get(`/make/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createCar = async (car) => {
  try {
    const response = await api.post("/make/", car);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateCar = async (id, car) => {
  try {
    const response = await api.put(`/make/${id}`, car);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCar = async id => {
  try {
    const response = await api.delete(`/make/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

////CAR MODELS

export const getModels = async () => {
  try {
    const response = await api.get("/models/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getModel = async (id) => {
  try {
    const response = await api.get(`/models/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// export const createModel = async (modelUpdate) => {
//   try {
//     const response = await api.post("/models/", modelUpdate);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
export const createModel = async (model) => {
  try {
    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token,
      },
    };
    const response = await api.post("/models/", model, headers);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const updateModel = async (id, model) => {
  try {
    const response = await api.put("/models/${id}", model);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteModel = async (id) => {
  try {
    const response = await api.delete(`/models/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};