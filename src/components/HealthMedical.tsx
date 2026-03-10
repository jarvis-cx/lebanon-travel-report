export default function HealthMedical() {
  return (
    <section id="health" className="py-10 border-b border-gray-200">
      <h2 className="text-3xl font-bold mb-6">Health &amp; Medical</h2>

      {/* Insurance warning */}
      <div className="border-2 border-red-500 bg-red-50 rounded-xl p-5 mb-6">
        <h3 className="font-bold text-red-800 mb-2">⚠️ Travel Insurance — Critical Note</h3>
        <p className="text-sm text-red-700">
          Most travel insurance policies will <strong>NOT cover you</strong> if you travel against government "Do Not Travel" advice. This is currently a dealbreaker. Insurance becomes valid again once advisories drop to "Reconsider" or lower. Budget for a comprehensive family policy with medical evacuation: ~AUD $500–800 for 2 weeks, family of 4. Insurance must cover <strong>medical evacuation to Cyprus or Turkey</strong>.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Vaccinations */}
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-lg mb-3">💉 Vaccinations</h3>
          <div className="mb-3">
            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Required for entry</p>
            <p className="text-sm text-green-700">None required for entry from Australia</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Recommended (CDC/WHO)</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Hepatitis A</li>
              <li>• Hepatitis B</li>
              <li>• Typhoid</li>
              <li>• Ensure routine vaccinations are current: MMR, DTPa, Polio</li>
              <li>• Rabies: Consider if children will be around stray animals (common in rural Lebanon)</li>
              <li>• COVID-19: No specific requirements as of 2025/26</li>
            </ul>
          </div>
        </div>

        {/* Water & food */}
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-lg mb-3">💧 Water &amp; Food Safety</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2"><span className="text-red-600 font-bold shrink-0">✗</span><span><strong>Tap water is NOT safe to drink</strong> anywhere in Lebanon. Use bottled water exclusively — including for brushing teeth</span></li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold shrink-0">!</span><span>Ice in restaurants: variable quality — stick to known establishments</span></li>
            <li className="flex gap-2"><span className="text-green-600 font-bold shrink-0">✓</span><span>Street food in Jounieh/Byblos is generally safe if cooked fresh and from busy vendors</span></li>
            <li className="flex gap-2"><span className="text-green-600 font-bold shrink-0">✓</span><span>Restaurants in Christian areas are generally hygienic — standard Mediterranean/Middle Eastern food safety applies</span></li>
            <li className="flex gap-2"><span className="text-amber-600 font-bold shrink-0">!</span><span>For children: avoid salads washed in tap water, stick to cooked food — gastro risks are higher for kids</span></li>
          </ul>
        </div>
      </div>

      {/* Heat */}
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-6">
        <h3 className="font-bold text-orange-800 mb-2">☀️ August Heat (for ages 7 and 9)</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <p className="font-medium text-orange-700 mb-1">Coast (Jounieh, Byblos)</p>
            <p>27–32°C, high humidity (70–80%), virtually no rain. Hot but tempered by sea breeze.</p>
          </div>
          <div>
            <p className="font-medium text-orange-700 mb-1">Mountains (Bcharre, 1,400m)</p>
            <p>22–28°C, much drier, pleasant. Can be cool in evenings. Excellent escape from coastal heat.</p>
          </div>
        </div>
        <ul className="mt-3 space-y-1 text-sm text-gray-700">
          <li>• UV Index: Very high (8–10). Sunburn risk is serious — SPF 50+ essential</li>
          <li>• Avoid midday sun (12–3pm) with children</li>
          <li>• Constant hydration required — bottled water only</li>
          <li>• Consider scheduling Bcharre/mountain days mid-trip for relief from coastal heat</li>
        </ul>
      </div>

      {/* Hospitals */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
        <div className="bg-gray-100 px-5 py-3">
          <h3 className="font-bold text-lg">🏥 Hospitals Near Your Route</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-5 py-3 font-semibold text-gray-700">Hospital</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-700">Location</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-700">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { name: 'Notre Dame Hospital', location: 'Jounieh', notes: 'General hospital, good standard for the area' },
                { name: 'Saint Louis Hospital', location: 'Jounieh', notes: 'Near the Téléférique station' },
                { name: 'Notre Dame Maritime Hospital', location: 'Byblos (Jbeil)', notes: 'Coastal area, reasonable standard' },
                { name: 'Saint Georges Hospital', location: 'Ajaltoun, Mount Lebanon', notes: 'Between Jounieh and Beirut' },
                { name: 'Hôpital Bcharre', location: 'Bcharre', notes: 'Small/basic — emergency only; Tripoli or Jounieh for serious cases' },
                { name: 'Hôpital Tripoli Gouvernemental', location: 'Tripoli', notes: 'Larger facility, ~1.5hr from Bcharre' },
              ].map((h) => (
                <tr key={h.name} className="hover:bg-gray-50">
                  <td className="px-5 py-3 font-medium text-gray-900">{h.name}</td>
                  <td className="px-5 py-3 text-gray-600">{h.location}</td>
                  <td className="px-5 py-3 text-gray-600">{h.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-gray-700">
        <p><strong>Note on Lebanese medical system:</strong> Lebanon historically had excellent medical care (a medical tourism destination), but the economic crisis since 2019 caused an exodus of medical professionals, drug shortages, and reduced hospital capacity (per UNICEF). Private hospitals still function well for those who can pay in USD. Nearest advanced facilities outside Lebanon: Cyprus (45 min flight) or Turkey (1–2 hr).</p>
      </div>
    </section>
  )
}
