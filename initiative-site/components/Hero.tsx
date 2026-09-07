export default function Hero() {
  return (
    <section id="home" className="hero">
      <img className="hero-logo" src="/logo.png" alt="Rule of Law Appeal" />
      <p className="eyebrow">A declaration by ordinary people</p>
      <h1>An Appeal to the<br /><span>United Nations</span></h1>
      <div className="rule" aria-hidden="true" />
      <p className="hero-lead">We are calling for <strong>justice, accountability</strong> and <strong>respect for the Rule of Law.</strong></p>
      <p className="hero-copy">Read the Appeal, understand what we are asking of the United Nations, and learn how you can support it.</p>
      <a className="hero-link" href="#document">Read the Appeal <span aria-hidden="true">→</span></a>
    </section>
  );
}
