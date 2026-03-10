export default function MoneyEconomy() {
  return (
    <section id="money" className="py-10 border-b border-gray-200">
      <h2 className="text-3xl font-bold mb-6">Money &amp; Economy</h2>

      {/* Currency situation */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
        <h3 className="font-bold text-lg mb-3">💱 Currency Situation (March 2026)</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <p className="font-medium mb-2">The Lebanese Pound (LBP)</p>
            <ul className="space-y-1">
              <li>• Pre-crisis rate: 1,500 LBP per USD (before 2019)</li>
              <li>• Current official rate: ~89,500 LBP per USD</li>
              <li>• The Lebanese Pound lost ~98% of its value</li>
              <li>• Now largely aligned (official vs market) after 2023 fix</li>
            </ul>
          </div>
          <div>
            <p className="font-medium mb-2">Practical Reality</p>
            <ul className="space-y-1">
              <li>• <strong>USD is the de facto currency</strong></li>
              <li>• Most businesses price in USD, prefer USD cash</li>
              <li>• Effectively a dollarized economy for visitors</li>
              <li>• Do not bring Lebanese pounds from abroad — essentially worthless</li>
            </ul>
          </div>
        </div>
      </div>

      {/* USD warning */}
      <div className="bg-amber-50 border-2 border-amber-400 rounded-xl p-5 mb-6">
        <div className="flex items-start gap-3">
          <span className="text-3xl shrink-0">💵</span>
          <div>
            <h3 className="font-bold text-amber-800 text-lg mb-1">Bring USD Cash — Most Important Financial Advice</h3>
            <ul className="space-y-1 text-sm text-amber-700">
              <li>• Crisp, new bills preferred ($50 and $100 denominations work best)</li>
              <li>• For 2 weeks, family of 4: bring <strong>$3,000–5,000 USD</strong></li>
              <li>• ATMs are unreliable for foreign cards — do not rely on them</li>
              <li>• Credit cards accepted at major hotels and upscale restaurants, but many businesses are cash-only</li>
              <li>• Money changers available everywhere with standardised rates</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Budget table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
        <div className="bg-gray-100 px-5 py-3">
          <h3 className="font-bold">💰 Daily Budget Guide — Family of 4 (USD)</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-5 py-3 font-semibold text-gray-700">Category</th>
                <th className="text-center px-5 py-3 font-semibold text-gray-700">Budget</th>
                <th className="text-center px-5 py-3 font-semibold text-gray-700">Mid-Range</th>
                <th className="text-center px-5 py-3 font-semibold text-gray-700">Comfortable</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { cat: 'Accommodation', budget: '$40–80', mid: '$100–160', comfort: '$200–350' },
                { cat: 'Food (3 meals)', budget: '$30–50', mid: '$60–100', comfort: '$100–200' },
                { cat: 'Transport', budget: '$10–20', mid: '$30–50', comfort: '$80–150' },
                { cat: 'Activities', budget: '$10–20', mid: '$20–40', comfort: '$40–80' },
              ].map((row) => (
                <tr key={row.cat} className="hover:bg-gray-50">
                  <td className="px-5 py-3 font-medium text-gray-900">{row.cat}</td>
                  <td className="px-5 py-3 text-center text-gray-600">{row.budget}</td>
                  <td className="px-5 py-3 text-center text-gray-600">{row.mid}</td>
                  <td className="px-5 py-3 text-center text-gray-600">{row.comfort}</td>
                </tr>
              ))}
              <tr className="bg-gray-50 font-bold">
                <td className="px-5 py-3 text-gray-900">Daily Total</td>
                <td className="px-5 py-3 text-center text-gray-800">$90–170</td>
                <td className="px-5 py-3 text-center text-gray-800">$210–350</td>
                <td className="px-5 py-3 text-center text-gray-800">$420–780</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 text-xs text-gray-500">
          Lebanon is extremely affordable for USD holders due to the currency collapse. A good restaurant meal for 4: $30–60. Jeita Grotto entry: ~$15–20/adult, children discounted.
        </div>
      </div>

      {/* Tips */}
      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <h3 className="font-bold mb-3">🙏 Tipping Etiquette</h3>
        <ul className="space-y-1 text-sm text-gray-700">
          <li>• Restaurants: 10–15% (some add service charge automatically — check the bill)</li>
          <li>• Taxi drivers: round up or small tip ($1–2)</li>
          <li>• Hotel staff: $1–2 per day for housekeeping, $2–5 for porter</li>
          <li>• Tour guides: $10–20/day</li>
        </ul>
      </div>
    </section>
  )
}
