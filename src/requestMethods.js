import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTYwYjU0OWY3MDc3NjAzZWI1OTU2NiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjUxNjM5MywiZXhwIjoxNjcyNzc1NTkzfQ.yjgABbrtsaZfMLCjh1tDHlrDgwMmaiCpCFqjrWkhr-8";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
