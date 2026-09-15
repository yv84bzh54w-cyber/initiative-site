export default function Header() {
  return (
    <header>
      <nav>
        <a href="#home" className="brand">
          <img className="brand-logo" src="/logo.png" alt="Rule of Law Appeal" />
          <span>Rule of Law<br />Appeal</span>
        </a>
        <a href="#about">About</a>
        <a href="#document">Document</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Get Involved</a>
        <div className="nav-socials" aria-label="Social media links">
          <a href="https://instagram.com/ruleoflawappeal" target="_blank" rel="noreferrer" className="nav-social">Instagram</a>
          <a href="https://bsky.app/profile/ruleoflawappeal.bsky.social" target="_blank" rel="noreferrer" className="nav-social">Bluesky</a>
        </div>
      </nav>
    </header>
  );
}
