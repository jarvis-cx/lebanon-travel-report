export default function SecuritySituation() {
  return (
    <section id="security" className="py-10 border-b border-gray-200">
      <h2 className="text-3xl font-bold mb-6">Security Situation</h2>

      {/* March 2026 escalation */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-red-700">🚨 March 2026 Escalation (Active Conflict)</h3>
        <div className="border-l-4 border-red-500 space-y-0">
          {[
            { date: '28 Feb 2026', event: 'US and Israel launch joint strikes against Iran ("2026 Iran war")' },
            { date: '2 Mar 2026', event: 'Hezbollah launches retaliatory strikes on northern Israel following assassination of Ali Khamenei' },
            { date: '2–3 Mar 2026', event: 'Israel responds with airstrikes on Beirut, southern Lebanon, and Baalbek-Hermel' },
            { date: '3 Mar 2026', event: 'Israel authorises ground invasion of Lebanon' },
            { date: '4 Mar 2026', event: 'IDF issues evacuation warnings for 13 villages; orders everyone south of Litani River to leave; warns Beirut southern suburbs' },
            { date: '10 Mar 2026', event: 'Conflict ongoing: 394 killed, 1,300 injured, 500,000 displaced in Lebanon' },
          ].map(({ date, event }) => (
            <div key={date} className="flex gap-4 pl-4 pb-4">
              <div className="w-28 shrink-0 text-sm font-semibold text-red-600">{date}</div>
              <div className="text-sm text-gray-700">{event}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-2">Sources: Wikipedia "2026 Hezbollah–Israel war"; ACLED March 2026; UK House of Commons Library (9 Mar 2026)</p>
      </div>

      {/* Background */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Background (2024–2026)</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li className="flex gap-2"><span className="text-gray-400 shrink-0">Nov 2024</span><span>US-brokered ceasefire between Israel and Hezbollah after Israel invaded southern Lebanon and killed Hezbollah leader Hassan Nasrallah</span></li>
          <li className="flex gap-2"><span className="text-gray-400 shrink-0">Feb 2025</span><span>IDF withdrew from most of southern Lebanon, retaining 5 strategic border posts</span></li>
          <li className="flex gap-2"><span className="text-gray-400 shrink-0">2025</span><span>Near-daily Israeli ceasefire violations (500+ airstrikes per OHCHR); Lebanese Armed Forces made progress disarming Hezbollah south of Litani</span></li>
          <li className="flex gap-2"><span className="text-gray-400 shrink-0">Sep 2025</span><span>Australia <em>downgraded</em> advisory from "Do Not Travel" to "Reconsider" — brief window of optimism</span></li>
          <li className="flex gap-2"><span className="text-gray-400 shrink-0">End 2025</span><span>Deadline for Hezbollah disarmament south of Litani passed — Lebanese government said "nearly done," Israel said "insufficient"</span></li>
          <li className="flex gap-2"><span className="text-gray-400 shrink-0">Feb 2026</span><span>Australia orders departure of all dependants of officials posted to Lebanon, ahead of March escalation</span></li>
        </ul>
      </div>

      {/* Northern vs South */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Northern Christian Lebanon vs South Lebanon</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h4 className="font-bold text-green-800 mb-3">🟢 Northern Christian Regions</h4>
            <p className="text-sm text-gray-700 mb-2">Jounieh, Byblos (Jbeil), Bcharre, Kesrouan, Metn — Mount Lebanon and North Governorate</p>
            <ul className="space-y-1 text-sm text-green-700">
              <li>✓ Predominantly Christian areas</li>
              <li>✓ No significant Hezbollah military presence</li>
              <li>✓ Largely untouched by airstrikes in 2024 conflict</li>
              <li>✓ Bcharre/Qadisha Valley: remote mountain town, very far from conflict</li>
              <li>✓ Historically safe through 2006 war, 2019–23 economic crisis, 2024 conflict</li>
            </ul>
            <p className="text-xs text-gray-500 mt-3">Risk: Getting in/out via Beirut; being trapped if things escalate</p>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-5">
            <h4 className="font-bold text-red-800 mb-3">🔴 Southern Lebanon & Other Areas</h4>
            <ul className="space-y-1 text-sm text-red-700">
              <li>✗ Southern Lebanon: active military zone</li>
              <li>✗ Beirut southern suburbs (Dahieh): Hezbollah stronghold, airstrike target</li>
              <li>✗ Baalbek-Hermel: current airstrike target</li>
              <li>✗ Beqaa Valley: FCDO advises against all travel</li>
              <li>✗ Tripoli: historically unstable, FCDO advises against all travel</li>
              <li>✗ Akkar: northern border region, unstable</li>
            </ul>
          </div>
        </div>
      </div>

      {/* August outlook */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
        <h3 className="font-semibold text-blue-800 mb-2">August 2026 Outlook</h3>
        <p className="text-sm text-gray-700 mb-2">
          Impossible to predict with certainty. The 2024 conflict led to a ceasefire within ~2 months. If this follows a similar pattern, a ceasefire could be in place by May–June 2026.
        </p>
        <p className="text-sm text-gray-700">
          Key factors: Whether the US–Iran war de-escalates; whether Hezbollah's military capacity is further degraded; whether a new ceasefire is brokered. <strong>Do not book until at least May 2026. Monitor weekly.</strong> The situation in northern Lebanon specifically could be safe long before southern Lebanon stabilises.
        </p>
      </div>
    </section>
  )
}
