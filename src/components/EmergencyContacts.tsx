export default function EmergencyContacts() {
  return (
    <section id="emergency" className="bg-red-50 border-2 border-red-200 rounded-2xl shadow-sm p-8 mb-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-1 h-8 rounded-full bg-red-500" />
        <span className="text-2xl">🆘</span>
        <h2 className="text-2xl font-bold text-red-900">Emergency Contacts</h2>
      </div>
      <p className="text-red-600 text-sm mb-7 pl-10 font-medium">Save these before departure. Screenshot this page.</p>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Lebanese emergency numbers */}
        <div className="bg-white border border-red-100 rounded-2xl p-5 shadow-sm">
          <h3 className="font-bold text-lg text-red-900 mb-4 flex items-center gap-2">🇱🇧 Lebanese Emergency Numbers</h3>
          <div className="space-y-3">
            {[
              { label: 'Red Cross Ambulance', number: '140' },
              { label: 'General Emergency / Civil Defence', number: '112' },
              { label: 'Police (Internal Security Forces)', number: '112 / 160' },
              { label: 'Fire Department', number: '175' },
              { label: 'General Security', number: '1717' },
            ].map(item => (
              <div key={item.label} className="flex items-center justify-between py-2 border-b border-red-50 last:border-0">
                <span className="text-sm text-slate-700">{item.label}</span>
                <span className="font-extrabold text-2xl text-red-700 font-mono tracking-tight">{item.number}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Australian emergency numbers */}
        <div className="bg-white border border-blue-100 rounded-2xl p-5 shadow-sm">
          <h3 className="font-bold text-lg text-blue-900 mb-4 flex items-center gap-2">🇦🇺 Australian Emergency Lines</h3>
          <div className="space-y-5">
            <div>
              <p className="font-semibold text-slate-700 text-sm mb-1">24-hr Consular Emergency (from Lebanon)</p>
              <p className="font-extrabold text-3xl font-mono text-blue-700 tracking-tight">+61 2 6261 3305</p>
            </div>
            <div>
              <p className="font-semibold text-slate-700 text-sm mb-1">Australian Crisis Line (from Australia)</p>
              <p className="font-extrabold text-3xl font-mono text-blue-700 tracking-tight">1300 555 135</p>
            </div>
            <div className="pt-3 border-t border-blue-100">
              <p className="text-xs text-slate-500">Available 24/7. Use these numbers if you cannot reach the embassy directly.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Australian Embassy */}
      <div className="bg-white border border-red-100 rounded-2xl p-5 mb-6 shadow-sm">
        <h3 className="font-bold text-lg text-slate-800 mb-4">🏛️ Australian Embassy, Beirut</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-3">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Address</p>
              <p className="text-slate-700">Embassy Complex, Serail Hill, Downtown Beirut, Lebanon</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Phone</p>
              <p className="font-mono font-bold text-slate-900 text-lg">+961 1 960 600</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Fax</p>
              <p className="font-mono text-slate-600">+961 1 960 601</p>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Email</p>
              <p className="text-slate-700">embassy.beirut@dfat.gov.au</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Website</p>
              <a href="https://lebanon.embassy.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">lebanon.embassy.gov.au</a>
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Smartraveller Registration</p>
              <a href="https://www.smartraveller.gov.au" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Register before you depart</a>
            </div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-700">
          <strong>Note:</strong> As of February 2026, some embassy staff and all dependents have been evacuated. Embassy continues to operate with reduced capacity.
        </div>
      </div>

      {/* Hospital quick reference */}
      <div className="bg-white border border-red-100 rounded-2xl overflow-hidden mb-6 shadow-sm">
        <div className="bg-red-700 px-5 py-3">
          <h3 className="font-bold text-white text-sm tracking-wide">🏥 Hospitals Quick Reference</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left px-5 py-3 font-semibold text-slate-600 text-xs uppercase tracking-wide">Hospital</th>
                <th className="text-left px-5 py-3 font-semibold text-slate-600 text-xs uppercase tracking-wide">Location</th>
                <th className="text-left px-5 py-3 font-semibold text-slate-600 text-xs uppercase tracking-wide">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { name: 'Notre Dame Hospital', loc: 'Jounieh', note: 'Good standard, general hospital' },
                { name: 'Saint Louis Hospital', loc: 'Jounieh', note: 'Near Téléférique station' },
                { name: 'Notre Dame Maritime Hospital', loc: 'Byblos', note: 'Coastal area' },
                { name: 'Saint Georges Hospital', loc: 'Ajaltoun', note: 'Mount Lebanon, between Jounieh & Beirut' },
                { name: 'Hôpital Bcharre', loc: 'Bcharre', note: 'Small/basic — emergencies only' },
              ].map(h => (
                <tr key={h.name} className="hover:bg-slate-50">
                  <td className="px-5 py-3 font-semibold text-slate-800">{h.name}</td>
                  <td className="px-5 py-3 text-slate-600">{h.loc}</td>
                  <td className="px-5 py-3 text-slate-400 text-xs">{h.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Medical evacuation */}
      <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5 text-sm">
        <h3 className="font-bold text-purple-800 mb-2 flex items-center gap-2">🚁 Medical Evacuation</h3>
        <p className="text-slate-700 leading-relaxed">
          Nearest advanced medical facilities outside Lebanon: <strong>Cyprus</strong> (45 min flight) or <strong>Turkey</strong> (1–2 hr flight). Ensure your travel insurance covers helicopter/air ambulance medical evacuation. This is non-negotiable for a family trip.
        </p>
      </div>
    </section>
  )
}
