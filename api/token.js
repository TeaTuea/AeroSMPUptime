export default function handler(req, res) {
  const origin = req.headers.origin || req.headers.referer || '';
  const allowed = ['https://aero-uptime.vercel.app', 'https://aero-uptime-git-main-teatueas-projects.vercel.app'];
  const ok = allowed.some(a => origin.startsWith(a));
  if (!ok) return res.status(403).json({ error: 'forbidden' });
  if (!process.env.GITHUB_TOKEN) return res.status(500).json({ error: 'token not set' });
  res.status(200).json({ token: process.env.GITHUB_TOKEN });
}
