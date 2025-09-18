export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/markdown');
  res.send(`# Hello from Vercel!\n\nThis is a placeholder README.`);
}