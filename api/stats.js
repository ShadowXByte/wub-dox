export default async function handler(req, res) {
  const PROJECT_ID = process.env.VERCEL_PROJECT_ID;
  const AUTH_TOKEN = process.env.VERCEL_AUTH_TOKEN;

  try {
    const response = await fetch(`https://api.vercel.com/v1/reports/stats?projectId=${PROJECT_ID}`, {
      headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch" });
  }
}