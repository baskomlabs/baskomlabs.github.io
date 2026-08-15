# Baskom — Brand Kit

Visual identity for the Google Play developer page and baskomlabs.github.io.
Everything here is generated from the SVG sources in this folder; the PNG/JPG files are build output.

---

## 1. The concept

**A baskom is the enamel basin in every Betawi kitchen.** Green marbled splash, white inside,
dark blue rolled rim. Cheap, dented, immortal. Nobody treats it preciously — that is exactly the
point. Everything gets thrown in and stirred: adonan, rujak, cucian, es kelapa buat hajatan.

**BaskomLabs is that basin, for code.** Ideas go in, get stirred, and come out as apps — made at
home, made for the neighbours, made without ceremony. The metaphor already sat inside the name;
the old `{ >_ }` mark just never said it out loud.

So the mark is now a literal baskom:

| Element | What it carries |
|---|---|
| Green marbled enamel body | the actual baskom betawi, straight from the reference photo |
| White enamel interior | the empty basin — room for whatever gets mixed next |
| Navy rolled rim | the blue lip every enamel baskom has; also the site's blue accent |
| `>_` sitting *inside* the bowl | what gets stirred here is code |
| `{ }` `;` `</>` rising off it | steam, on the banner only |

The joke lands without a caption: it is a wash basin, and there is a terminal prompt in it.

---

## 2. Taglines

**Kept, non-negotiable** — the original college tagline, now set small and secondary:

> do code for fun, no.. serious things.

**New primary tagline** (sits above it, larger):

> **Wadahnya ngoprek.** — *Where the tinkering happens.*

Alternates if you want to swap — one line change in the SVGs, then re-render:

| Indonesian | English |
|---|---|
| Semua diaduk di sini. | Everything gets stirred here. |
| Diaduk dulu, jadi aplikasi. | Stir first, ship later. |
| Dari baskom, jadi aplikasi. | Out of the basin, into an app. |

The existing site line **"Bengkel Aplikasi Kompeni"** is retained as the small eyebrow label above
the wordmark, so Play and the website read as the same brand.

---

## 3. Palette

Enamel colours are new; the dark ground and accents are lifted unchanged from `src/index.css`
so the Play assets and the website sit in the same world.

| Token | Hex | Use |
|---|---|---|
| `enamel-green-light` | `#7ccb52` | top of the bowl gradient |
| `enamel-green` | `#4e9e3f` | flat green, interior splash |
| `enamel-green-mid` | `#55a83f` | body gradient midpoint |
| `enamel-green-deep` | `#2a5d24` | foot of the bowl |
| `enamel-white` | `#f4f8f0` → `#ffffff` | interior ground, marbling |
| `rim-blue-light` | `#4478ea` | rim highlight |
| `rim-navy` | `#1a3c88` | rim body |
| `rim-navy-deep` | `#0b1c46` | rim shadow |
| `prompt-ink` | `#0e2a5e` | the `>_` glyph |
| `bg-dark` | `#0a0a0c` | site + asset ground |
| `accent-blue` | `#3b82f6` | existing site accent |
| `accent-indigo` | `#6366f1` | ambient glow |
| `accent-purple` | `#8b5cf6` | ambient glow |
| `text-primary` | `#f8fafc` | wordmark |
| `text-secondary` | `#94a3b8` | eyebrow + small tagline |
| `steam-green` | `#7fd45f` | tagline, floating code glyphs |

**Type:** Outfit 800 (wordmark), Outfit 700 (tagline/eyebrow), Inter 400 (body).
Same two families the site already loads.

---

## 4. Assets and where they go

| File | Spec | Play Console field |
|---|---|---|
| `baskom-icon-512.png` | 512×512, 32-bit PNG | **Developer icon** (and any app icon reusing the mark) |
| `baskom-dev-header-4096x2304.jpg` | 4096×2304 JPEG, 284 KB (cap is 1 MB) | **Developer header image** — the wide banner on your dev page |
| `baskom-feature-graphic.png` | 1024×500, 24-bit PNG, no alpha | **Feature graphic**, per-app store listing |
| `favicon.svg` / `favicon.ico` / `favicon-16.png` / `favicon-32.png` / `apple-touch-icon.png` | in `public/` | website, already wired into `index.html` |

The header image is the one that replaces the banner currently on your dev page — a feature
graphic (1024×500) is a *per-app* asset and Play will reject it for the developer header slot.

### Sources

| Source | Renders to |
|---|---|
| `baskom-icon.svg` | the 512 icon |
| `baskom-feature-graphic.svg` | the 1024×500 feature graphic |
| `baskom-dev-header.svg` | the 4096×2304 header |
| `favicon.svg` | 32/48/180 px favicon output |
| `favicon-16.svg` | 16 px only — generated from `favicon.svg` with the `>_` and marbling stripped, because both turn to mush at that size |

