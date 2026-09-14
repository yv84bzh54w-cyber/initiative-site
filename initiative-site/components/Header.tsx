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
        <a href="#contact">Contact</a>
        <div className="nav-socials" aria-label="Social media links">
          <a href="https://instagram.com/ruleoflawappeal" target="_blank" rel="noreferrer" className="nav-social" aria-label="Instagram">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3.5" y="3.5" width="17" height="17" rx="4"></rect>
              <circle cx="12" cy="12" r="4.2"></circle>
              <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"></circle>
            </svg>
          </a>
          <a href="https://bsky.app/profile/ruleoflawappeal.bsky.social" target="_blank" rel="noreferrer" className="nav-social" aria-label="Bluesky">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 6.5c2.1 0 3.6 1.1 4.5 2.7.9-1.6 2.4-2.7 4.5-2.7 2.1 0 3.8 1.6 3.8 4.1 0 5.4-7.4 7.5-8.3 8.5-.9-1-8.3-3.1-8.3-8.5 0-2.5 1.7-4.1 3.8-4.1Z"></path>
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
}
