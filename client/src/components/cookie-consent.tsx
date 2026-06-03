import { useState, useEffect } from "react";
import { Link } from "wouter";

const STORAGE_KEY = "tilz-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const setChoice = (choice: "accepted" | "rejected") => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* ignore storage errors */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
      data-testid="cookie-consent-banner"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row md:items-center gap-4">
        <p className="text-sm text-[#475569] flex-1">
          We use cookies to run this site and, with your consent, to measure traffic and improve
          your experience. You can accept or reject non-essential cookies. Read our{" "}
          <Link href="/cookie-policy">
            <span className="text-[#1E40AF] font-semibold underline cursor-pointer">
              Cookie Policy
            </span>
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => setChoice("rejected")}
            className="px-5 py-2.5 rounded-md text-sm font-semibold border border-slate-300 text-[#0F172A] hover:bg-slate-50 transition-colors"
            data-testid="button-cookie-reject"
          >
            Reject all
          </button>
          <button
            type="button"
            onClick={() => setChoice("accepted")}
            className="px-5 py-2.5 rounded-md text-sm font-semibold bg-[#1E40AF] text-white hover:bg-[#1E3A8A] transition-colors"
            data-testid="button-cookie-accept"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
