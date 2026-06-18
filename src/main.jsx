import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  CalendarDays,
  Check,
  CreditCard,
  FileText,
  FolderOpen,
  HelpCircle,
  Mail,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import './styles.css';

const supportEmail = 'sl140718@students.cavendish.ac.ug';

const features = [
  {
    icon: MessageSquareText,
    title: 'Caption generation',
    text: 'Draft clear captions for your own posts, campaigns, and everyday publishing workflow.',
  },
  {
    icon: CalendarDays,
    title: 'Content planning',
    text: 'Turn rough concepts into organized content ideas you can review and prepare later.',
  },
  {
    icon: FileText,
    title: 'Post preparation',
    text: 'Shape captions, notes, and publishing details before you move into your social apps.',
  },
  {
    icon: FolderOpen,
    title: 'Saved idea library',
    text: 'Keep ideas together so your next caption or post brief is easier to find and finish.',
  },
];

const steps = [
  'Sign up',
  'Choose one-time access or a subscription plan',
  'Use the tools online',
  'Manage your access or contact support',
];

const plans = [
  {
    name: 'One-time access',
    price: '$9',
    detail: 'A simple way to try the digital creator tools without recurring billing.',
  },
  {
    name: 'Monthly plan',
    price: '$5/month',
    detail: 'Ongoing access for creators who prepare content regularly.',
    featured: true,
  },
  {
    name: 'Yearly plan',
    price: '$49/year',
    detail: 'Annual access for creators who want a lower yearly total.',
  },
];

const faqs = [
  ['Is this a physical product?', 'No. BUSH K LIMITED is a digital SaaS tool for creator productivity.'],
  ['Do you ship anything?', 'No. Digital access is provided online and no physical goods are sold or shipped.'],
  [
    'Can I cancel my subscription?',
    'Yes. Customers can cancel anytime by contacting support or through their account when available.',
  ],
  [
    'Can I use the tool on any video?',
    'Only use content you created, own, or have permission to use.',
  ],
  ['How do I get access?', 'Access is delivered digitally after payment.'],
];

const policyPages = {
  '/terms': {
    title: 'Terms of Service',
    intro:
      'These terms explain the basic rules for using BUSH K LIMITED and the CreatorCaption tool.',
    sections: [
      {
        title: 'Use of the service',
        body:
          'You agree to use the service legally and responsibly. You may only process content that you created, own, or have clear permission to use.',
      },
      {
        title: 'Restricted activity',
        body:
          'You may not use the app for copyright violations, unauthorized copying or distribution, adult content, gambling, financial services, crypto activity, scams, illegal products, or regulated goods.',
      },
      {
        title: 'Digital access',
        body:
          'BUSH K LIMITED provides digital SaaS access only. Account access may depend on payment status, plan selection, and compliance with these terms.',
      },
      {
        title: 'Support',
        body:
          'For access questions, account help, cancellation requests, or policy concerns, contact support at sl140718@students.cavendish.ac.ug.',
      },
    ],
  },
  '/privacy': {
    title: 'Privacy Policy',
    intro:
      'This policy describes the information BUSH K LIMITED may collect to provide and improve the service.',
    sections: [
      {
        title: 'Information we may collect',
        body:
          'We may collect name, email address, payment status, account details, and usage data needed to provide digital access, support customers, and operate the service.',
      },
      {
        title: 'Payments',
        body:
          'Payments are processed securely by Stripe. We do not claim to store customer card details on this website.',
      },
      {
        title: 'How information is used',
        body:
          'Information may be used to create accounts, confirm access, respond to support requests, maintain security, and understand service usage.',
      },
      {
        title: 'Contact',
        body:
          'For privacy questions or requests, contact support at sl140718@students.cavendish.ac.ug.',
      },
    ],
  },
  '/refund': {
    title: 'Refund Policy',
    intro:
      'This policy explains refund and cancellation handling for digital access to BUSH K LIMITED.',
    sections: [
      {
        title: 'Digital product',
        body:
          'BUSH K LIMITED is a digital SaaS product. No physical goods are sold or shipped.',
      },
      {
        title: 'Refund requests',
        body:
          'Refunds may be requested within 7 days of purchase if the customer has not heavily used the service. Requests are reviewed based on account activity and applicable law.',
      },
      {
        title: 'Subscription cancellations',
        body:
          'Subscription cancellations stop future billing. They do not automatically refund past payments unless required by law.',
      },
      {
        title: 'How to request help',
        body:
          'To request a refund review or cancel access, email sl140718@students.cavendish.ac.ug with your account email and payment details.',
      },
    ],
  },
};

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/">
        <span className="brand-mark">BK</span>
        <span>BUSH K LIMITED</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="/#features">Features</a>
        <a href="/#pricing">Pricing</a>
        <a href="/#faq">FAQ</a>
        <a href="/#contact">Contact</a>
      </nav>
    </header>
  );
}

