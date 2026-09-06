export default function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Rule of Law Appeal. All rights reserved.</p>
      <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
        <a href="mailto:contact@ruleoflawappeal.org" style={{ color: '#0066cc' }}>contact@ruleoflawappeal.org</a>
      </p>
    </footer>
  );
}
