export default function ExecutiveSummary() {
  return (
    <section id="executive-summary" className="section-card">
      {/* Section heading */}
      <div className="flex items-center gap-3 mb-1">
        <div className="w-1 h-8 rounded-full bg-amber-500" />
        <span className="text-2xl">📋</span>
        <h2 className="text-2xl font-bold text-slate-900">Executive Summary</h2>
      </div>
      <p className="text-xs text-slate-400 mb-7 pl-10">Research date: 10 March 2026</p>

      {/* Critical warning */}
      <div className="border-l-4 border-red-500 bg-red-50 rounded-xl p-5 mb-7 flex gap-4 items-start">
        <span className="text-2xl shrink-0">🚨</span>
        <div>
          <p className="font-bold text-red-800 text-base mb-1">ACTIVE ARMED CONFLICT — March 2026</p>
          <p className="text-red-700 text-sm leading-relaxed">
            As of 10 March 2026, Lebanon is in an active armed conflict following the 2–3 March 2026 Israeli airstrikes and ground invasion. 394 people have been killed, 1,300 injured, and 500,000 displaced.{' '}
            <strong>Do not travel to Lebanon right now.</strong> This report assesses conditions for a potential August 2026 trip, which depends entirely on how the next 3–4 months unfold.
          </p>
        </div>
      </div>

      {/* Traffic light */}
      <div className="flex items-center gap-5 mb-7 p-5 bg-amber-50 border border-amber-200 rounded-2xl">
        <span className="text-5xl">🟡</span>
        <div>
          <p className="text-2xl font-extrabold text-amber-800">MODERATE RISK</p>
          <p className="text-amber-700 font-semibold">Conditional on ceasefire holding by May–June 2026</p>
          <p className="text-amber-600 text-sm mt-1">Current status: 🔴 DO NOT TRAVEL (all advisories)</p>
        </div>
      </div>

      {/* Key stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-7">
        {[
          { label: 'DFAT Advisory', value: 'DO NOT TRAVEL', color: 'text-red-600' },
          { label: 'US State Dept', value: 'Level 4', color: 'text-red-600' },
          { label: 'Medical (Private)', value: 'Functional', color: 'text-amber-600' },
          { label: 'Northern Lebanon', value: 'Historically Safe', color: 'text-green-600' },
        ].map(stat => (
          <div key={stat.label} className="bg-slate-50 rounded-xl p-4 border border-slate-100 text-center">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
            <p className={`text-sm font-bold leading-snug ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Bottom line */}
      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 mb-6">
        <h3 className="font-bold text-lg mb-3 text-slate-800">The Bottom Line</h3>
        <p className="text-slate-700 mb-2 text-sm leading-relaxed">
          <strong>August 2026 Northern Lebanon could be a moderate-risk trip</strong> — but only if a ceasefire is in place and holding by May–June 2026, Australian advisory drops to at least &ldquo;Reconsider,&rdquo; and Beirut airport is operating normally.
        </p>
        <p className="text-slate-700 mb-2 text-sm leading-relaxed">
          <strong>Recommended for</strong> families comfortable with contingency planning, who book fully refundable travel, monitor weekly, and have a clear evacuation plan via Cyprus.
        </p>
        <p className="text-slate-700 text-sm leading-relaxed">
          <strong>Not recommended if</strong> advisory remains at &ldquo;Do Not Travel&rdquo; in July 2026, if you cannot obtain comprehensive travel insurance with medevac, or if you have a low risk tolerance when travelling with children aged 7 and 9.
        </p>
      </div>

      {/* GO/NO-GO */}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
          <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
            <span className="text-lg">✅</span> GO Signals <span className="text-xs font-normal text-green-600">(all must be true)</span>
          </h3>
          <ul className="space-y-1.5 text-sm text-green-700">
            {[
              'Ceasefire holding for 2+ months',
              'Australian advisory downgraded to "Reconsider" (orange)',
              'Beirut airport operating normally with multiple airlines',
              'Comprehensive travel insurance with medevac obtainable',
              'Northern Lebanon free of military activity',
            ].map(item => (
              <li key={item} className="flex items-start gap-2"><span className="text-green-500 shrink-0">✓</span>{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
          <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
            <span className="text-lg">❌</span> NO-GO Signals <span className="text-xs font-normal text-red-600">(any one = cancel)</span>
          </h3>
          <ul className="space-y-1.5 text-sm text-red-700">
            {[
              'Advisory remains "Do Not Travel" in July 2026',
              'Active airstrikes anywhere in Lebanon',
              'Beirut airport operations disrupted',
              'Unable to obtain travel insurance',
              'Australian Embassy Beirut closed or evacuated',
            ].map(item => (
              <li key={item} className="flex items-start gap-2"><span className="text-red-500 shrink-0">✗</span>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
