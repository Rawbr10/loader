export default function handler(req, res) {
    const userAgent = req.headers['user-agent'] || '';
    
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache');
    
    if (!userAgent.toLowerCase().includes('roblox')) {
        return res.redirect(302, 'https://api.luarmor.net/files/v3/loaders/f3b40c898f0678d88a8e936b805bf981.lua%22');
    }
    
    const script = `
loadstring(game:HttpGet("https://github.com/Rawbr10/loader/raw/refs/heads/main/ProjectX-Steal-A-Brainrot-Anti-Loader.lua"))()
`;
    
    return res.status(200).send(script);
}
