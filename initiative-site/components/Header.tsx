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
      </nav>
    </header>
  );
}
