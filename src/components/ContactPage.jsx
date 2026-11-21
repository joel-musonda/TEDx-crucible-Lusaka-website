import React, { useState } from 'react';
import GlobeStudy from './ui/globe-study';

const RECIPIENT_EMAIL = 'joel.musonda@cruciblelusaka.org';
const HERO_RED = '#d90429';

export default function ContactPage() {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const buildMailtoHref = () => {
    const subject = senderName.trim()
      ? `TEDxCrucibleLusaka Inquiry from ${senderName.trim()}`
      : 'TEDxCrucibleLusaka Inquiry';

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
    <div className="min-h-screen bg-black text-white selection:bg-[#d90429] selection:text-white pt-28 pb-20 px-6 md:px-12 lg:px-16 overflow-x-clip">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Contact Info & Send Email */}
        <div className="lg:col-span-6 min-w-0 space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.04] text-white break-words">
              Get in Touch With{' '}
              <span style={{ color: HERO_RED }} className="break-all sm:break-words">
                TEDxCrucibleLusaka.
              </span>
            </h1>
            <p className="text-sm md:text-base text-white/85 leading-relaxed max-w-xl">
              Questions about the event, speakers, partnerships, or Crucible Lusaka? Reach out directly.
            </p>
          </div>

          <div className="rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/15 p-6 md:p-8 space-y-6 shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/15">
              <div className="min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/60 block">
                  Direct Email
                </span>
                <a
                  href={`mailto:${RECIPIENT_EMAIL}`}
                  className="text-sm sm:text-base font-semibold text-white hover:text-[#d90429] transition-colors break-all"
                >
                  {RECIPIENT_EMAIL}
                </a>
              </div>
              <button
                type="button"
                onClick={handleCopyAddress}
                className="text-xs font-semibold px-3.5 py-1.5 rounded-full border border-white/25 text-white hover:bg-white hover:text-black transition-colors cursor-pointer shrink-0"
              >
                {copied ? 'Copied' : 'Copy Address'}
              </button>
            </div>

            <form onSubmit={handleSendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5 min-w-0">
                  <label htmlFor="contact-name" className="text-xs font-semibold text-white block">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-xl bg-black/70 border border-white/20 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#d90429]"
                  />
                </div>
                <div className="space-y-1.5 min-w-0">
                  <label htmlFor="contact-email" className="text-xs font-semibold text-white block">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl bg-black/70 border border-white/20 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#d90429]"
                  />
                </div>
              </div>

              <div className="space-y-1.5 min-w-0">
                <label htmlFor="contact-message" className="text-xs font-semibold text-white block">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message..."
                  className="w-full rounded-xl bg-black/70 border border-white/20 px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#d90429] resize-none"
                />
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  style={{ backgroundColor: HERO_RED }}
                  className="hover:opacity-90 text-white text-xs font-bold uppercase tracking-[0.2em] px-7 py-3.5 rounded-full transition-opacity cursor-pointer shadow-lg"
                >
                  Send Email
                </button>
                <a
                  href={`mailto:${RECIPIENT_EMAIL}`}
                  className="text-xs font-semibold text-white hover:underline underline-offset-4"
                >
                  Open Mail App Directly
                </a>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column: Interactive Globe */}
        <div className="lg:col-span-6 min-w-0">
          <div className="h-[460px] sm:h-[540px] lg:h-[600px] w-full rounded-2xl overflow-hidden border border-white/15 bg-[#0B0C0E] shadow-2xl">
            <GlobeStudy
              background="#0B0C0E"
              baseColor={HERO_RED}
              phrase="tedxcruciblelusakalusaka"
              style={{
                minWidth: 0,
                minHeight: 0,
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}