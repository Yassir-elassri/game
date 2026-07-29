import { useState } from 'react';
import { FadeIn } from '@/components/effects/MotionWrappers';
import { Send, Mail, MessageSquare, CheckCircle } from 'lucide-react';
import { SITE } from '@/lib/types';
import { useSEO } from '@/lib/useSEO';

type FormState = 'idle' | 'submitted';

export default function ContactPage() {
  useSEO({
    title: 'Contact Us',
    description: `Get in touch with the ${SITE.name} team. We respond to all questions, game suggestions, and partnership inquiries within 24–48 hours.`,
    canonical: '/contact',
  });

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [state, setState] = useState<FormState>('idle');
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email.';
    if (!form.subject.trim()) e.subject = 'Subject is required.';
    if (!form.message.trim()) e.message = 'Message is required.';
    else if (form.message.trim().length < 20) e.message = 'Message must be at least 20 characters.';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    // Open user's email client with pre-filled data
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    const subject = encodeURIComponent(`[${SITE.name}] ${form.subject}`);
    window.location.href = `mailto:support@gamesooty.com?subject=${subject}&body=${body}`;
    setState('submitted');
  };

  const field = (
    id: keyof typeof form,
    label: string,
    type: string = 'text',
    placeholder: string = ''
  ) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-white/80 mb-1">
        {label} <span className="text-gamesooty-pink">*</span>
      </label>
      <input
        id={id}
        type={type}
        value={form[id]}
        placeholder={placeholder}
        onChange={(e) => {
          setForm((f) => ({ ...f, [id]: e.target.value }));
          setErrors((er) => ({ ...er, [id]: undefined }));
        }}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gamesooty-purple focus:ring-1 focus:ring-gamesooty-purple transition-colors"
      />
      {errors[id] && <p className="text-red-400 text-xs mt-1">{errors[id]}</p>}
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      <FadeIn>
        <h1 className="text-4xl font-bold gradient-text mb-2">Contact Us</h1>
        <p className="text-white/50 mb-10">
          Questions, suggestions, or partnership inquiries — we&apos;d love to hear from you.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="glass-card p-5 flex items-start gap-3">
            <Mail className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#06b6d4' }} />
            <div>
              <p className="text-sm font-semibold text-white mb-1">Email Support</p>
              <a href="mailto:support@gamesooty.com" style={{ color: '#06b6d4' }} className="text-sm hover:underline">
                support@gamesooty.com
              </a>
              <p className="text-xs text-white/40 mt-1">Response within 24–48 hours</p>
            </div>
          </div>
          <div className="glass-card p-5 flex items-start gap-3">
            <MessageSquare className="w-5 h-5 mt-0.5 shrink-0" style={{ color: '#8b5cf6' }} />
            <div>
              <p className="text-sm font-semibold text-white mb-1">DMCA &amp; Legal</p>
              <a href="mailto:dmca@gamesooty.com" style={{ color: '#06b6d4' }} className="text-sm hover:underline">
                dmca@gamesooty.com
              </a>
              <p className="text-xs text-white/40 mt-1">Copyright notices handled promptly</p>
            </div>
          </div>
        </div>

        {state === 'submitted' ? (
          <div className="glass-card p-10 flex flex-col items-center text-center gap-4">
            <CheckCircle className="w-12 h-12" style={{ color: '#10b981' }} />
            <h2 className="text-xl font-semibold text-white">Message Sent!</h2>
            <p className="text-white/60 text-sm max-w-sm">
              Your email client should have opened with a pre-filled message. If it didn&apos;t,
              email us directly at{' '}
              <a href="mailto:support@gamesooty.com" style={{ color: '#06b6d4' }} className="hover:underline">
                support@gamesooty.com
              </a>.
            </p>
            <button
              className="btn-ghost text-sm px-5 py-2 mt-2"
              onClick={() => { setForm({ name: '', email: '', subject: '', message: '' }); setState('idle'); }}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="glass-card p-8 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              {field('name', 'Your Name', 'text', 'Jane Smith')}
              {field('email', 'Email Address', 'email', 'jane@example.com')}
            </div>
            {field('subject', 'Subject', 'text', 'Game suggestion, bug report, partnership…')}

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                Message <span className="text-gamesooty-pink">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                placeholder="Tell us what's on your mind…"
                onChange={(e) => {
                  setForm((f) => ({ ...f, message: e.target.value }));
                  setErrors((er) => ({ ...er, message: undefined }));
                }}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-gamesooty-purple focus:ring-1 focus:ring-gamesooty-purple transition-colors resize-none"
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>

            <button type="submit" className="btn-primary flex items-center gap-2 px-6 py-2.5">
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        )}
      </FadeIn>
    </div>
  );
}
