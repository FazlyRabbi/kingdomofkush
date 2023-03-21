import { API_URL, API_TOKEN } from "@/config/index";

export default async (req, res) => {
  if (req.method === "POST") {
    const { name: username, email, password } = JSON.parse(req.body);

    const strapiRes = await fetch(
      `https://kingdomofkush-backend.onrender.com/api/auth/local/register`,
      {
        method: "POST",

        body: "jlkdsfjs",
      }
    );

    const data = await strapiRes.json();

    res.send({ data });
  } else {
    res.send(req.method, "this method is not allowd!");
  }
};
