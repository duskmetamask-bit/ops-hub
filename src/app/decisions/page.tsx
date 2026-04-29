'use client';

export default function DecisionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Decisions</h2>
        <p className="text-sm text-gray-500 mt-1">All locked decisions — do not change without Dusk approval</p>
      </div>

      {/* ICP */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-xs text-green-400 font-medium uppercase tracking-wider">Locked</span>
        </div>
        <div className="text-sm font-medium text-gray-300 mb-2">ICP — All SMBs Globally</div>
        <p className="text-sm text-gray-500">
          EMVY ICP is ALL SMALL/MEDIUM BUSINESSES globally. No vertical restrictions. No geographic restrictions. No tradie-only. Every SMB anywhere is a prospect.
        </p>
      </div>

      {/* Offer Stack */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-xs text-green-400 font-medium uppercase tracking-wider">Locked</span>
        </div>
        <div className="text-sm font-medium text-gray-300 mb-4">EMVY Offer Stack</div>
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-gray-950 border border-gray-800 rounded-lg p-4 text-center">
            <div className="text-xs text-gray-500 mb-1">Lead</div>
            <div className="text-lg font-bold text-white">Free</div>
            <div className="text-xs text-gray-600 mt-1">15-min call</div>
          </div>
          <div className="bg-gray-950 border border-gray-800 rounded-lg p-4 text-center">
            <div className="text-xs text-gray-500 mb-1">Audit</div>
            <div className="text-lg font-bold text-white">$1,500</div>
            <div className="text-xs text-gray-600 mt-1">one-time</div>
          </div>
          <div className="bg-gray-950 border border-gray-800 rounded-lg p-4 text-center">
            <div className="text-xs text-gray-500 mb-1">Build</div>
            <div className="text-lg font-bold text-white">$3-5K</div>
            <div className="text-xs text-gray-600 mt-1">one-time</div>
          </div>
          <div className="bg-gray-950 border border-gray-800 rounded-lg p-4 text-center">
            <div className="text-xs text-gray-500 mb-1">Retainer</div>
            <div className="text-lg font-bold text-white">$1,500</div>
            <div className="text-xs text-gray-600 mt-1">per month</div>
          </div>
        </div>
        <div className="mt-4 text-xs text-gray-600">
          Booking: <span className="text-blue-400">https://cal.com/jake-emvy/15-min-ai-chat</span>
        </div>
      </div>

      {/* Process Flow */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-xs text-green-400 font-medium uppercase tracking-wider">Locked</span>
        </div>
        <div className="text-sm font-medium text-gray-300 mb-3">Process Flow</div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-400">LEAD</span>
          <span className="text-gray-600">→</span>
          <span className="text-blue-400">AUDIT $1,500</span>
          <span className="text-gray-600">→</span>
          <span className="text-green-400">BUILD $3-5K</span>
          <span className="text-gray-600">→</span>
          <span className="text-yellow-400">RETAIN $1,500/mo</span>
        </div>
        <div className="mt-4 space-y-2 text-xs text-gray-500">
          <div><span className="text-gray-400 font-medium">Discovery rules:</span> Map biggest admin bottleneck, at least 1 quick win before they leave, break down what $1,500 audit covers, honest assessment if not a fit.</div>
        </div>
      </div>

      {/* Pitch Angles */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-xs text-green-400 font-medium uppercase tracking-wider">Locked</span>
        </div>
        <div className="text-sm font-medium text-gray-300 mb-3">Pitch Angles</div>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">1</span>
            </div>
            <div>
              <div className="text-sm text-gray-300 font-medium">Primary — Pain-first</div>
              <div className="text-xs text-gray-500">"Do you miss calls when you're busy?" / "15+ hours/week on admin"</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">2</span>
            </div>
            <div>
              <div className="text-sm text-gray-300 font-medium">Secondary — Confusion/Overwhelm</div>
              <div className="text-xs text-gray-500">For skeptical prospects needing education</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">3</span>
            </div>
            <div>
              <div className="text-sm text-gray-300 font-medium">Guarantee</div>
              <div className="text-xs text-gray-500">"90-day results or money back" — premium option</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-5 h-5 rounded bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">4</span>
            </div>
            <div>
              <div className="text-sm text-gray-300 font-medium">Lead Conversation</div>
              <div className="text-xs text-gray-500">AI phone answering</div>
            </div>
          </div>
        </div>
      </div>

      {/* X Positioning */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-xs text-green-400 font-medium uppercase tracking-wider">Locked</span>
        </div>
        <div className="text-sm font-medium text-gray-300 mb-3">X Positioning</div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <div className="text-xs text-gray-600">Position</div>
            <div className="text-sm text-gray-300">AI agent leader + AI educator</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-gray-600">Tagline</div>
            <div className="text-sm text-gray-300">"The builder who actually ships"</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-gray-600">Format</div>
            <div className="text-sm text-gray-300">Single posts + quote tweets only</div>
          </div>
          <div className="space-y-1">
            <div className="text-xs text-gray-600">Brand</div>
            <div className="text-sm text-gray-300">Australian mate tone, no Aus references</div>
          </div>
        </div>
        <div className="mt-3 text-xs text-gray-600">
          Never mention EMVY until later. No Australia/Aussie references. Do not change without Dusk approval.
        </div>
      </div>

      {/* Callie */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-xs text-green-400 font-medium uppercase tracking-wider">Locked</span>
        </div>
        <div className="text-sm font-medium text-gray-300 mb-2">Callie — EMVY Voice Discovery Agent</div>
        <p className="text-xs text-gray-500 mb-3">Owned by MEWY. Takes discovery calls via VAPI. Pipeline: Call → Transcript in Supabase → Audit → Build → Retain.</p>
        <div className="text-xs text-gray-600">
          VAPI Token: 35417edc-54c0-4168-855b-8d9f28202136 | Assistant: 20b39d8e-8494-49de-aa19-2dff5ec9b205
        </div>
      </div>

      {/* Outreach */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-yellow-400" />
          <span className="text-xs text-yellow-400 font-medium uppercase tracking-wider">Open</span>
        </div>
        <div className="text-sm font-medium text-gray-300 mb-3">Cold Outreach</div>
        <div className="space-y-2 text-xs text-gray-500">
          <div><span className="text-gray-400">Channel:</span> Cold email only initially</div>
          <div><span className="text-gray-400">Angle:</span> Confusion/overwhelm — "AI is confusing, we help you figure out where to start"</div>
          <div><span className="text-gray-400">Personalisation:</span> None for first batch</div>
          <div><span className="text-gray-400">Sender:</span> Jake as sender persona</div>
          <div><span className="text-gray-400">Subject:</span> "Confused about AI? Don't worry you're not alone"</div>
        </div>
      </div>

      {/* Proprietary Stack Vision */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-blue-400" />
          <span className="text-xs text-blue-400 font-medium uppercase tracking-wider">Vision</span>
        </div>
        <div className="text-sm font-medium text-gray-300 mb-3">Proprietary Intelligence Stack — Long-term Moat</div>
        <div className="space-y-2 text-xs text-gray-500">
          <div>Crawler → Vector DB → Fine-tuned model → Owned lead/content pipeline</div>
          <div><span className="text-gray-400">Build cost:</span> $175-355/mo</div>
          <div><span className="text-gray-400">Revisit at:</span> $10K/mo recurring revenue</div>
          <div><span className="text-gray-400">Future product:</span> "EMVY Intelligence" white-label for other agencies</div>
        </div>
      </div>

      {/* Pipeline Source */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
        <div className="text-sm font-medium text-gray-300 mb-3">Pipeline Source of Truth</div>
        <div className="text-xs text-gray-500 space-y-1">
          <div><span className="text-gray-400">Supabase:</span> rrjktvvnzjzlfquaghut.supabase.co | Table: leads | iszrozctcyglujzulxxn</div>
          <div><span className="text-gray-400">Local backup:</span> profiles/leads/pipeline.json (stale — DISCONNECTED from Supabase)</div>
          <div><span className="text-yellow-400">Action needed:</span> Cron must write to Supabase, not pipeline.json</div>
        </div>
      </div>

      {/* SEO deferred */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
        <div className="text-sm font-medium text-gray-300 mb-3">SEO / Content</div>
        <div className="text-xs text-gray-500">
          <span className="text-yellow-400">Deferred</span> until outbound is locked (3+ clients + hands-off sequences).
          Playbook ready. Trigger: 3+ consistent clients AND outbound running without daily management.
          Cadence: 1-2 posts/month once active.
        </div>
      </div>

      <div className="text-xs text-gray-700 pt-2">
        All decisions above are LOCKED unless explicitly noted. Last updated: 2026-04-29.
      </div>
    </div>
  );
}
