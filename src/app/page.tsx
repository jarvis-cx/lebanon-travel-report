import ExecutiveSummary from '@/components/ExecutiveSummary'
import RiskProfiles from '@/components/RiskProfiles'
import SecuritySituation from '@/components/SecuritySituation'
import GovernmentAdvisories from '@/components/GovernmentAdvisories'
import EntryRequirements from '@/components/EntryRequirements'
import HealthMedical from '@/components/HealthMedical'
import FamilyConsiderations from '@/components/FamilyConsiderations'
import GettingAround from '@/components/GettingAround'
import WhereToStay from '@/components/WhereToStay'
import MoneyEconomy from '@/components/MoneyEconomy'
import EmergencyContacts from '@/components/EmergencyContacts'
import AugustFactors from '@/components/AugustFactors'

const NAV_LINKS = [
  { href: '#executive-summary', label: 'Summary' },
  { href: '#risk-profiles', label: 'Risk Profiles' },
  { href: '#security', label: 'Security' },
  { href: '#advisories', label: 'Advisories' },
  { href: '#entry', label: 'Entry' },
  { href: '#health', label: 'Health' },
  { href: '#family', label: 'Family' },
  { href: '#getting-around', label: 'Getting Around' },
  { href: '#accommodation', label: 'Stay' },
  { href: '#money', label: 'Money' },
  { href: '#emergency', label: 'Emergency' },
  { href: '#august', label: 'August' },
]

export default function Home() {
  return (
    <>
      {/* ── Sticky Navigation ── */}
      <nav className="sticky top-0 z-50 bg-[#0f172a] shadow-lg no-print">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            <span className="text-xs font-bold text-slate-400 shrink-0 mr-3 hidden sm:block tracking-wider uppercase">
              🇱🇧 Lebanon Report
            </span>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="shrink-0 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 px-3 py-1.5 rounded-full transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <header className="bg-[#0f172a] text-white">
        <div className="max-w-5xl mx-auto px-4 py-14">
          <div className="flex items-start gap-5">
            <span className="text-6xl drop-shadow-lg">🇱🇧</span>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-400 mb-2">Travel Safety Report</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Lebanon
              </h1>
              <p className="text-xl text-slate-300 mt-1 font-medium">August 2026 · Northern Christian Regions</p>

              {/* Location pills */}
              <div className="flex flex-wrap gap-2 mt-4">
                {['Jounieh', 'Byblos', 'Bcharre', 'Kesrouan / Metn'].map(loc => (
                  <span key={loc} className="bg-white/10 text-slate-200 text-xs font-medium px-3 py-1 rounded-full border border-white/20">
                    📍 {loc}
                  </span>
                ))}
              </div>

              {/* Trip meta pills */}
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="bg-slate-700/60 text-slate-300 text-xs px-3 py-1 rounded-full">👨‍👩‍👧‍👦 2 adults + children 7 &amp; 9</span>
                <span className="bg-slate-700/60 text-slate-300 text-xs px-3 py-1 rounded-full">📅 2-week trip</span>
                <span className="bg-slate-700/60 text-slate-300 text-xs px-3 py-1 rounded-full">🇦🇺 Australian passports</span>
                <span className="bg-slate-700/60 text-slate-300 text-xs px-3 py-1 rounded-full">🗓️ Research: 10 Mar 2026</span>
              </div>
            </div>
          </div>

          {/* Critical disclaimer — inside hero */}
          <div className="mt-8 border border-red-500/40 bg-red-950/40 rounded-2xl p-5">
            <p className="font-bold text-red-400 mb-1">⚠️ Active Conflict — Critical Disclaimer</p>
            <p className="text-sm text-red-200/80">
              As of 10 March 2026, Lebanon is in an <strong className="text-red-300">active armed conflict</strong> following Israeli airstrikes and ground invasion that began 2–3 March 2026. All Australian, UK, and US advisories are at their maximum (&ldquo;Do Not Travel&rdquo;) levels.{' '}
              <strong className="text-red-300">This report is written for decision-making about a potential August 2026 trip — 5 months away. Do not travel to Lebanon right now.</strong>{' '}
              All information should be re-verified before any travel decisions.
            </p>
          </div>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main className="max-w-5xl mx-auto px-4 py-8 pb-16">
        <ExecutiveSummary />
        <RiskProfiles />
        <SecuritySituation />
        <GovernmentAdvisories />
        <EntryRequirements />
        <HealthMedical />
        <FamilyConsiderations />
        <GettingAround />
        <WhereToStay />
        <MoneyEconomy />
        <EmergencyContacts />
        <AugustFactors />

        {/* Footer */}
        <footer className="py-10 text-center text-xs text-slate-400 border-t border-slate-200 mt-4">
          <p className="mb-1 font-medium">Report compiled 10 March 2026.</p>
          <p className="mb-1">Sources: Smartraveller (DFAT), UK FCDO, US State Department, Wikipedia, The Guardian, Al Jazeera, Times of Israel, Atlantic Council, UN OHCHR, ACLED, Trading Economics.</p>
          <p>All information reflects conditions as of the research date. The situation in Lebanon is changing rapidly. Verify all information before travel decisions.</p>
        </footer>
      </main>
    </>
  )
}
