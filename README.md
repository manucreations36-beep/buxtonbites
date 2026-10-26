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
