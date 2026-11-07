# 🏠 RentEase — Rental Property Finder

A mini real-world platform for finding rental homes. Built with plain **HTML, CSS and JavaScript** — no frameworks, no build step.

## Features

- 🔍 Search by location (city, locality or title)
- 💰 Rent / price range filter
- 🛏️ 1BHK / 2BHK / 3BHK filter
- 🃏 Property cards
- 📄 Property details page
- ♥ Save / favourite properties (stored in `localStorage`)
- ↕️ Sort by price (low → high, high → low)
- 📞 Contact owner button (call / email modal)
- 📱 Responsive mobile design

## Project structure

```
rentease/
├── index.html        # Listings page
├── property.html     # Property details page (?id=1)
├── css/style.css     # Styles (responsive)
├── js/
│   ├── data.js       # Sample property data
│   ├── common.js     # Shared helpers: favourites, modal, formatting
│   ├── app.js        # Listing page logic
│   └── details.js    # Details page logic
└── README.md
```

## Run locally

Just open `index.html` in your browser. Or use a local server:

```bash
npx serve .
# or
python -m http.server 8000
```

## Deploy free with GitHub Pages

1. Push this project to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

## Customize

- Add or edit listings in `js/data.js`.
- Replace the generated placeholder images by adding an `image` field and updating `placeholderImage()` in `js/common.js`.

## Ideas for future improvements

- Real backend / database (Node + MongoDB or Firebase)
- User login and owner dashboard to post properties
- Map view, image galleries, pagination

## License

MIT — free to use for learning and portfolios.
