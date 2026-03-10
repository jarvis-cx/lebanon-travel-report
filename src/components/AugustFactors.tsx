export default function AugustFactors() {
  return (
    <section id="august" className="section-card">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-1 h-8 rounded-full bg-amber-500" />
        <span className="text-2xl">☀️</span>
        <h2 className="text-2xl font-bold text-slate-900">August-Specific Factors</h2>
      </div>
      <p className="text-slate-500 text-sm mb-6 pl-10">Seasonal factors specific to an August 2026 visit.</p><div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Weather */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
          <h3 className="font-bold text-orange-800 text-lg mb-3">☀️ August Weather</h3>
          <div className="space-y-3">
            <div className="bg-white rounded-lg p-3">
              <p className="font-semibold text-sm text-orange-700 mb-1">Coast — Jounieh, Byblos</p>
              <p className="text-sm text-gray-700">27–32°C, humidity 70–80%, virtually no rain. Hot but tempered by sea breeze. Essentially rain-free — August is the hottest month.</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="font-semibold text-sm text-green-700 mb-1">Mountains — Bcharre (1,400m)</p>
              <p className="text-sm text-gray-700">22–28°C, much drier, pleasant. Can be cool in evenings. A significant relief from coastal heat.</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">UV Index: Very high (8–10). Sunburn risk is serious — SPF 50+ and hats essential. Avoid outdoor activities 12–3pm.</p>
        </div>

        {/* Tourist season */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <h3 className="font-bold text-blue-800 text-lg mb-3">🏖️ Peak Tourist Season</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• August is peak Lebanese tourist season — Lebanese diaspora returns for summer holidays</li>
            <li>• Hotels in Jounieh/Byblos at premium pricing and higher occupancy — book early</li>
            <li>• Beach clubs will be crowded on weekends</li>
            <li>• Mountain areas (Bcharre/Cedars) popular escape from coastal heat — expect visitors</li>
            <li>• Prices for accommodation and activities are at their annual high</li>
            <li>• Restaurants may be busier — consider earlier or later dining times</li>
          </ul>
        </div>
      </div>

      {/* Festivals & events */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
        <h3 className="font-bold text-lg mb-4">🎭 August Festivals &amp; Events</h3>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-32 shrink-0">
              <p className="text-xs font-semibold text-gray-500 uppercase">July–August</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Byblos International Festival 🏰</p>
              <p className="text-sm text-gray-600">Major music festival held annually in the Crusader castle ruins. Returned in 2023 after a 3-year hiatus; 2025 edition was held. International and Lebanese artists. Amazing setting — one of the most atmospheric venues in the world. Family-friendly for earlier shows. Check <a href="https://www.byblosfestival.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">byblosfestival.com</a> for 2026 lineup/dates.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-32 shrink-0">
              <p className="text-xs font-semibold text-gray-500 uppercase">Usually July</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Jounieh International Festival 🎆</p>
              <p className="text-sm text-gray-600">Fireworks, concerts on the bay. Check local schedules for 2026 dates — may extend into August.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-32 shrink-0">
              <p className="text-xs font-semibold text-gray-500 uppercase">15 August</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Assumption of Mary 🕊️</p>
              <p className="text-sm text-gray-600">Major holiday in Christian Lebanon. Celebrations, processions, and church services throughout Jounieh, Byblos, and Bcharre. Festive, family-friendly atmosphere. One of the most important dates in the Lebanese Christian calendar.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        {/* Ramadan note */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-5">
          <h3 className="font-bold text-green-800 mb-2">🌙 Ramadan in August 2026?</h3>
          <p className="text-sm text-green-700 font-semibold mb-1">No — Ramadan 2026 is in February/March.</p>
          <p className="text-sm text-gray-600">Ramadan 2026 falls in February–March 2026. August is clear of Ramadan. No fasting restrictions or limited service hours to worry about. Christian-majority northern Lebanon is generally unaffected by Ramadan regardless.</p>
        </div>

        {/* Beach season */}
        <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-5">
          <h3 className="font-bold text-cyan-800 mb-2">🏊 Beach Season</h3>
          <p className="text-sm text-gray-600">August is the heart of Lebanon's beach season. Sea temperature: ~28°C — warm and very swimmable. Beach clubs along Jounieh Bay and near Byblos (Bahsa Beach) offer full facilities: sun loungers, restaurants, kids' pools, water activities. Weekends are very crowded; weekday mornings are the best time to visit.</p>
        </div>
      </div>
    </section>
  )
}
