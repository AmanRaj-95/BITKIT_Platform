// src/utils/sanitize.js
export function sanitizeHTML(html) {
  if (!html) return "";

  // Fix <ul> nested directly inside <p>
  let clean = html.replace(/<p>\s*(<ul>)/gi, "$1");

  // Close <p> before ending <ul> if needed
  clean = clean.replace(/<\/ul>\s*<\/p>/gi, "</ul>");

  return clean.trim();
}
