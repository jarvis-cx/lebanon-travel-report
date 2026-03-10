export default function EmergencyContacts() {
  return (
    <section id="emergency" className="py-10 border-b border-gray-200">
      <h2 className="text-3xl font-bold mb-6">Emergency Contacts</h2>
      <p className="text-sm text-gray-500 mb-6">Save these before departure. Screenshot this page.</p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Lebanese emergency numbers */}
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h3 className="font-bold text-lg mb-4">🇱🇧 Lebanese Emergency Numbers</h3>
          <div className="space-y-3">
            {[
              { label: 'Red Cross Ambulance', number: '140', color: 'red' },
              { label: 'General Emergency / Civil Defence', number: '112', color: 'red' },
              { label: 'Police (Internal Security Forces)', number: '112 / 160', color: 'blue' },
              { label: 'Fire Department', number: '175', color: 'orange' },
              { label: 'General Security', number: '1717', color: 'blue' },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                <span className="text-sm text-gray-700">{item.label}</span>
                <span className="font-bold text-lg text-gray-900 font-mono">{item.number}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Australian emergency numbers */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <h3 className="font-bold text-lg text-blue-800 mb-4">🇦🇺 Australian Emergency Lines</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold text-gray-800">24-hr Consular Emergency (from Lebanon)</p>
              <p className="font-bold text-xl font-mono text-blue-700">+61 2 6261 3305</p>
            </div>
            <div>
              <p className="font-semibold text-gray-800">Australian Crisis Line (from Australia)</p>
              <p className="font-bold text-xl font-mono text-blue-700">1300 555 135</p>
            </div>
            <div className="pt-2 border-t border-blue-200">
              <p className="text-xs text-gray-500">Available 24/7. Use these numbers if you cannot reach the embassy directly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Australian Embassy */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
        <h3 className="font-bold text-lg mb-4">🏛️ Australian Embassy, Beirut</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold">Address</p>
              <p className="text-gray-700">Embassy Complex, Serail Hill, Downtown Beirut, Lebanon</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold">Phone</p>
              <p className="font-mono font-semibold text-gray-900">+961 1 960 600</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold">Fax</p>
              <p className="font-mono text-gray-700">+961 1 960 601</p>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold">Email</p>
              <p className="text-gray-700">embassy.beirut@dfat.gov.au</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold">Website</p>
              <a href="https://lebanon.embassy.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">lebanon.embassy.gov.au</a>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase font-semibold">Smartraveller Registration</p>
              <a href="https://www.smartraveller.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Register before you depart</a>
            </div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-700">
          <strong>Note:</strong> As of February 2026, some embassy staff and all dependents have been evacuated. Embassy continues to operate with reduced capacity.
        </div>
      </div>

      {/* Hospital quick reference */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
        <div className="bg-gray-100 px-5 py-3">
          <h3 className="font-bold">🏥 Hospitals Quick Reference</h3>
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
                { name: 'Notre Dame Hospital', loc: 'Jounieh', note: 'Good standard, general hospital' },
                { name: 'Saint Louis Hospital', loc: 'Jounieh', note: 'Near Téléférique station' },
                { name: 'Notre Dame Maritime Hospital', loc: 'Byblos', note: 'Coastal area' },
                { name: 'Saint Georges Hospital', loc: 'Ajaltoun', note: 'Mount Lebanon, between Jounieh & Beirut' },
                { name: 'Hôpital Bcharre', loc: 'Bcharre', note: 'Small/basic — emergencies only' },
              ].map((h) => (
                <tr key={h.name} className="hover:bg-gray-50">
                  <td className="px-5 py-3 font-medium text-gray-900">{h.name}</td>
                  <td className="px-5 py-3 text-gray-600">{h.loc}</td>
                  <td className="px-5 py-3 text-gray-500 text-xs">{h.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Medical evacuation */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-sm text-gray-700">
        <h3 className="font-semibold text-purple-800 mb-1">🚁 Medical Evacuation</h3>
        <p>Nearest advanced medical facilities outside Lebanon: <strong>Cyprus</strong> (45 min flight) or <strong>Turkey</strong> (1–2 hr flight). Ensure your travel insurance covers helicopter/air ambulance medical evacuation. This is non-negotiable for a family trip.</p>
      </div>
    </section>
  )
}
