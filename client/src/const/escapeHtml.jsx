// Fonction pour échapper les caractères spéciaux (anti-XSS)
export default function escapeHtml(str) {
    return str.replace(/[&<>"'\/]/g, (match) => {
        const map = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "\"": "&quot;",
            "'": "&#39;",
            "/": "&#47;",
        };
        return map[match];
    });
}