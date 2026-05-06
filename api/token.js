export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://aero-uptime.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  if (!process.env.GITHUB_TOKEN) {
    return res.status(500).json({ error: 'token not set' });
  }
  res.status(200).json({ token: process.env.GITHUB_TOKEN });
}