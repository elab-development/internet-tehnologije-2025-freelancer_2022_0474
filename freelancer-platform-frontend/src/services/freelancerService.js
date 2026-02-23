import api from "../api/api";

export const getFreelancers = () => api.get("/freelancers");

export const createFreelancer = (data) =>
  api.post("/freelancers", data);

export const getFreelancerById = (id) =>
  api.get(`/freelancers/${id}`);