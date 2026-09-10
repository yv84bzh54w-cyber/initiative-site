const languageDocuments = [
  {
    language: 'English',
    file: '/documents/2026%2008%2031%20Appeal%20to%20UN%20by%20ordinary%20people.pdf',
    available: true,
    primary: true,
  },
  {
    language: 'Spanish',
    file: '/documents/Spanish%20-%202026%2008%2031%20Appeal%20to%20UN%20by%20ordinary%20people.pdf',
    available: true,
    primary: false,
  },
  {
    language: 'German',
    file: '/documents/German%20-%202026%2008%2031%20Appeal%20to%20UN%20by%20ordinary%20people%20.pdf',
    available: true,
    primary: false,
  },
  {
    language: 'French',
    file: '/documents/French%20-%202026%2008%2031%20Appeal%20to%20UN%20by%20ordinary%20people.pdf',
    available: true,
    primary: false,
  },
  {
    language: 'Dutch',
    file: null,
    available: false,
    primary: false,
  },
  {
    language: 'Hebrew',
    file: null,
    available: false,
    primary: false,
  },
  {
    language: 'Arabic',
    file: null,
    available: false,
    primary: false,
  },
];

export default function Document() {
  const primaryDocument = languageDocuments.find((doc) => doc.primary && doc.available) ?? languageDocuments[0];
  const secondaryDocuments = languageDocuments.filter((doc) => !doc.primary);

  return (
    <section id="document">
      <p className="eyebrow">The full document</p>
      <h2>Appeal to the United Nations<br /><span>by ordinary people</span></h2>

      <div className="document-container">
        <div className="document-featured">
          <div className="document-meta">
            <span className="document-tag">{primaryDocument.language}</span>
            <span className="document-date">Last updated: 6 September 2026</span>
          </div>
          <h3>{primaryDocument.language} appeal</h3>
          <p>
            Read the full appeal online or download the PDF to view it offline.
          </p>

          <div className="document-actions">
            <a href={primaryDocument.file ?? '#'} target="_blank" rel="noreferrer" className="document-button primary">
              Read online
            </a>
            <a href={primaryDocument.file ?? '#'} download className="document-button secondary">
              Download PDF
            </a>
          </div>
        </div>

        <div className="document-language-list">
          <p className="language-heading">Other languages</p>
          {secondaryDocuments.map((doc) => (
            <div key={doc.language} className={`language-item ${doc.available ? '' : 'disabled'}`}>
              <span>{doc.language}</span>
              {doc.available ? (
                <a href={doc.file ?? '#'} download className="language-download">Download</a>
              ) : (
                <span className="language-soon">Coming soon</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
