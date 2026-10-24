# Silk: sample cafe website (concept)

A Tier 1 brochure site built as a **portfolio sample** for a fictional cafe, "Silk", in a placeholder UK town ("Anytown"). It replaces the earlier Little Oak Coffee draft, which is kept in `../little-oak-coffee/` for reference. **Not deployed**: waiting for Johnny's go-ahead.

## Direction (from Johnny's feedback, 24 Oct 2026)
- Visual and atmospheric first, less like a "choose a service" site. The inspiration was neighbourhood.cafe and wearelostandfound.com.
- Text-only wordmark, no logo symbol.
- Subtle, earthy browns and mustards.

## Pages
`index.html` (full-bleed hero, short statement, photo collage, menu preview, "Our coffee" teaser, full-bleed quote band, Visit with hours, Instagram-style grid), `menu.html` (typographic menu with bare prices, sticky photo per section), `about.html` (owners' story, then "Where our coffee comes from" at `#coffee`: farm, roaster and bar in three steps, and an "On the grinder now" list), `find-us.html`, `contact.html`, plus `privacy.html`, `brand.html` and `404.html`.

Plain HTML, CSS and a little JS. There are no third-party requests and no cookies. The navigation is four words; on mobile it opens a full-screen menu. Hours and an "Open now" line sit quietly in the hero, Visit section and footer.

## Starter brand (AI-generated)
- Wordmark: "Silk" in Instrument Serif over "COFFEE & KITCHEN" in Instrument Sans caps. Files: `brand/silk-wordmark.svg`, `brand/silk-wordmark-linen.svg`, plus `brand/silk-monogram.svg` (favicon only). The text is outlined, so the files work without the fonts.
- Colours: Espresso `#2A201A`, Mustard `#BE9149`, Linen `#F1EADF`. Support: Toffee `#6E4A33`, Sand `#E6D9C5`. Mustard is never used for body text on light backgrounds.
- Fonts: Instrument Serif (display, upright and italic) and Instrument Sans (text).

## Photos
All 25 slots have free-licence stock photos from Pexels (no AI-generated images; each page was checked for an AI label). They stand in for a real client's own photos and do not show a real Silk. Files are in `images/`, resized to about 1600px on the long edge (2000px for the full-bleed hero and quote band) and saved as progressive JPEG at quality 74, about 4.4 MB in all. The owners' photo (`about-owners`) is a stock couple standing in for the real owners; swap in the client's own portrait before launch. The `about-wide` photo is cropped to 16:10 from a portrait original. Credits also appear on `brand.html#photos`.

To swap a photo, replace `images/<key>.jpg`, update its credit in `PHOTOS` in `../silk-cafe-source/gen.py` and in this table, then run `python3 gen.py`. Width and height attributes are read from the file (needs Pillow).

| Slot | Photo | Source | Licence |
|---|---|---|---|
| `hero` | Sunlight through the front window across the counter and espresso machine | [Ánh Đặng, Pexels](https://www.pexels.com/photo/34094296/) | Pexels License |
| `pour` | A barista pouring milk into a flat white | [Raymond Petrik, Pexels](https://www.pexels.com/photo/30517818/) | Pexels License |
| `counter` | Pastries and cakes on the counter | [Madison Inouye, Pexels](https://www.pexels.com/photo/192933/) | Pexels License |
| `cup` | A cup of black coffee beside an open book on linen, seen from above | [Yulia Ilina, Pexels](https://www.pexels.com/photo/9463157/) | Pexels License |
| `band` | Steam rising from a glass cup of black coffee | [Victor Pace, Pexels](https://www.pexels.com/photo/4256790/) | Pexels License |
| `visit` | A coffee shop sign on a stone townhouse street | [K, Pexels](https://www.pexels.com/photo/19093452/) | Pexels License |
| `g1` | Latte art | [Chevanon Photography, Pexels](https://www.pexels.com/photo/312420/) | Pexels License |
| `g2` | A brunch plate | [Vincent Rivaud, Pexels](https://www.pexels.com/photo/4062617/) | Pexels License |
| `g3` | A window seat | [Zehra Aynacı, Pexels](https://www.pexels.com/photo/28743864/) | Pexels License |
| `g4` | An espresso shot pulling | [Marta Dzedyshko, Pexels](https://www.pexels.com/photo/2067628/) | Pexels License |
| `g5` | Cinnamon buns on a tray | [Federica Gioia, Pexels](https://www.pexels.com/photo/17430536/) | Pexels License |
| `g6` | Wooden chairs and plants by the stairs | [Việt Anh Nguyễn, Pexels](https://www.pexels.com/photo/31408469/) | Pexels License |
| `menu-coffee` | Espresso pouring from the machine | [Mike Jones, Pexels](https://www.pexels.com/photo/9050518/) | Pexels License |
| `menu-kitchen` | A brunch plate on a wooden table | [Anastasia Ilina-Makarova, Pexels](https://www.pexels.com/photo/10720381/) | Pexels License |
| `menu-bakes` | A tray of fresh cinnamon buns going onto the rack | [Anna Shvets, Pexels](https://www.pexels.com/photo/5964505/) | Pexels License |
| `about-wide` | Warm light on an arched window and plaster wall | [Nida Kurt, Pexels](https://www.pexels.com/photo/8765830/) | Pexels License |
| `about-owners` | Ellie and Marcus leaning on the counter, laughing (stock photo standing in for the owners) | [RDNE Stock project, Pexels](https://www.pexels.com/photo/10375886/) | Pexels License |
| `about-2` | Coffee beans being weighed | [Thirdman, Pexels](https://www.pexels.com/photo/8936984/) | Pexels License |
| `about-3` | A slice of cake | [Lisa Fotios, Pexels](https://www.pexels.com/photo/907142/) | Pexels License |
| `find-wide` | A small cafe on a street corner after rain | [Adrien Olichon, Pexels](https://www.pexels.com/photo/36126234/) | Pexels License |
| `coffee-roast` | Coffee beans turning in a drum roaster | [Sarah, Pexels](https://www.pexels.com/photo/122370/) | Pexels License |
| `coffee-cherries` | Ripe red coffee cherries on a branch in Colombia | [Julian Cabrera S, Pexels](https://www.pexels.com/photo/19455179/) | Pexels License |
| `coffee-cooling` | A hand checking freshly roasted beans in the cooling tray | [cottonbro studio, Pexels](https://www.pexels.com/photo/4820817/) | Pexels License |
| `coffee-farm` | A farmer picking coffee on a steep green hillside in Colombia | [1500m Coffee, Pexels](https://www.pexels.com/photo/30717831/) | Pexels License |
| `contact` | Two cappuccinos on a wooden table with dried flowers | [NastyaSensei, Pexels](https://www.pexels.com/photo/2575835/) | Pexels License |

Use free-licence photos only (Pexels License, Unsplash License or CC0), and avoid AI-generated food, people or premises. Pexels asks for no credit, but crediting is kept as good practice. Unsplash and Pexels website pages block automated fetches from the build environment, but the Pexels image CDN works.

## Licences
| Asset | Source | Licence |
|---|---|---|
| Instrument Serif | @fontsource/instrument-serif 5.3.0 | SIL OFL 1.1 (`fonts/OFL-InstrumentSerif.txt`) |
| Instrument Sans | @fontsource/instrument-sans 5.3.0 | SIL OFL 1.1 (`fonts/OFL-InstrumentSans.txt`) |
| Wordmark, map illustration, placeholders | Made for this project | Project-owned |
| Photos | Pexels (see Photos above) | [Pexels License](https://www.pexels.com/license/) |

## Placeholders
The address (14 Sample Street, Anytown, XX1 1XX), phone (01632 960123, from Ofcom's fiction range), email (hello@silk.example), Instagram handle, hours (also in `js/main.js` and the JSON-LD), menu and prices, About story and owners (Ellie and Marcus), the roaster (Hollow Lane Roastery, a made-up name: check it isn't a real business before launch, and set it in `ROASTER` in gen.py), coffee origins and tasting notes, the one sample quote (tagged "Sample") and the Getting here notes are all placeholders.

## Checks (24 Oct 2026)
- 375px and 1280px wide: no horizontal scroll on any page. The full-screen mobile menu opens and closes, including with Esc.
- One `<h1>` per page and unique titles. All internal links and assets load, with no console errors.
- Skip link and focus styles are in place. The fade-in respects reduced motion and the content still shows without JS.
- With photos in (24 Oct 2026): every slot loads a real image, no failed requests or console errors over http, and still no horizontal scroll at 390px and 1440px.
- Not yet run: Lighthouse and a real-phone test. Run them once the site is deployed.

## Deploy (when Johnny says so)
Upload this folder to any static host. Then set `og:url` and `og:image` and update `sitemap.xml`. Keep `robots.txt` and `noindex` while the site stays a sample.

## Source
`../silk-cafe-source/gen.py` builds every page and `wordmark.py` rebuilds the wordmark SVGs (needs `pip install fonttools brotli`). Previews are in `../silk-cafe-source/previews/`.
