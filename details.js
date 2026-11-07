// Property details page logic.
const container = document.getElementById("details");
const id = Number(new URLSearchParams(location.search).get("id"));
const prop = PROPERTIES.find(p => p.id === id);

function renderDetails() {
  if (!prop) {
    container.innerHTML = `
      <div class="empty"><h3>Property not found</h3>
      <p><a href="index.html">Go back to listings</a></p></div>`;
    return;
  }
  document.title = `${prop.title} — RentEase`;
  const fav = isFav(prop.id);

  container.innerHTML = `
    <div class="details-layout">
      <div class="details-main">
        <img class="details-img" src="${placeholderImage(prop, 900, 520)}" alt="${escapeHtml(prop.title)}" />
        <h1>${escapeHtml(prop.title)}</h1>
        <p class="muted">📍 ${escapeHtml(prop.locality)}, ${escapeHtml(prop.city)}</p>

        <div class="facts">
          <div><span>BHK</span><strong>${prop.bhk}</strong></div>
          <div><span>Area</span><strong>${prop.area} sq.ft</strong></div>
          <div><span>Bathrooms</span><strong>${prop.bathrooms}</strong></div>
          <div><span>Floor</span><strong>${escapeHtml(prop.floor)}</strong></div>
          <div><span>Furnishing</span><strong>${escapeHtml(prop.furnishing)}</strong></div>
          <div><span>Available</span><strong>${escapeHtml(prop.available)}</strong></div>
        </div>

        <h2>About this property</h2>
        <p>${escapeHtml(prop.description)}</p>

        <h2>Amenities</h2>
        <ul class="amenities">
          ${prop.amenities.map(a => `<li>✓ ${escapeHtml(a)}</li>`).join("")}
        </ul>
      </div>

      <aside class="details-side">
        <div class="side-card">
          <div class="price big">${formatRent(prop.rent)}<small>/month</small></div>
          <p class="muted">Security deposit: ${formatRent(prop.deposit)}</p>
          <button id="contactBtn" class="btn btn-primary block">Contact owner</button>
          <button id="favBtn" class="btn btn-outline block ${fav ? "active" : ""}" aria-pressed="${fav}">
            ${fav ? "♥ Saved" : "♡ Save property"}
          </button>
          <div class="owner-box">
            <div class="avatar">${escapeHtml(prop.owner.name.charAt(0))}</div>
            <div><strong>${escapeHtml(prop.owner.name)}</strong>
            <div class="muted">Property owner</div></div>
          </div>
        </div>
      </aside>
    </div>`;

  document.getElementById("contactBtn").addEventListener("click", () => openContactModal(prop));
  document.getElementById("favBtn").addEventListener("click", () => {
    toggleFav(prop.id);
    renderDetails();
  });
}

renderDetails();
