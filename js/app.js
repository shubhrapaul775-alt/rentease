// Listing page logic: search, filters, sorting, favourites, cards.
const state = {
  query: "",
  bhk: "all",
  min: null,
  max: null,
  sort: "relevance",
  favsOnly: false
};

const $ = id => document.getElementById(id);
const grid = $("grid");

function getFiltered() {
  const q = state.query.trim().toLowerCase();
  const favs = getFavs();

  let list = PROPERTIES.filter(p => {
    if (q && !`${p.title} ${p.city} ${p.locality}`.toLowerCase().includes(q)) return false;
    if (state.bhk !== "all" && p.bhk !== Number(state.bhk)) return false;
    if (state.min !== null && p.rent < state.min) return false;
    if (state.max !== null && p.rent > state.max) return false;
    if (state.favsOnly && !favs.includes(p.id)) return false;
    return true;
  });

  if (state.sort === "price-asc") list.sort((a, b) => a.rent - b.rent);
  if (state.sort === "price-desc") list.sort((a, b) => b.rent - a.rent);
  return list;
}

function cardHTML(p) {
  const fav = isFav(p.id);
  return `
    <article class="card">
      <div class="card-img">
        <a href="property.html?id=${p.id}">
          <img src="${placeholderImage(p)}" alt="${escapeHtml(p.title)}" loading="lazy" />
        </a>
        <button class="fav-btn ${fav ? "active" : ""}" data-id="${p.id}"
          aria-label="${fav ? "Remove from saved" : "Save property"}" aria-pressed="${fav}">♥</button>
        <span class="tag">${p.bhk} BHK</span>
      </div>
      <div class="card-body">
        <div class="price">${formatRent(p.rent)}<small>/month</small></div>
        <h3><a href="property.html?id=${p.id}">${escapeHtml(p.title)}</a></h3>
        <p class="muted">📍 ${escapeHtml(p.locality)}, ${escapeHtml(p.city)}</p>
        <ul class="specs">
          <li>${p.area} sq.ft</li>
          <li>${p.bathrooms} Bath</li>
          <li>${escapeHtml(p.furnishing)}</li>
        </ul>
        <div class="card-actions">
          <a class="btn btn-outline" href="property.html?id=${p.id}">View details</a>
          <button class="btn btn-primary contact-btn" data-id="${p.id}">Contact owner</button>
        </div>
      </div>
    </article>`;
}

function render() {
  const list = getFiltered();
  grid.innerHTML = list.map(cardHTML).join("");
  $("empty").hidden = list.length > 0;
  $("resultCount").textContent =
    `${list.length} propert${list.length === 1 ? "y" : "ies"} found`;
  $("favCount").textContent = getFavs().length;
  const t = $("favToggle");
  t.classList.toggle("active", state.favsOnly);
  t.setAttribute("aria-pressed", state.favsOnly);
}

// ---- Events ----
$("searchInput").addEventListener("input", e => { state.query = e.target.value; render(); });

$("bhkChips").addEventListener("click", e => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  state.bhk = btn.dataset.bhk;
  document.querySelectorAll("#bhkChips .chip").forEach(c => c.classList.toggle("active", c === btn));
  render();
});

function numOrNull(v) { return v === "" ? null : Number(v); }
$("minRent").addEventListener("input", e => { state.min = numOrNull(e.target.value); render(); });
$("maxRent").addEventListener("input", e => { state.max = numOrNull(e.target.value); render(); });
$("sortSelect").addEventListener("change", e => { state.sort = e.target.value; render(); });

$("favToggle").addEventListener("click", () => { state.favsOnly = !state.favsOnly; render(); });

$("resetBtn").addEventListener("click", () => {
  Object.assign(state, { query: "", bhk: "all", min: null, max: null, sort: "relevance", favsOnly: false });
  $("searchInput").value = "";
  $("minRent").value = "";
  $("maxRent").value = "";
  $("sortSelect").value = "relevance";
  document.querySelectorAll("#bhkChips .chip").forEach(c => c.classList.toggle("active", c.dataset.bhk === "all"));
  render();
});

grid.addEventListener("click", e => {
  const fav = e.target.closest(".fav-btn");
  if (fav) {
    toggleFav(Number(fav.dataset.id));
    render();
    return;
  }
  const contact = e.target.closest(".contact-btn");
  if (contact) {
    const p = PROPERTIES.find(x => x.id === Number(contact.dataset.id));
    if (p) openContactModal(p);
  }
});

render();
