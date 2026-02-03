export default async function handler(req, res) {
  const PROJECT_ID = process.env.VERCEL_PROJECT_ID;
  const AUTH_TOKEN = process.env.VERCEL_AUTH_TOKEN;

  if (!AUTH_TOKEN || !PROJECT_ID) {
    return res.status(500).json({ error: "Environment variables missing" });
  }

  try {
    const response = await fetch(
      `https://api.vercel.com/v1/web-analytics/stats/queries?projectId=${PROJECT_ID}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AUTH_TOKEN}`
        },
        body: JSON.stringify({
          queries: [
            {
              name: "total_visitors",
              type: "aggregate",
              column: "visitors",
              period: "30d"
            },
            {
              name: "total_views",
              type: "aggregate",
              column: "views",
              period: "30d"
            }
          ]
        })
      }
    );

    const result = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ 
        error: "Vercel API Error", 
        details: result 
      });
    }

    const visitors = result.data.find(d => d.name === 'total_visitors')?.value || 0;
    const views = result.data.find(d => d.name === 'total_views')?.value || 0;

    return res.status(200).json({
      visitors,
      views,
      pdfCount: Math.floor(visitors / 6)
    });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}