// Function to update the preview
function updatePreview() {
    const markdownText = document.getElementById('markdown-input').value;
    const renderedHTML = marked.parse(markdownText);
    document.getElementById('markdown-preview').innerHTML = renderedHTML;
}

// Listen for input events
document.getElementById('markdown-input').addEventListener('input', updatePreview);

// Trigger the preview update on page load
updatePreview();