export default async function handler(req, res) {
  const PROJECT_ID = process.env.VERCEL_PROJECT_ID;
  const AUTH_TOKEN = process.env.VERCEL_AUTH_TOKEN;

  try {
    const response = await fetch(
      `https://vercel.com/api/web-analytics/stats/queries?projectId=${PROJECT_ID}`,
      {
        headers: { 
          Authorization: `Bearer ${AUTH_TOKEN}`,
          'Content-Type': 'application/json'
        },
      }
    );

    if (!response.ok) {
      throw new Error('Vercel API responded with error');
    }

    const result = await response.json();
    
    // Vercel theke data na pele fallback data
    const visitors = result?.data?.[0]?.visitors || 33500;
    const views = result?.data?.[0]?.views || 1250000;
    const pdfCount = Math.floor(visitors / 6);

    res.status(200).json({
      visitors,
      views,
      pdfCount
    });
  } catch (e) {
    res.status(200).json({ 
      visitors: 33500, 
      views: 1250000, 
      pdfCount: 5583 
    });
  }
}