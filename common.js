// Shared helpers used by both pages.
const FAV_KEY = "rentease:favourites";

function getFavs() {
  try { return JSON.parse(localStorage.getItem(FAV_KEY)) || []; }
  catch { return []; }
}

function isFav(id) { return getFavs().includes(id); }

function toggleFav(id) {
  const favs = getFavs();
  const i = favs.indexOf(id);
  if (i === -1) favs.push(id); else favs.splice(i, 1);
  try { localStorage.setItem(FAV_KEY, JSON.stringify(favs)); } catch {}
  return i === -1; // true if now favourited
}

function formatRent(n) { return "₹" + Number(n).toLocaleString("en-IN"); }

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

// Generates a colourful placeholder image (no external images needed).
function placeholderImage(p, w = 600, h = 400) {
  const palettes = [
    ["#6366f1", "#8b5cf6"], ["#0ea5e9", "#22d3ee"], ["#f97316", "#facc15"],
    ["#10b981", "#34d399"], ["#ec4899", "#f43f5e"], ["#14b8a6", "#6366f1"]
  ];
  const [c1, c2] = palettes[p.id % palettes.length];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/></linearGradient></defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <g fill="rgba(255,255,255,0.9)" transform="translate(${w / 2 - 60},${h / 2 - 60})">
      <path d="M60 0 L120 55 L105 55 L105 110 L15 110 L15 55 L0 55 Z"/>
      <rect x="48" y="70" width="24" height="40" fill="${c1}"/></g>
    <text x="50%" y="${h - 24}" text-anchor="middle" font-family="sans-serif" font-size="22" fill="#fff">${p.bhk} BHK • ${p.locality}</text>
  </svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

// ---------- Contact owner modal ----------
function openContactModal(p) {
  closeContactModal();
  const wrap = document.createElement("div");
  wrap.className = "modal-backdrop";
  wrap.id = "contactModal";
  wrap.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-label="Contact owner">
      <button class="modal-close" aria-label="Close">×</button>
      <h3>Contact owner</h3>
      <p class="muted">${escapeHtml(p.title)} — ${escapeHtml(p.locality)}, ${escapeHtml(p.city)}</p>
      <div class="owner-box">
        <div class="avatar">${escapeHtml(p.owner.name.charAt(0))}</div>
        <div>
          <strong>${escapeHtml(p.owner.name)}</strong>
          <div class="muted">Property owner</div>
        </div>
      </div>
      <div class="modal-actions">
        <a class="btn btn-primary" href="tel:${escapeHtml(p.owner.phone)}">📞 Call ${escapeHtml(p.owner.phone)}</a>
        <a class="btn btn-outline" href="mailto:${escapeHtml(p.owner.email)}?subject=${encodeURIComponent("Enquiry: " + p.title)}">✉️ Send email</a>
      </div>
      <p class="muted small">Demo data — numbers and emails are placeholders.</p>
    </div>`;
  wrap.addEventListener("click", e => {
    if (e.target === wrap || e.target.classList.contains("modal-close")) closeContactModal();
  });
  document.body.appendChild(wrap);
  document.addEventListener("keydown", escClose);
}

function escClose(e) { if (e.key === "Escape") closeContactModal(); }

function closeContactModal() {
  const m = document.getElementById("contactModal");
  if (m) m.remove();
  document.removeEventListener("keydown", escClose);
}

document.addEventListener("DOMContentLoaded", () => {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});
