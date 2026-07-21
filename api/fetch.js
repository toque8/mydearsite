export default async function handler(req, res) {
    const { url } = req.method === 'POST' ? req.body : req.query;
    if (!url) {
        return res.status(400).json({ error: 'Missing url parameter' });
    }

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        });
        const html = await response.text();
        res.status(200).json({ html });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}