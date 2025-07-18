import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;
  
  if (!code) {
    return res.status(400).json({ error: 'No authorization code provided' });
  }

  // Simple success page
  res.setHeader('Content-Type', 'text/html');
  res.send(`
    <html>
      <body>
        <h1>Authentication successful!</h1>
        <p>You can now close this window and return to the CMS.</p>
        <script>window.close();</script>
      </body>
    </html>
  `);
}
