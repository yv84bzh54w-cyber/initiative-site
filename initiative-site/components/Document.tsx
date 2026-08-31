export default function Document() {
  return (
    <section id="document">
      <h2>Document</h2>
      <div className="document-container">
        <div className="document-placeholder">
          [Document content goes here - you can paste your document text, PDF content, or images here]
        </div>
        <p style={{ marginTop: '20px', textAlign: 'center', color: '#888', fontSize: '0.9rem' }}>
          Last updated: [Date]
        </p>
      </div>
    </section>
  );
}
