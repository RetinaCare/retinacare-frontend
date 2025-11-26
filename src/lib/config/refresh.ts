import api from "./api";

export async function refreshAccessToken() {
  const refreshToken = localStorage.getItem("refreshToken");
  const userId = localStorage.getItem("userId");
  if (!refreshToken || !userId)
    throw new Error("No refresh token or userId found");

  const response = await api.post("/auth/refresh", { refreshToken, userId });
  const { accessToken, refreshToken: newRefreshToken } =
    response.data.data.auth;

  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", newRefreshToken);

  return accessToken;
}
