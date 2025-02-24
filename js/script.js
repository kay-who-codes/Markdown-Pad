document.getElementById('markdown-input').addEventListener('input', function() {
    const markdownText = this.value;
    const renderedHTML = marked.parse(markdownText);
    document.getElementById('markdown-preview').innerHTML = renderedHTML;
});