export const baseURL =
  process.env.NODE_ENV === "production"
    ? process.env.BackendURL
    : "http://localhost:3000";
