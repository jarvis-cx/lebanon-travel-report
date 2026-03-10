export default function EntryRequirements() {
  return (
    <section id="entry" className="section-card">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-1 h-8 rounded-full bg-blue-500" />
        <span className="text-2xl">✈️</span>
        <h2 className="text-2xl font-bold text-slate-900">Entry Requirements</h2>
      </div>
      <p className="text-slate-500 text-sm mb-6 pl-10">For Australian passport holders. Verify all details before travel.</p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Visa */}
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-lg mb-3">🛂 Visa on Arrival</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2"><span className="text-green-600 font-bold shrink-0">✓</span> Visa on arrival available for Australian citizens at Beirut-Rafic Hariri International Airport</li>
            <li className="flex gap-2"><span className="text-green-600 font-bold shrink-0">✓</span> Free 1-month visa stamped on arrival — extendable to 3 months at General Security offices</li>
            <li className="flex gap-2"><span className="text-green-600 font-bold shrink-0">✓</span> No eVisa system required — simply a stamp at immigration</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold shrink-0">!</span> Passport must be valid for at least 6 months beyond date of entry</li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold shrink-0">!</span> Children: same requirements — each child needs their own passport</li>
          </ul>
        </div>

        {/* Airport */}
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-lg mb-3">✈️ Beirut Airport</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• <strong>Rafic Hariri International Airport</strong> — the only commercial airport</li>
            <li>• Immigration can be slow (30–60 min queues) but straightforward for Australians</li>
            <li>• Airport is in southern Beirut suburbs — this area has been subject to airstrikes and evacuation orders in March 2026</li>
            <li>• <strong>Current status (March 2026):</strong> "Open and operational" per FCDO, but extremely fluid. Airlines may cancel flights at short notice.</li>
          </ul>
        </div>
      </div>

      {/* Israel stamp warning */}
      <div className="border-2 border-red-500 bg-red-50 rounded-xl p-5 mb-6">
        <div className="flex items-start gap-3">
          <span className="text-2xl shrink-0">⚠️</span>
          <div>
            <h3 className="font-bold text-red-800 text-lg mb-2">Israeli Passport Stamp Warning</h3>
            <p className="text-sm text-red-700 mb-2">
              Lebanon refuses entry to anyone with Israeli stamps, visas, or evidence of travel to Israel in their passport.
            </p>
            <ul className="space-y-1 text-sm text-red-700">
              <li>• Israel no longer stamps passports (since 2013 — they use a paper entry slip)</li>
              <li>• But: any Israeli visa sticker, or entry/exit stamps from land borders near Israel (Jordan/Egypt crossings), could cause issues</li>
              <li>• If you've visited Israel, ensure your passport has no evidence of this</li>
              <li>• If in doubt: <strong>renew your passport before travel</strong></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Declarations */}
      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <h3 className="font-bold text-lg mb-3">📋 What to Declare</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• Currency: Amounts over USD $10,000 must be declared at customs</li>
          <li>• Medications: Carry prescription medications in original packaging with a doctor's letter</li>
          <li>• No specific additional declaration requirements for Australians beyond standard customs rules</li>
          <li>• Photography restrictions: Avoid photographing military installations, government buildings, ports</li>
        </ul>
      </div>
    </section>
  )
}
