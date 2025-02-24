// Initialize marked with proper options (optional but recommended)
marked.setOptions({
    breaks: true, // Add <br> on single line breaks
    gfm: true // Enable GitHub Flavored Markdown (tables, etc.)
  });
  
  // Update preview function
  function updatePreview() {
    const markdownText = document.getElementById('markdown-input').value;
    const renderedHTML = marked.parse(markdownText);
    document.getElementById('markdown-preview').innerHTML = renderedHTML;
  }

// Listen for input events
document.getElementById('markdown-input').addEventListener('input', updatePreview);

// Trigger the preview update on page load
updatePreview();

