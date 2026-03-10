export default function ExecutiveSummary() {
  return (
    <section id="executive-summary" className="py-10 border-b border-gray-200">
      <h2 className="text-3xl font-bold mb-2">Executive Summary</h2>
      <p className="text-sm text-gray-500 mb-6">Research date: 10 March 2026</p>

      {/* Critical warning */}
      <div className="border-2 border-red-600 bg-red-50 rounded-lg p-5 mb-8">
        <div className="flex items-start gap-3">
          <span className="text-2xl">🚨</span>
          <div>
            <p className="font-bold text-red-800 text-lg mb-1">ACTIVE ARMED CONFLICT — March 2026</p>
            <p className="text-red-700 text-sm">
              As of 10 March 2026, Lebanon is in an active armed conflict following the 2–3 March 2026 Israeli airstrikes and ground invasion. 394 people have been killed, 1,300 injured, and 500,000 displaced. <strong>Do not travel to Lebanon right now.</strong> This report assesses conditions for a potential August 2026 trip, which depends entirely on how the next 3–4 months unfold.
            </p>
          </div>
        </div>
      </div>

      {/* Traffic light */}
      <div className="flex items-center gap-4 mb-8 p-5 bg-amber-50 border border-amber-300 rounded-lg">
        <span className="text-5xl">🟡</span>
        <div>
          <p className="text-2xl font-bold text-amber-800">MODERATE RISK</p>
          <p className="text-amber-700 font-medium">Conditional on ceasefire holding by May–June 2026</p>
          <p className="text-amber-600 text-sm mt-1">Current status: 🔴 DO NOT TRAVEL (all advisories)</p>
        </div>
      </div>

      {/* Key stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">DFAT Advisory</p>
          <p className="text-lg font-bold text-red-600">DO NOT TRAVEL</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">US State Dept</p>
          <p className="text-lg font-bold text-red-600">Level 4</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Medical (Private)</p>
          <p className="text-lg font-bold text-amber-600">Functional</p>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
          <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Northern Lebanon</p>
          <p className="text-lg font-bold text-green-600">Historically Safe</p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h3 className="font-bold text-lg mb-3">The Bottom Line</h3>
        <p className="text-gray-700 mb-2">
          <strong>August 2026 Northern Lebanon could be a moderate-risk trip</strong> — but only if a ceasefire is in place and holding by May–June 2026, Australian advisory drops to at least "Reconsider," and Beirut airport is operating normally.
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Recommended for</strong> families comfortable with contingency planning, who book fully refundable travel, monitor weekly, and have a clear evacuation plan via Cyprus.
        </p>
        <p className="text-gray-700">
          <strong>Not recommended if</strong> advisory remains at "Do Not Travel" in July 2026, if you cannot obtain comprehensive travel insurance with medevac, or if you have a low risk tolerance when travelling with children aged 7 and 9.
        </p>
      </div>

      {/* GO/NO-GO */}
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-5">
          <h3 className="font-bold text-green-800 mb-3">✅ GO Signals (all must be true)</h3>
          <ul className="space-y-1 text-sm text-green-700">
            <li>✓ Ceasefire holding for 2+ months</li>
            <li>✓ Australian advisory downgraded to "Reconsider" (orange)</li>
            <li>✓ Beirut airport operating normally with multiple airlines</li>
            <li>✓ Comprehensive travel insurance with medevac obtainable</li>
            <li>✓ Northern Lebanon free of military activity</li>
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-lg p-5">
          <h3 className="font-bold text-red-800 mb-3">❌ NO-GO Signals (any one = cancel)</h3>
          <ul className="space-y-1 text-sm text-red-700">
            <li>✗ Advisory remains "Do Not Travel" in July 2026</li>
            <li>✗ Active airstrikes anywhere in Lebanon</li>
            <li>✗ Beirut airport operations disrupted</li>
            <li>✗ Unable to obtain travel insurance</li>
            <li>✗ Australian Embassy Beirut closed or evacuated</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
