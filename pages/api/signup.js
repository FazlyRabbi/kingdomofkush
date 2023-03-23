import { API_URL, API_TOKEN } from "@/config/index";

export default async (req, res) => {
  try {
    if (req.method === "POST") {
      const { username, email, password } = JSON.parse(req.body);

      const strapiRes = await fetch(
        `https://kingdomofkush-backend.onrender.com/api/auth/local/register`,
        {
          method: "POST",
          body: JSON.stringify({
            username: username,
            email: email,
            password: password,
          }),
        }
      );

      const data = await strapiRes.json();

      res.send(data);
    }
  } catch (error) {
    res.send(error);
  }
};
