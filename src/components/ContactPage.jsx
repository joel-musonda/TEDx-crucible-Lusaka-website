import React, { useState } from 'react';
import GlobeStudy from './ui/globe-study';
import PageHero from './PageHero';
import { BRAND_RED } from '../theme';

const RECIPIENT_EMAIL = 'joel.musonda@cruciblelusaka.org';

export default function ContactPage() {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const buildMailtoHref = () => {
    const subject = senderName.trim()
      ? `TEDx Crucible Lusaka Inquiry from ${senderName.trim()}`
      : 'TEDx Crucible Lusaka Inquiry';

    const bodyLines = [
      message.trim(),
      senderName.trim() ? `\nFrom: ${senderName.trim()}` : '',
      senderEmail.trim() ? `Reply to: ${senderEmail.trim()}` : '',
    ].filter(Boolean);

    const params = new URLSearchParams({
      subject,
      body: bodyLines.join('\n'),
    });

    return `mailto:${RECIPIENT_EMAIL}?${params.toString()}`;
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    window.location.href = buildMailtoHref();
  };

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(RECIPIENT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-ted-red selection:text-white">
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Get in touch with{' '}
            <span className="break-words text-ted-red">TEDx Crucible Lusaka.</span>
          </>
        }
        description="Questions about the event, speaking, or partnerships? Email us directly, or use the form below to open a draft in your email app."
        actions={
          <>
            <a
              href={`mailto:${RECIPIENT_EMAIL}`}
              className="group inline-flex items-center justify-center gap-2 rounded-none bg-ted-red px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-ted-red-hover"
            >
              Email the team
            </a>
            <button
              type="button"
              onClick={handleCopyAddress}
              className="inline-flex items-center justify-center gap-2 rounded-none border border-white/25 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-white hover:bg-white/10"
            >
              {copied ? 'Address copied' : 'Copy email address'}
            </button>
          </>
        }
        meta={
          <>
            <span>Lusaka, Zambia</span>
            <span>Speaking · Partnerships · Press</span>
          </>
        }
      />

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 md:px-12 md:pt-24 lg:px-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-6 lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                Email
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-4">
                <div className="min-w-0">
                  <a
                    href={`mailto:${RECIPIENT_EMAIL}`}
                    className="break-all text-sm font-semibold text-white transition-colors hover:text-ted-red sm:text-base"
                  >
                    {RECIPIENT_EMAIL}
                  </a>
                  <p className="mt-1 text-xs text-white/45">
                    For speaking, partnerships, and general questions.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="shrink-0 rounded-full border border-white/25 px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:border-ted-red hover:bg-ted-red hover:text-white"
                >
                  {copied ? 'Copied' : 'Copy address'}
                </button>
              </div>
              <span className="sr-only" aria-live="polite">
                {copied ? 'Email address copied' : ''}
              </span>
            </div>

            <form
              onSubmit={handleSendEmail}
              className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-white">
                  Send a message
                </h2>
                <span className="text-[10px] uppercase tracking-[0.16em] text-white/35">
                  Opens in your email app
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="min-w-0 space-y-1.5">
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-white/80">
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-white/15 bg-black/60 px-4 py-2.5 text-sm text-white placeholder:text-white/35 transition-colors focus:border-ted-red focus:outline-none"
                  />
                </div>
                <div className="min-w-0 space-y-1.5">
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-white/80">
                    Your email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-white/15 bg-black/60 px-4 py-2.5 text-sm text-white placeholder:text-white/35 transition-colors focus:border-ted-red focus:outline-none"
                  />
                </div>
              </div>

              <div className="min-w-0 space-y-1.5">
                <label htmlFor="contact-message" className="block text-xs font-semibold text-white/80">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message"
                  className="w-full resize-none rounded-lg border border-white/15 bg-black/60 px-4 py-3 text-sm text-white placeholder:text-white/35 transition-colors focus:border-ted-red focus:outline-none"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                <p className="max-w-xs text-xs leading-relaxed text-white/45">
                  Nothing is stored on this site. Your message opens in your email app, ready to
                  send.
                </p>
                <button
                  type="submit"
                  className="rounded-full bg-ted-red px-7 py-3 text-xs font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-ted-red-hover"
                >
                  Open email draft
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B0C0E]">
              <div className="h-[340px] sm:h-[420px]">
                <GlobeStudy
                  background="#0B0C0E"
                  baseColor={BRAND_RED}
                  phrase="tedxcruciblelusaka"
                  style={{
                    minWidth: 0,
                    minHeight: 0,
                    width: '100%',
                    height: '100%',
                  }}
                />
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-4">
                <p className="text-xs text-white/60">Based in Lusaka, Zambia.</p>
                <span className="h-2 w-2 shrink-0 rounded-full bg-ted-red" aria-hidden="true" />
              </div>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-white/45">
              TEDx Crucible Lusaka is independently organised by students at Crucible Lusaka under
              a licence from TED.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
