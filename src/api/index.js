export const BASE_URL = "https://calm-lowlands-92047.herokuapp.com/api/";

export const BASE_URL_FULLSTACK = "https://fitnesstrac-kr.herokuapp.com/api/";

export async function registerUser(username, password) {
  try {
    const res = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const {
      data: { token },
    } = await res.json();

    localStorage.setItem("token", JSON.stringify(token));
  } catch (error) {
    throw error;
  }
}

export async function loginUser(username, password) {
  try {
    const res = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const {
      data: { token },
    } = await res.json();

    localStorage.setItem("token", JSON.stringify(token));
  } catch (error) {
    throw error;
  }
}

export async function getMe() {
  const token = localStorage.getItem("token");

  if (!token) {
    return;
  }

  try {
    const res = await fetch(`${BASE_URL}/users/login`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const { data } = await res.json();

    return data;
  } catch (error) {
    throw error;
  }
}
