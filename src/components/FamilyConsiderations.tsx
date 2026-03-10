export default function FamilyConsiderations() {
  return (
    <section id="family" className="section-card">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-1 h-8 rounded-full bg-purple-500" />
        <span className="text-2xl">👨‍👩‍👧‍👦</span>
        <h2 className="text-2xl font-bold text-slate-900">Family Considerations</h2>
      </div>
      <p className="text-slate-500 text-sm mb-6 pl-10">Specific guidance for 2 adults + children ages 7 and 9.</p>

      {/* Attractions by area */}
      <h3 className="text-xl font-semibold mb-4">🎡 Child-Friendly Attractions</h3>
      <div className="grid md:grid-cols-3 gap-5 mb-8">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h4 className="font-bold text-gray-800 mb-3">Jounieh / Kesrouan</h4>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>
              <p className="font-semibold">🦇 Jeita Grotto</p>
              <p className="text-gray-500">Spectacular limestone caves with stalactites/stalagmites. Upper grotto on foot, lower grotto by boat. One of Lebanon's top attractions. ~20 min from Jounieh. Kids absolutely love it.</p>
            </li>
            <li>
              <p className="font-semibold">🚡 Téléférique (Cable Car) to Harissa</p>
              <p className="text-gray-500">Cable car from Jounieh bay up to the Our Lady of Lebanon statue. Stunning views. Kids enjoy the ride (~10 min each way).</p>
            </li>
            <li>
              <p className="font-semibold">🏖️ Jounieh Bay Beaches</p>
              <p className="text-gray-500">Sandy beaches, warm water in August. Beach clubs with full family facilities.</p>
            </li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h4 className="font-bold text-gray-800 mb-3">Byblos (Jbeil)</h4>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>
              <p className="font-semibold">🏰 Byblos Crusader Castle &amp; Archaeological Site</p>
              <p className="text-gray-500">One of the oldest continuously inhabited cities in the world (~7,000 years). Kids can explore ruins and castle walls. UNESCO World Heritage Site.</p>
            </li>
            <li>
              <p className="font-semibold">🛒 Byblos Old Souk</p>
              <p className="text-gray-500">Charming market streets, ice cream, crafts. Easy family strolling.</p>
            </li>
            <li>
              <p className="font-semibold">⛵ Byblos Fishing Harbour</p>
              <p className="text-gray-500">Picturesque harbour, great for walks and photos. Good seafood restaurants nearby.</p>
            </li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h4 className="font-bold text-gray-800 mb-3">Bcharre / Qadisha Valley</h4>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>
              <p className="font-semibold">🌲 Cedars of God (Arz el-Rab)</p>
              <p className="text-gray-500">Ancient cedar forest, UNESCO World Heritage. Cooler mountain air (25°C). Easy walking trails suitable for ages 7+.</p>
            </li>
            <li>
              <p className="font-semibold">🏞️ Qadisha Valley</p>
              <p className="text-gray-500">Dramatic gorge with monasteries. Choose easier trails — some sections are challenging for young children.</p>
            </li>
            <li>
              <p className="font-semibold">💧 Baatara Gorge Waterfall</p>
              <p className="text-gray-500">Spectacular 3-tier waterfall ~1 hr from Bcharre. Viewing platform suitable for kids.</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Safety briefing for kids */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
          <h3 className="font-bold text-amber-800 mb-3">📋 What to Brief Kids On</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Only drink from sealed water bottles — never tap water or uncertain sources</li>
            <li>• Stick with parents at all times in crowded markets and archaeological sites</li>
            <li>• If something loud happens: find cover immediately, stay with adults, don't run</li>
            <li>• Strangers being warm and touching your hair/giving sweets is normal Lebanese affection — not a threat</li>
            <li>• No photography of military personnel, checkpoints, or official buildings</li>
            <li>• Know the hotel name and address by heart</li>
          </ul>
        </div>

        {/* Food & water for kids */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <h3 className="font-bold text-blue-800 mb-3">🥗 Food &amp; Water Safety for Kids</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• <strong>Only bottled water</strong> — including for brushing teeth</li>
            <li>• Avoid raw salads washed in tap water</li>
            <li>• Stick to freshly cooked food — avoid anything that looks like it has been sitting out</li>
            <li>• Lebanese cuisine is generally child-friendly: hummus, flatbreads, grilled meats, falafel</li>
            <li>• Ice cream from busy shops is generally fine</li>
            <li>• Carry oral rehydration sachets (Gastrolyte) for gastro emergencies</li>
            <li>• Lebanese culture: children are welcomed everywhere, including restaurants late at night</li>
          </ul>
        </div>
      </div>

      {/* Heat management */}
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-6">
        <h3 className="font-bold text-orange-800 mb-2">☀️ Heat Management (August)</h3>
        <p className="text-sm text-gray-700 mb-2">Coast temperatures hit 30–32°C with high humidity. For ages 7 and 9:</p>
        <ul className="space-y-1 text-sm text-gray-700">
          <li>• Apply SPF 50+ sunscreen every 2 hours; hats are essential</li>
          <li>• Avoid outdoor activities between 12pm and 3pm — rest/pool time</li>
          <li>• Carry 1.5L water bottles per child; refill constantly from sealed sources</li>
          <li>• Plan mountain days (Bcharre) for relief: 22–25°C vs coastal 32°C</li>
          <li>• Look for accommodation with pools — beach clubs and many hotels have them</li>
        </ul>
      </div>

      {/* Cultural norms */}
      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <h3 className="font-bold mb-3">🤝 Cultural Norms Around Children</h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• Lebanese culture is extremely child-friendly — children are adored and welcomed everywhere</li>
          <li>• Strangers (shopkeepers, waiters, locals) may interact warmly: touching hair, offering sweets, pinching cheeks — cultural affection, not a threat</li>
          <li>• Christian areas are relaxed about dress codes; modest clothing is appreciated but not required</li>
          <li>• Children are welcomed in restaurants even for late dinners (Lebanese dining culture runs late)</li>
          <li>• No specific safety concerns for Western children in northern Christian areas</li>
        </ul>
      </div>
    </section>
  )
}
