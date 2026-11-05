# Buxton Bites WhatsApp Ordering MVP

A responsive, static storefront built with HTML, CSS and vanilla JavaScript. Menu image assets are local. No build step or backend is required.

## Run locally
1. Extract the ZIP (if needed).
2. Open `index.html` in a browser, or serve this folder with a local static server for best browser compatibility.
3. Add menu items to the basket, continue to checkout, enter customer/order details, and select **Send order to WhatsApp**.

## Order flow
- Cart quantity editing and subtotal calculation
- Menu categories and live search
- Checkout captures name, phone, delivery/pickup, location/note, payment method, preferred time and special instructions
- WhatsApp opens a pre-filled order message to **0791 511386** (`+254 791 511386`)
- Phone calls: **0759 014745** (`tel:+254759014745`)
- M-Pesa Till number: **1817896**
- Corrected menu price: **Mbahazi nazi — KSh 150**
- Special meals note encourages customers to order in advance

## Important MVP notes
- The site does not collect payment online and does not confirm availability automatically.
- Delivery charges, final totals, order acceptance and any cash/alternative payment arrangements should be confirmed with the restaurant in WhatsApp.
- The WhatsApp number and till number are configured near the top of `app.js` and in `index.html`.
- This is a front-end MVP: no database, admin dashboard, stock management, or order history is included.

## Delivery zones
Zones are listed in `DELIVERY_ZONES` at the top of `app.js` (shown on the site and in checkout). Standard fees per area are in `DELIVERY_FEES` (estimates by distance from Buxton; edit as needed). Areas without a fee display "confirmed on WhatsApp".

## Installable app (PWA)
- Files: `manifest.webmanifest`, `sw.js` (service worker), `assets/icons/*`, `assets/pwa/*` (iOS launch images + store screenshots).
- **Must be hosted over HTTPS** (e.g. Netlify, Vercel, Cloudflare Pages, GitHub Pages, or your own domain). Service workers and install prompts do not work from a double-clicked `index.html` file; `localhost` is fine for testing.
- Upload the whole folder so `manifest.webmanifest`, `sw.js` and `index.html` sit in the same directory.
- Android/Chrome: an "Install Buxton Bites" banner appears (also in the ☰ menu). iPhone/Safari: the banner opens an "Add to Home Screen" guide.
- After changing any site file, edit `VERSION` at the top of `sw.js` (e.g. `bb-v2`) so phones pick up the update. Customers then see a "New version available — Reload" banner (their basket is kept when they tap Reload). Phones check for updates when the app is opened, every 30 minutes, and when they come back online.

## Map pin (OpenStreetMap)
- Delivery orders ask the customer to pin their exact location (`map.js`). It uses OpenStreetMap tiles and Nominatim search; no API key is needed. The "© OpenStreetMap contributors" credit must stay visible.
- The pin is sent in the WhatsApp message as an OpenStreetMap link plus a Google Maps "Navigate" link for the rider, and is remembered on the customer's device with their other saved details.
- To make the pin optional, set `PIN_REQUIRED=false` near the top of `app.js`. It is skipped automatically when the phone is offline.
- OpenStreetMap's public servers are for light use. If order volume grows a lot, switch `TILE`/`NOMINATIM` in `map.js` to a paid provider (e.g. MapTiler, Stadia) — only those two constants change.

## Automatic location detection (checkout)
- Opening checkout (or switching to Delivery) asks the browser for the customer's location once. Skipped if a saved/manual pin exists or permission is blocked; a "Use my current location" button re-runs it any time.
- The GPS fix is matched to the nearest area in `ZONE_COORDS` (approximate centres, top of the pin section in `app.js`) within `ZONE_MAX_KM`, then fills the zone, the address (reverse geocoded via OpenStreetMap) and the map pin.
- Detection only fills fields that are empty or were auto-filled; anything the customer typed/picked, or a manually placed pin, is never overwritten. Fixes worse than `PIN_MAX_ACCURACY_M` select the zone only; positions outside Mombasa are ignored.

Credit: "Designed by Manu Creations" (manucreations.co.ke) is in the footer and the mobile ☰ menu; the Buxton Bites logo shows in the mobile home header.

## Terms, Privacy and checkout validation
- Checkout has a required "I agree to the Terms of Service and Privacy Policy" box (unticked each time checkout opens). The text lives in `#legal-modal` in `index.html` — have it reviewed by a lawyer and edit to match your practice. Links also appear in the footer and mobile ☰ menu.
- The form uses custom validation (`validateCheckout` in `app.js`): a summary at the top lists everything missing (tap an item to jump to it) and each field shows its own red message, which clears as the customer fixes it.

## Update: no map picker
The "Open map" picker was removed. The delivery field is now "Street / delivery address" (required). If the customer allows location, the pin is captured silently and the WhatsApp message includes Google Maps and OpenStreetMap links to it. `map.js` now only holds the reverse-geocoding and link helpers.

## Auto street/address
Detected GPS position is reverse-geocoded (OpenStreetMap Nominatim, `map.js`) into "landmark, street, area" (e.g. "General Post Office, Digo Road, Old Town" or "Baluchi Street, Ganjoni") and fills the address box. Only empty or previously auto-filled addresses are replaced; if the lookup fails it falls back to "Near <area>". Accuracy of street names depends on OpenStreetMap coverage.

## Icons
All UI icons are [Lucide](https://lucide.dev) (ISC licence), embedded as an inline SVG sprite at the top of `<body>` in `index.html` — no CDN, works offline. Use one with `<svg class="ic"><use href="#i-map-pin"/></svg>` (or `ico("map-pin")` in `app.js`). To add an icon, copy its `<path>`/shapes from lucide.dev into a new `<symbol id="i-NAME" viewBox="0 0 24 24">` in the sprite. Emoji remain only inside the WhatsApp message text, which can't show icons.