function HomePage() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">CreatorCaption by BUSH K LIMITED</p>
            <h1>Caption and content tools for creators</h1>
            <p className="hero-text">
              Generate captions, organize your own content ideas, and prepare posts faster.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#pricing">
                Get started
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="button secondary" href="#pricing">
                View pricing
              </a>
            </div>
          </div>
          <div className="product-panel" aria-label="CreatorCaption product preview">
            <div className="panel-top">
              <span className="status-dot" />
              <span>Creator workspace</span>
            </div>
            <div className="draft-card">
              <span className="small-label">Caption draft</span>
              <p>Turn your post idea into a concise caption with a clear call to action.</p>
            </div>
            <div className="mini-grid">
              <div>
                <Sparkles size={20} aria-hidden="true" />
                Ideas
              </div>
              <div>
                <FileText size={20} aria-hidden="true" />
                Briefs
              </div>
              <div>
                <Check size={20} aria-hidden="true" />
                Ready
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="features">
          <div className="section-heading">
            <p className="eyebrow">What it does</p>
            <h2>Simple tools for creators preparing their own content</h2>
            <p>
              BUSH K LIMITED is built for content you own, created yourself, or have permission
              to use.
            </p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article className="card" key={feature.title}>
                  <Icon className="card-icon" size={24} aria-hidden="true" />
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section muted">
          <div className="section-heading">
            <p className="eyebrow">How it works</p>
            <h2>Clear access from signup to support</h2>
          </div>
          <div className="steps">
            {steps.map((step, index) => (
              <article className="step" key={step}>
                <span>{index + 1}</span>
                <h3>{step}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="section-heading">
            <p className="eyebrow">Pricing</p>
            <h2>Choose the access option that fits your workflow</h2>
          </div>
          <div className="pricing-grid">
            {plans.map((plan) => (
              <article className={`price-card ${plan.featured ? 'featured' : ''}`} key={plan.name}>
                <h3>{plan.name}</h3>
                <p className="price">{plan.price}</p>
                <p>{plan.detail}</p>
                <a className="button plan-button" href="#contact">
                  Request access
                </a>
              </article>
            ))}
          </div>
          <div className="payment-note">
            <CreditCard size={20} aria-hidden="true" />
            <p>
              Payments are processed securely through Stripe. Digital access only. No physical
              goods are sold or shipped.
            </p>
          </div>
        </section>

        <section className="section policy-band">
          <div>
            <p className="eyebrow">Responsible use policy</p>
            <h2>For content you own or have permission to use</h2>
          </div>
          <p>
            Users must only process content they own, created themselves, or have permission to use.
            We do not support copyright violations, unauthorized copying or distribution, adult
            content, gambling, financial services, crypto, scams, illegal products, or regulated
            products.
          </p>
        </section>

        <section className="section muted" id="faq">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2>Common questions</h2>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <article className="faq-item" key={question}>
                <HelpCircle size={20} aria-hidden="true" />
                <div>
                  <h3>{question}</h3>
                  <p>{answer}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="section-heading">
            <p className="eyebrow">Contact</p>
            <h2>Support and access help</h2>
            <p>
              Email <a href={`mailto:${supportEmail}`}>{supportEmail}</a> for support, cancellation,
              refund, or access questions.
            </p>
            <p className="socials">Social: TikTok / Instagram</p>
          </div>
          <form className="contact-form" action={`mailto:${supportEmail}`} method="post" encType="text/plain">
            <label>
              Name
              <input name="name" type="text" placeholder="Your name" />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="you@example.com" />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" placeholder="How can we help?" />
            </label>
            <button className="button primary" type="submit">
              <Mail size={18} aria-hidden="true" />
              Email support
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

function PolicyPage({ page }) {
  return (
    <main className="policy-page">
      <section className="policy-hero">
        <p className="eyebrow">BUSH K LIMITED</p>
        <h1>{page.title}</h1>
        <p>{page.intro}</p>
      </section>
      <section className="policy-content">
        {page.sections.map((section) => (
          <article className="policy-card" key={section.title}>
            <ShieldCheck size={22} aria-hidden="true" />
            <div>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>BUSH K LIMITED provides digital creator productivity tools.</p>
      <nav aria-label="Footer navigation">
        <a href="/terms">Terms of Service</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/refund">Refund Policy</a>
        <a href="/#contact">Contact</a>
      </nav>
    </footer>
  );
}

function App() {
  const page = policyPages[window.location.pathname];

  React.useEffect(() => {
    const title = page
      ? `${page.title} | BUSH K LIMITED`
      : 'BUSH K LIMITED | Caption and content tools for creators';
    const description = page
      ? `${page.title} for BUSH K LIMITED, a digital SaaS creator productivity tool.`
      : 'BUSH K LIMITED helps individual creators generate captions, organize content ideas, and prepare posts faster with clear digital access options.';
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', description);
  }, [page]);

  return (
    <>
      <Header />
      {page ? <PolicyPage page={page} /> : <HomePage />}
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
