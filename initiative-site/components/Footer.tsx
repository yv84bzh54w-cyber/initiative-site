export default function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Our Initiative. All rights reserved.</p>
      <p style={{ marginTop: '10px', fontSize: '0.9rem' }}>
        <a href="mailto:contact@example.com" style={{ color: '#0066cc' }}>contact@example.com</a>
      </p>
    </footer>
  );
}
