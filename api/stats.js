export default async function handler(req, res) {
  const PROJECT_ID = process.env.VERCEL_PROJECT_ID;
  const AUTH_TOKEN = process.env.VERCEL_AUTH_TOKEN;

  try {
    const response = await fetch(
      `https://api.vercel.com/v1/web-analytics/stats/queries?projectId=${PROJECT_ID}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
        body: JSON.stringify({
          queries: [
            {
              name: "total_visitors",
              type: "aggregate",
              column: "visitors",
            },
            {
              name: "total_views",
              type: "aggregate",
              column: "views",
            }
          ],
        }),
      }
    );

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error?.message || 'Failed to fetch');
    }

    const visitors = result.data.find(d => d.name === 'total_visitors')?.value || 33000;
    const views = result.data.find(d => d.name === 'total_views')?.value || 105000;

    res.status(200).json({
      visitors,
      views,
      pdfCount: Math.floor(visitors / 6)
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}