### Re-rendering

The enamel marbling is real SVG (`feTurbulence` thresholded through `feComponentTransfer`), not a
bitmap, so it re-renders crisply at any size. It needs a browser engine — `rsvg-convert` handles
the flat favicon fine but not the filter chain. Use headless Chrome for anything with marbling:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --virtual-time-budget=4000 --window-size=512,512 --screenshot=brand/baskom-icon-512.png brand/baskom-icon.svg
```

Two things that will bite whoever edits these next:

- `feTurbulence` **discards the source graphic entirely**, so the `fill` on the filtered rect does
  nothing. The colour is set by the constant column of the `feColorMatrix` that follows it.
- The marbling threshold lives in `feFuncA slope`/`intercept`. The noise is roughly Gaussian around
  0.5, so the crossover must sit near there — `slope=14, intercept=-6.92` puts it at 0.494 for about
  40 % white coverage. Nudging the intercept a few tenths swings it from bare green to solid white.

---

## 5. Design prompt

Reusable prompt for generating further on-brand visuals (screenshot frames, social cards, more app
icons) that sit inline with baskomlabs.github.io.

> Design a visual for **BaskomLabs**, an Indonesian indie software studio ("Bengkel Aplikasi
> Kompeni") that ships small Android utilities. The identity is built on the **baskom betawi** —
> the enamel wash basin found in every Indonesian kitchen: bright green marbled splash-glaze over
> white enamel, with a dark cobalt-blue rolled rim. Humble, domestic, slightly battered, not
> precious. The brand idea is that this basin is where code gets mixed: ideas go in, get stirred,
> and come out as apps.
>
> **Ground:** near-black `#0a0a0c` with a soft radial lift to `#16283f` behind the subject. Faint
> cyan `#22d3ee` circuit traces at 8–10 % opacity running off the edges, with small node dots.
> Large, heavily blurred ambient glows in indigo `#6366f1` and purple `#8b5cf6` at 10–16 % opacity,
> plus a green `#4fa53c` glow behind the subject. Blur radius must scale with the canvas or the
> glows show hard disc edges.
>
> **Subject:** the baskom, viewed from slightly above so the interior is visible. Exterior is
> green-dominant (`#7ccb52` → `#55a83f` → `#2a5d24`, top to bottom) with irregular vertical white
> `#f4f8f0` marbled drips running from rim to foot — organic and uneven, never evenly spaced
> stripes. Interior is white-dominant with green splash held to the walls, leaving the centre clean.
> Rolled rim in `#4478ea` → `#1a3c88` → `#0b1c46` with a light catch along the top-left arc.
> A chunky, rounded terminal prompt `>_` in `#0e2a5e` sits inside the bowl, centred, with a soft
> white halo behind it so it survives launcher sizes.
>
> **Type:** Outfit 800 for the wordmark "BASKOM" in near-white with a subtle gradient to `#b9c9de`.
> Above it, a small letter-spaced eyebrow "BENGKEL APLIKASI KOMPENI" in `#7f8ea3`. Below it, the
> tagline "Wadahnya ngoprek." in Outfit 700, green `#7fd45f`. Below that, smaller and quieter in
> Inter 400 `#8593a8`, the original line: "do code for fun, no.. serious things." — always present,
> always the smallest text in the lockup.
>
> **Optional:** a few monospace glyphs — `{ }` `;` `</>` `( )` — drifting upward from the bowl like
> steam, in green at 16–30 % opacity.
>
> **Mood:** dark, glassy, modern-indie — matching a site built on glassmorphic cards, blurred
> ambient gradients and blue-to-purple accents — but with one warm, tactile, unmistakably
> Indonesian object at the centre of it. Do not make the baskom look like a watermelon, a bowl of
> soup, or a logo mascot with a face; it is a wash basin.

---

## 6. Play Console developer page copy

**Developer name:** Baskom

**About / description:**

> Baskom itu wadah — tempat semua diaduk jadi satu. Di sini isinya kode.
> Aplikasi-aplikasi kecil buat keperluan sehari-hari: baca kartu, scan QRIS, tahlilan.
> Dibikin sendiri, dipakai sendiri, dibagi ke yang butuh.
>
> do code for fun, no.. serious things.

English variant:

> A baskom is a basin — the thing you mix everything in. This one happens to be full of code.
> Small apps for everyday things: reading cards, scanning QRIS, tahlil.
> Built at home, used at home, shared with whoever needs them.
>
> do code for fun, no.. serious things.
