export default function GettingAround() {
  return (
    <section id="getting-around" className="py-10 border-b border-gray-200">
      <h2 className="text-3xl font-bold mb-6">Getting Around</h2>

      {/* Distance table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
        <div className="bg-gray-100 px-5 py-3">
          <h3 className="font-bold">📍 Distances &amp; Drive Times</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-5 py-3 font-semibold text-gray-700">Route</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-700">Distance</th>
                <th className="text-left px-5 py-3 font-semibold text-gray-700">Drive Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { route: 'Beirut Airport → Jounieh', dist: '~20 km', time: '30–60 min (traffic dependent)' },
                { route: 'Jounieh → Byblos', dist: '~18 km', time: '20–30 min' },
                { route: 'Byblos → Bcharre', dist: '~75 km', time: '1.5–2.5 hours (mountain roads)' },
                { route: 'Jounieh → Bcharre', dist: '~90 km', time: '2–3 hours' },
                { route: 'Byblos → Batroun', dist: '~15 km', time: '15–20 min' },
              ].map((r) => (
                <tr key={r.route} className="hover:bg-gray-50">
                  <td className="px-5 py-3 font-medium text-gray-900">{r.route}</td>
                  <td className="px-5 py-3 text-gray-600">{r.dist}</td>
                  <td className="px-5 py-3 text-gray-600">{r.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Car hire */}
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-lg mb-3">🚗 Car Hire</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Available from Beirut airport and Jounieh: Sixt, Europcar, local companies</li>
            <li>• Prices: ~$30–60/day for a mid-size SUV (recommended for mountain roads)</li>
            <li>• <strong>International Driving Permit required</strong> alongside Australian licence</li>
            <li>• Lebanese roads along the coast (Route 51M) are good quality</li>
            <li>• Mountain roads to Bcharre: winding, narrow in parts, but paved. Scenic but demanding</li>
            <li>• <strong>Child car seats:</strong> Bring your own or confirm with rental company — availability is inconsistent</li>
          </ul>
        </div>

        {/* Taxis */}
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-lg mb-3">🚕 Taxis &amp; Ride-Hailing</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• <strong>Bolt</strong> is the main ride-hailing app in Lebanon (Uber was available but inconsistent)</li>
            <li>• Traditional taxis available — negotiate price before departure</li>
            <li>• Shared "service" taxis run common routes cheaply</li>
            <li>• For airport transfer: pre-book through your hotel — safer and easier with kids and luggage</li>
          </ul>
        </div>
      </div>

      {/* Driving safety */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-6">
        <h3 className="font-bold text-red-800 mb-2">⚠️ Driving Safety Warning</h3>
        <ul className="space-y-1 text-sm text-gray-700">
          <li>• Lebanon has one of the highest road fatality rates in the region</li>
          <li>• Police presence is minimal; traffic laws are loosely enforced</li>
          <li>• Driving culture: aggressive — lane markings are suggestions, horn use is constant, overtaking on blind corners is common</li>
          <li>• <strong>Night driving on mountain roads is not recommended</strong></li>
        </ul>
      </div>

      {/* Private driver recommendation */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-5">
        <h3 className="font-bold text-green-800 mb-2">💡 Recommended: Private Driver</h3>
        <p className="text-sm text-gray-700">
          With children, a private driver with car is well worth considering — removes road stress entirely and local drivers know the mountain roads. Many hotels can arrange this. Cost: ~$80–150/day for a driver with vehicle. Over a 2-week trip, factor this into your budget if you prefer not to drive yourself.
        </p>
      </div>
    </section>
  )
}
