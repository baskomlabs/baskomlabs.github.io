# hero-loop

Silent 6 s, 1080x1080 @ 30 fps seamless loop for the baskom.fun hero (neo-brutalist baskom, rising code-glyph chips, app stickers). Source is `index.html` (HyperFrames + GSAP); every value is a 6 s-periodic function of time, so frame 180 == frame 0.

Re-render: `npx hyperframes@0.9.6 check --json && npx hyperframes@0.9.6 render --quality delivery --fps 30 -o renders/hero-loop.mp4`, then from the repo root:

```sh
ffmpeg -y -i video/hero-loop/renders/hero-loop.mp4 -vf scale=720:720:flags=lanczos -c:v libvpx-vp9 -b:v 0 -crf 34 -row-mt 1 -deadline good -cpu-used 1 -pix_fmt yuv420p -an public/hero/baskom-loop.webm
ffmpeg -y -i video/hero-loop/renders/hero-loop.mp4 -vf scale=720:720:flags=lanczos -c:v libx264 -preset slow -crf 23 -pix_fmt yuv420p -profile:v high -movflags +faststart -an public/hero/baskom-loop.mp4
ffmpeg -y -ss 3.0 -i video/hero-loop/renders/hero-loop.mp4 -frames:v 1 -vf scale=720:720:flags=lanczos /tmp/poster.png && cwebp -q 80 /tmp/poster.png -o public/hero/baskom-loop-poster.webp
```
