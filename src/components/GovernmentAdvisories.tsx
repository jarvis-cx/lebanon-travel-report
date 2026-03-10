export default function GovernmentAdvisories() {
  return (
    <section id="advisories" className="py-10 border-b border-gray-200">
      <h2 className="text-3xl font-bold mb-6">Government Advisories</h2>
      <p className="text-sm text-gray-500 mb-6">As of 10 March 2026. All links open official government sources.</p>

      <div className="space-y-6">
        {/* Australia */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-red-600 px-6 py-3 flex items-center gap-3">
            <span className="text-white text-xl">🇦🇺</span>
            <h3 className="text-white font-bold text-lg">Australia — Smartraveller / DFAT</h3>
            <span className="ml-auto bg-white text-red-700 font-bold text-sm px-3 py-1 rounded-full">DO NOT TRAVEL</span>
          </div>
          <div className="p-6">
            <blockquote className="border-l-4 border-red-400 pl-4 text-gray-700 italic text-sm mb-4">
              "Do not travel to Lebanon due to the volatile security situation, armed conflict, civil unrest."
            </blockquote>
            <ul className="space-y-1 text-sm text-gray-700 mb-4">
              <li>• On 25 February 2026 (before March escalation), Australia ordered departure of all dependants of officials posted to Lebanon</li>
              <li>• Previously downgraded to "Reconsider" in September 2025 — now re-elevated to maximum</li>
              <li>• <strong>Critical:</strong> Travel insurance is invalidated while at "Do Not Travel" level</li>
            </ul>
            <a
              href="https://www.smartraveller.gov.au/destinations/middle-east/lebanon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              smartraveller.gov.au/destinations/middle-east/lebanon →
            </a>
          </div>
        </div>

        {/* UK */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-red-700 px-6 py-3 flex items-center gap-3">
            <span className="text-white text-xl">🇬🇧</span>
            <h3 className="text-white font-bold text-lg">United Kingdom — FCDO</h3>
            <span className="ml-auto bg-amber-400 text-amber-900 font-bold text-sm px-3 py-1 rounded-full">MIXED (zone-by-zone)</span>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-red-50 rounded-lg p-3">
                <p className="font-semibold text-red-800 text-sm mb-1">Against ALL travel:</p>
                <p className="text-xs text-gray-600">Southern Lebanon, Nabatiyeh, Beqaa, Baalbek-Hermel, Akkar, Tripoli, Palestinian refugee camps, southern Beirut suburbs, parts of Mount Lebanon south of Chouf/Deir el-Qamar line</p>
              </div>
              <div className="bg-amber-50 rounded-lg p-3">
                <p className="font-semibold text-amber-800 text-sm mb-1">Against all but ESSENTIAL travel:</p>
                <p className="text-xs text-gray-600">Rest of Beirut, rest of Mount Lebanon, rest of Northern Governorate — including Jounieh, Byblos, and Kesrouan/Metn area</p>
              </div>
            </div>
            <blockquote className="border-l-4 border-red-400 pl-4 text-gray-700 italic text-sm mb-4">
              "Since 2 March, conflict in Lebanon has escalated in response to regional events. Airstrikes and rocket attacks between Israel and Lebanese Hizballah have increased."
            </blockquote>
            <p className="text-sm text-gray-600 mb-3">British Embassy has temporarily withdrawn some staff and dependents.</p>
            <a
              href="https://www.gov.uk/foreign-travel-advice/lebanon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              gov.uk/foreign-travel-advice/lebanon →
            </a>
          </div>
        </div>

        {/* USA */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-red-800 px-6 py-3 flex items-center gap-3">
            <span className="text-white text-xl">🇺🇸</span>
            <h3 className="text-white font-bold text-lg">United States — State Department</h3>
            <span className="ml-auto bg-white text-red-800 font-bold text-sm px-3 py-1 rounded-full">LEVEL 4: DO NOT TRAVEL</span>
          </div>
          <div className="p-6">
            <blockquote className="border-l-4 border-red-400 pl-4 text-gray-700 italic text-sm mb-4">
              "Do Not Travel to Lebanon due to crime, terrorism, civil unrest, kidnapping, unexploded landmines, and the risk of armed conflict."
            </blockquote>
            <ul className="space-y-1 text-sm text-gray-700 mb-4">
              <li>• On 23 February 2026, ordered departure of non-emergency US government personnel and family members</li>
              <li>• Southern Lebanon and Syria border zone: Level 4 with "Depart If You Are There"</li>
            </ul>
            <a
              href="https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/lebanon-travel-advisory.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              travel.state.gov — Lebanon Travel Advisory →
            </a>
          </div>
        </div>
      </div>

      {/* Analysis */}
      <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-5">
        <h3 className="font-semibold mb-2">Analytical Assessment</h3>
        <p className="text-sm text-gray-700">
          All three governments are at maximum or near-maximum alert. Advisories were already elevated <em>before</em> the March 2 escalation. They will almost certainly remain elevated through at least Q2 2026. For August travel, you need to see: (1) a ceasefire holding for 2–3 months, (2) advisories downgraded to at minimum "Reconsider" (Australia) or "All but essential" (UK) for northern regions, and (3) Beirut airport operating normally. <strong>Travel insurance will be invalidated if you travel against "Do Not Travel" advice — this is the single biggest practical barrier.</strong>
        </p>
      </div>
    </section>
  )
}
