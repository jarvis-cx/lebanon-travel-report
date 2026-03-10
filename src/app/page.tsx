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
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm no-print">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-hide">
            <span className="text-xs font-bold text-gray-500 shrink-0 mr-2 hidden sm:block">🇱🇧 Lebanon Report</span>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="shrink-0 text-xs font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-3 py-1.5 rounded-full transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 pb-16">
        {/* Report Header */}
        <header className="py-10 border-b border-gray-200">
          <div className="flex items-start gap-4">
            <span className="text-5xl">🇱🇧</span>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                Lebanon Travel Safety Report
              </h1>
              <p className="text-xl text-gray-600 mt-1">August 2026 — Northern Christian Regions</p>
              <p className="text-gray-500 mt-2 text-sm">
                Jounieh · Byblos · Bcharre · Kesrouan/Metn
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">👨‍👩‍👧‍👦 2 adults + children aged 7 &amp; 9</span>
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">📅 2-week trip planned</span>
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">🇦🇺 Australian passport holders</span>
                <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">🗓️ Research date: 10 March 2026</span>
              </div>
            </div>
          </div>

          {/* Critical disclaimer */}
          <div className="mt-6 border-2 border-red-600 bg-red-50 rounded-xl p-5">
            <p className="font-bold text-red-800 mb-1">⚠️ Active Conflict — Critical Disclaimer</p>
            <p className="text-sm text-red-700">
              As of 10 March 2026, Lebanon is in an <strong>active armed conflict</strong> following Israeli airstrikes and ground invasion that began 2–3 March 2026. All Australian, UK, and US advisories are at their maximum ("Do Not Travel") levels. <strong>This report is written for decision-making about a potential August 2026 trip — 5 months away. Do not travel to Lebanon right now under any circumstances.</strong> All information should be re-verified before any travel decisions.
            </p>
          </div>
        </header>

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
        <footer className="py-8 text-center text-xs text-gray-400 border-t border-gray-200 mt-4">
          <p className="mb-1">Report compiled 10 March 2026.</p>
          <p className="mb-1">Sources: Smartraveller (DFAT), UK FCDO, US State Department, Wikipedia, The Guardian, Al Jazeera, Times of Israel, Atlantic Council, UN OHCHR, ACLED, Trading Economics.</p>
          <p>All information reflects conditions as of the research date. The situation in Lebanon is changing rapidly. Verify all information before travel decisions.</p>
        </footer>
      </main>
    </>
  )
}
