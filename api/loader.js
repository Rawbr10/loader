export default function handler(req, res) {
    const userAgent = req.headers['user-agent'] || '';
    
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache');
    
    if (!userAgent.toLowerCase().includes('roblox')) {
        return res.redirect(302, 'https://api.luarmor.net/');
    }
    
    const script = `

    local Players = game:GetService("Players")
local LocalPlayer = Players.LocalPlayer
local RunService = game:GetService("RunService")

local a;
a = hookfunction(hookfunction, newcclosure(function(args, args2)
    if args == game.HttpGet then
    LocalPlayer:Kick("Why are you using http spy chill bro")
    task.wait(0.15)
    while true do 
    LocalPlayer:Kick("Why are you using http spy chill bro")
  end
   return warn
    end
    return a(args, args2)
end))

loadstring(game:HttpGet("https://github.com/Rawbr10/loader/raw/refs/heads/main/ProjectX-Steal-A-Brainrot-Anti-Loader.lua"))()
`;
    
    return res.status(200).send(script);
}
