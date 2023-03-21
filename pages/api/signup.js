import { API_URL, API_TOKEN } from "@/config/index";

export default async (req, res) => {
  try {
    if (req.method === "POST") {
      
      const { username, email, password } = JSON.parse(req.body);

      const strapiRes = await fetch(
        `http://localhost:1337/api/auth/local/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer 4481aa6034b1c63ee3b9af046e5e87a85f77fb1e7e91882bee48254b0526ab8b4541974eeed3b217ffbf062ac5cae324661e508abbef2cb3f5539511d286168085aed72b51cf5efc2b32c5a25de117be4cad72de106e00eae8c7772e993c7a2c1ec42328d8943a18f9dfe1b16f18b0c0ab88660f43658bb2091ba3ad9a5d94f8`,
          },
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
