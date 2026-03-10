export default function WhereToStay() {
  return (
    <section id="accommodation" className="section-card">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-1 h-8 rounded-full bg-blue-500" />
        <span className="text-2xl">🏨</span>
        <h2 className="text-2xl font-bold text-slate-900">Where to Stay</h2>
      </div>
      <p className="text-slate-500 text-sm mb-6 pl-10">Accommodation options in Northern Lebanon.</p><div className="grid md:grid-cols-2 gap-5 mb-6">
        {/* Jounieh */}
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-green-500 text-xl">🟢</span>
            <h3 className="font-bold text-lg">Jounieh — Best Family Base</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">Coastal town 20km north of Beirut. Christian area, lively, good infrastructure. Close to Jeita Grotto, Harissa, easy day trips to Byblos.</p>
          <div className="grid grid-cols-3 gap-2 text-center text-xs mb-3">
            <div className="bg-gray-50 rounded p-2">
              <p className="text-gray-500">Budget</p>
              <p className="font-semibold">$20–50/night</p>
            </div>
            <div className="bg-gray-50 rounded p-2">
              <p className="text-gray-500">Mid-range</p>
              <p className="font-semibold">$70–120/night</p>
            </div>
            <div className="bg-gray-50 rounded p-2">
              <p className="text-gray-500">Upscale</p>
              <p className="font-semibold">$150–250/night</p>
            </div>
          </div>
          <p className="text-xs text-gray-500">Family-friendly options with pools widely available. Recommended 7 nights as main base.</p>
        </div>

        {/* Byblos */}
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-green-500 text-xl">🟢</span>
            <h3 className="font-bold text-lg">Byblos (Jbeil) — Best for Charm</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">Historic port town with UNESCO site. Quieter than Jounieh, beautiful setting. Walking distance to archaeological sites, harbour, restaurants.</p>
          <div className="grid grid-cols-3 gap-2 text-center text-xs mb-3">
            <div className="bg-gray-50 rounded p-2">
              <p className="text-gray-500">Budget</p>
              <p className="font-semibold">from $67/night</p>
            </div>
            <div className="bg-gray-50 rounded p-2">
              <p className="text-gray-500">Mid-range</p>
              <p className="font-semibold">$100–150/night</p>
            </div>
            <div className="bg-gray-50 rounded p-2">
              <p className="text-gray-500">Boutique</p>
              <p className="font-semibold">$200+/night</p>
            </div>
          </div>
          <p className="text-xs text-gray-500">Fewer family-specific amenities than Jounieh. Recommended 3–4 nights.</p>
        </div>

        {/* Bcharre */}
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-green-500 text-xl">🟢</span>
            <h3 className="font-bold text-lg">Bcharre — Mountain Escape</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">Mountain town at 1,400m elevation. Significantly cooler in August (22–28°C). Gateway to Cedars of God and Qadisha Valley.</p>
          <div className="grid grid-cols-2 gap-2 text-center text-xs mb-3">
            <div className="bg-gray-50 rounded p-2">
              <p className="text-gray-500">Small hotels</p>
              <p className="font-semibold">$40–100/night</p>
            </div>
            <div className="bg-gray-50 rounded p-2">
              <p className="text-gray-500">Guesthouses</p>
              <p className="font-semibold">$40–70/night</p>
            </div>
          </div>
          <p className="text-xs text-gray-500">Limited accommodation — book well ahead. Quieter, less touristy. Recommended 3–4 nights.</p>
        </div>

        {/* Batroun */}
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-amber-500 text-xl">🟡</span>
            <h3 className="font-bold text-lg">Batroun — Honourable Mention</h3>
          </div>
          <p className="text-sm text-gray-600 mb-3">Coastal town between Byblos and Tripoli. Beach clubs, old churches, craft beer scene. Emerging as a family destination.</p>
          <p className="text-xs text-gray-500">Worth a day trip or one overnight. Not recommended as a primary base.</p>
        </div>
      </div>

      {/* Suggested split */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <h3 className="font-bold text-blue-800 mb-2">📅 Suggested 2-Week Itinerary Split</h3>
        <div className="grid grid-cols-3 gap-4 text-center text-sm">
          <div>
            <p className="text-2xl font-bold text-blue-700">7</p>
            <p className="text-blue-600 font-medium">nights</p>
            <p className="text-gray-600">Jounieh base (day trips: Jeita, Harissa, Beirut if safe)</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-700">3–4</p>
            <p className="text-blue-600 font-medium">nights</p>
            <p className="text-gray-600">Byblos (explore ruins, harbour, Byblos Festival)</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-blue-700">3–4</p>
            <p className="text-blue-600 font-medium">nights</p>
            <p className="text-gray-600">Bcharre/Cedars (Qadisha, Gibran Museum, Baatara Gorge)</p>
          </div>
        </div>
      </div>

      {/* Areas to avoid */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-5">
        <h3 className="font-bold text-red-800 mb-3">🚫 Areas to Avoid</h3>
        <ul className="space-y-1 text-sm text-red-700">
          <li>• <strong>Southern Beirut suburbs (Dahieh)</strong> — Hezbollah stronghold, active conflict zone</li>
          <li>• <strong>South of Saida</strong> — Active military zone</li>
          <li>• <strong>Beqaa Valley / Baalbek</strong> — Despite spectacular ruins, FCDO advises against all travel</li>
          <li>• <strong>Tripoli</strong> — FCDO advises against all travel; historically unstable</li>
          <li>• <strong>Palestinian refugee camps</strong> — All advisories say avoid</li>
          <li>• <strong>Akkar</strong> — Northern border region, unstable</li>
        </ul>
      </div>
    </section>
  )
}
