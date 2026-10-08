# Gym Displays, Arena Boards & Stream Embeds

Deploy ProKeeper live scoreboards to arena video displays, gymnasium monitors, and live stream broadcasts via OBS or vMix.

---

## OBS / vMix Browser Source Integration

To embed the live scoreboard into your YouTube, Twitch, or NFHS live stream broadcast:
1. In OBS Studio, add a new **Browser Source**.
2. Set the URL to: `https://app.prokeeper.com/live/{access_code}`
3. Set resolution to `1920x1080` (or `1280x720`).
4. Enable **Shutdown source when not visible** and **Refresh browser when scene becomes active**.

---

## Gymnasium Video Board / Fullscreen Mode

1. Connect your gym display PC to your arena LED screen or TV monitor.
2. Open `https://app.prokeeper.com/live/{access_code}` in Google Chrome or Firefox.
3. Press <kbd>F11</kbd> (or <kbd>Cmd+Ctrl+F</kbd> on macOS) to enter borderless fullscreen mode.
4. The scoreboard automatically resizes and scales typography for maximum arena readability.
