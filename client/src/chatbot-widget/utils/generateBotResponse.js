import DOMPurify from "dompurify";

/**
 * Fixes invalid HTML nesting by closing <p> before block elements like <ul>.
 */
function fixHtmlNesting(html) {
  // Close any <p> tags before <ul>, <ol>, or <div>
  return html.replace(/<p>(\s*<ul)/gi, "</p>$1")
             .replace(/<p>(\s*<ol)/gi, "</p>$1")
             .replace(/<p>(\s*<div)/gi, "</p>$1");
}

export async function generateBotResponse(userMessage) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: userMessage }],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    let botText = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    // Fix invalid HTML nesting if bot sends HTML
    botText = fixHtmlNesting(botText);

    // Sanitize to avoid XSS or broken tags
    botText = DOMPurify.sanitize(botText, { ALLOWED_TAGS: ["p", "ul", "li", "b", "i", "strong", "em", "br"] });

    return {
      role: "model",
      text: botText,
    };
  } catch (error) {
    console.error("Error generating bot response:", error);
    return {
      role: "model",
      text: "⚠️ Sorry, I’m having trouble responding right now.",
    };
  }
}
