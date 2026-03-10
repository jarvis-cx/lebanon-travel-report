export default function RiskProfiles() {
  return (
    <section id="risk-profiles" className="py-10 border-b border-gray-200">
      <h2 className="text-3xl font-bold mb-2">Risk Profiles</h2>
      <p className="text-gray-600 mb-6">Find the recommendation that matches your risk tolerance.</p>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Cautious */}
        <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
          <div className="text-center mb-4">
            <span className="text-4xl">🔴</span>
            <h3 className="text-xl font-bold text-red-800 mt-2">Cautious</h3>
            <p className="text-red-700 font-semibold text-sm mt-1">We recommend waiting.</p>
          </div>
          <div className="bg-red-100 rounded-lg p-3 mb-4">
            <p className="text-red-800 text-sm font-medium">
              The risk to children in a potential conflict escalation outweighs the experience. Wait for a more stable window — Lebanon will still be there.
            </p>
          </div>
          <h4 className="font-semibold text-red-800 mb-2 text-sm">Why wait:</h4>
          <ul className="space-y-1 text-sm text-red-700">
            <li>• All governments at "Do Not Travel" as of March 2026</li>
            <li>• Travel insurance invalid under current advisories</li>
            <li>• Beirut airport can close at hours' notice</li>
            <li>• Medical evacuation with kids is high-stress</li>
            <li>• Conflict escalation trajectory is uncertain</li>
          </ul>
          <div className="mt-4 pt-4 border-t border-red-200">
            <p className="text-xs text-red-600 font-medium">Decision: Book nothing. Check again in June 2026.</p>
          </div>
        </div>

        {/* Moderate */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6">
          <div className="text-center mb-4">
            <span className="text-4xl">🟡</span>
            <h3 className="text-xl font-bold text-amber-800 mt-2">Moderate</h3>
            <p className="text-amber-700 font-semibold text-sm mt-1">Go with precautions in place.</p>
          </div>
          <div className="bg-amber-100 rounded-lg p-3 mb-4">
            <p className="text-amber-800 text-sm font-medium">
              If conditions stabilise, northern Lebanon is manageable with the right preparation. Go only if all GO signals are met.
            </p>
          </div>
          <h4 className="font-semibold text-amber-800 mb-2 text-sm">Must have in place:</h4>
          <ul className="space-y-1 text-sm text-amber-700">
            <li>• Wait until May 2026 before booking anything</li>
            <li>• Book 100% refundable flights and accommodation</li>
            <li>• Obtain travel insurance with medevac to Cyprus</li>
            <li>• Register with Smartraveller before departure</li>
            <li>• Carry $3,000–5,000 USD cash</li>
            <li>• Have a Cyprus evacuation plan ready</li>
            <li>• Brief your children on "emergency drill" procedures</li>
          </ul>
          <div className="mt-4 pt-4 border-t border-amber-200">
            <p className="text-xs text-amber-600 font-medium">Decision: Monitor weekly. Book May 2026 at earliest.</p>
          </div>
        </div>

        {/* Adventurous */}
        <div className="bg-green-50 border-2 border-green-300 rounded-xl p-6">
          <div className="text-center mb-4">
            <span className="text-4xl">🟢</span>
            <h3 className="text-xl font-bold text-green-800 mt-2">Adventurous</h3>
            <p className="text-green-700 font-semibold text-sm mt-1">You can go — if signals are right.</p>
          </div>
          <div className="bg-green-100 rounded-lg p-3 mb-4">
            <p className="text-green-800 text-sm font-medium">
              Northern Lebanon is genuinely special. Jeita Grotto, the Cedars, Byblos ruins — magical for kids. If conditions stabilise, do it.
            </p>
          </div>
          <h4 className="font-semibold text-green-800 mb-2 text-sm">Prepare for:</h4>
          <ul className="space-y-1 text-sm text-green-700">
            <li>• August heat: 30–32°C coast, 25°C mountains</li>
            <li>• Cash-only economy — bring USD</li>
            <li>• Aggressive driving — consider a hired driver</li>
            <li>• No tap water — bottled only, even for teeth</li>
            <li>• Book Byblos Festival tickets early</li>
            <li>• Mountain roads to Bcharre: 2.5-hour drive</li>
            <li>• Spend 3–4 nights in Bcharre for cool air</li>
          </ul>
          <div className="mt-4 pt-4 border-t border-green-200">
            <p className="text-xs text-green-600 font-medium">Decision: Book refundable in May 2026 if GO signals met.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
