export default function RiskProfiles() {
  return (
    <section id="risk-profiles" className="section-card">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-1 h-8 rounded-full bg-blue-500" />
        <span className="text-2xl">🎯</span>
        <h2 className="text-2xl font-bold text-slate-900">Risk Profiles</h2>
      </div>
      <p className="text-slate-500 text-sm mb-7 pl-10">Find the recommendation that matches your risk tolerance.</p>

      <div className="grid md:grid-cols-3 gap-5">

        {/* Cautious */}
        <div className="border-2 border-red-200 bg-red-50 rounded-2xl p-6 flex flex-col">
          <div className="text-center mb-5">
            <span className="text-5xl">🔴</span>
            <h3 className="text-xl font-extrabold text-red-800 mt-3">Cautious</h3>
            <p className="text-red-600 font-semibold text-sm mt-1">We recommend waiting.</p>
          </div>
          <div className="bg-red-100 rounded-xl p-3 mb-5 text-red-800 text-sm leading-relaxed">
            The risk to children in a potential conflict escalation outweighs the experience. Wait for a more stable window — Lebanon will still be there.
          </div>
          <h4 className="font-bold text-red-800 mb-2 text-xs uppercase tracking-wider">Why wait</h4>
          <ul className="space-y-1.5 text-sm text-red-700 flex-1">
            {[
              'All governments at "Do Not Travel" as of March 2026',
              'Travel insurance invalid under current advisories',
              'Beirut airport can close at hours\' notice',
              'Medical evacuation with kids is high-stress',
              'Conflict escalation trajectory is uncertain',
            ].map(item => <li key={item} className="flex gap-2 items-start"><span className="shrink-0 text-red-400">•</span>{item}</li>)}
          </ul>
          <div className="mt-5 pt-4 border-t border-red-200">
            <p className="text-xs text-red-700 font-bold">Decision: Book nothing. Check again in June 2026.</p>
          </div>
        </div>

        {/* Moderate */}
        <div className="border-2 border-amber-300 bg-amber-50 rounded-2xl p-6 flex flex-col">
          <div className="text-center mb-5">
            <span className="text-5xl">🟡</span>
            <h3 className="text-xl font-extrabold text-amber-800 mt-3">Moderate</h3>
            <p className="text-amber-600 font-semibold text-sm mt-1">Go with precautions in place.</p>
          </div>
          <div className="bg-amber-100 rounded-xl p-3 mb-5 text-amber-800 text-sm leading-relaxed">
            If conditions stabilise, northern Lebanon is manageable with the right preparation. Go only if all GO signals are met.
          </div>
          <h4 className="font-bold text-amber-800 mb-2 text-xs uppercase tracking-wider">Must have in place</h4>
          <ul className="space-y-1.5 text-sm text-amber-700 flex-1">
            {[
              'Wait until May 2026 before booking anything',
              'Book 100% refundable flights and accommodation',
              'Obtain travel insurance with medevac to Cyprus',
              'Register with Smartraveller before departure',
              'Carry $3,000–5,000 USD cash',
              'Have a Cyprus evacuation plan ready',
              'Brief your children on "emergency drill" procedures',
            ].map(item => <li key={item} className="flex gap-2 items-start"><span className="shrink-0 text-amber-400">•</span>{item}</li>)}
          </ul>
          <div className="mt-5 pt-4 border-t border-amber-200">
            <p className="text-xs text-amber-700 font-bold">Decision: Monitor weekly. Book May 2026 at earliest.</p>
          </div>
        </div>

        {/* Adventurous */}
        <div className="border-2 border-green-300 bg-green-50 rounded-2xl p-6 flex flex-col">
          <div className="text-center mb-5">
            <span className="text-5xl">🟢</span>
            <h3 className="text-xl font-extrabold text-green-800 mt-3">Adventurous</h3>
            <p className="text-green-600 font-semibold text-sm mt-1">You can go — if signals are right.</p>
          </div>
          <div className="bg-green-100 rounded-xl p-3 mb-5 text-green-800 text-sm leading-relaxed">
            Northern Lebanon is genuinely special. Jeita Grotto, the Cedars, Byblos ruins — magical for kids. If conditions stabilise, do it.
          </div>
          <h4 className="font-bold text-green-800 mb-2 text-xs uppercase tracking-wider">Prepare for</h4>
          <ul className="space-y-1.5 text-sm text-green-700 flex-1">
            {[
              'August heat: 30–32°C coast, 25°C mountains',
              'Cash-only economy — bring USD',
              'Aggressive driving — consider a hired driver',
              'No tap water — bottled only, even for teeth',
              'Book Byblos Festival tickets early',
              'Mountain roads to Bcharre: 2.5-hour drive',
              'Spend 3–4 nights in Bcharre for cool air',
            ].map(item => <li key={item} className="flex gap-2 items-start"><span className="shrink-0 text-green-500">•</span>{item}</li>)}
          </ul>
          <div className="mt-5 pt-4 border-t border-green-200">
            <p className="text-xs text-green-700 font-bold">Decision: Book refundable in May 2026 if GO signals met.</p>
          </div>
        </div>

      </div>
    </section>
  )
}
