'use client';

import { useState } from 'react';

type Competitor = {
  name: string;
  tier: number;
  what: string;
  pricing: string;
  pitch: string;
  strengths: string[];
  weaknesses: string[];
  threat: 'high' | 'medium' | 'low';
  type: string;
};

const TIER1: Competitor[] = [
  {
    name: 'Air.ai',
    tier: 1,
    what: 'AI phone agents for businesses — 24/7 voice AI that handles calls end-to-end',
    pricing: 'Not publicly listed; reportedly $1,000–$3,000/month range',
    pitch: '"Always-on AI that never sleeps, never forgets, never misses a call"',
    strengths: ['Strong US market presence', 'Heavy outbound marketing', 'Well-funded'],
    weaknesses: ['No clear audit process', 'High price point', 'Not SMB-focused'],
    threat: 'high',
    type: 'AI Agency',
  },
  {
    name: 'Fluent.ai',
    tier: 1,
    what: 'AI voice agents for enterprise and SMBs — similar to Air.ai',
    pricing: 'Custom enterprise pricing',
    pitch: 'Conversational AI for customer service and sales',
    strengths: ['Multi-language support', 'Enterprise integrations'],
    weaknesses: ['Complex setup', 'Not SMB-friendly positioning'],
    threat: 'medium',
    type: 'AI Agency',
  },
];

const TIER2: Competitor[] = [
  {
    name: 'Voiceflow',
    tier: 2,
    what: 'Platform for building conversational AI agents (voice + chat)',
    pricing: '$0–$500+/month depending on tier; agent minutes extra',
    pitch: '"Build once, deploy anywhere" — enterprise focus',
    strengths: ['Strong brand', 'Enterprise integrations', 'Agent marketplace'],
    weaknesses: ['Requires technical knowledge', 'Not a service business', 'DIY positioning'],
    threat: 'medium',
    type: 'Platform',
  },
  {
    name: 'Botpress',
    tier: 2,
    what: 'Open-source conversational AI platform',
    pricing: 'Free tier; Enterprise starts ~$500/month',
    pitch: 'Full-stack conversational AI for developers',
    strengths: ['Large community', 'Flexibility', 'Open-source'],
    weaknesses: ['Developer-heavy', 'Not SMB-accessible as-is'],
    threat: 'low',
    type: 'Platform',
  },
];

const TIER3: Competitor[] = [
  {
    name: 'Zapier',
    tier: 3,
    what: 'No-code automation connecting 6,000+ apps',
    pricing: '$0–$599+/month; AI tier extra',
    pitch: '"Connect your apps and automate your work"',
    strengths: ['Massive app library', 'Established brand', 'SMB-friendly'],
    weaknesses: ['No human-in-the-loop', 'No voice AI native', 'Setup complexity'],
    threat: 'medium',
    type: 'Platform',
  },
  {
    name: 'Make.com',
    tier: 3,
    what: 'Visual automation platform — more flexible than Zapier',
    pricing: '$0–$599+/month',
    pitch: '"Advanced automation for power users"',
    strengths: ['More powerful workflows', 'Visual canvas', 'Lower price'],
    weaknesses: ['Learning curve', 'No AI audit positioning', 'No voice'],
    threat: 'low',
    type: 'Platform',
  },
  {
    name: 'puzzle.io',
    tier: 3,
    what: 'AI-powered business automation for SMBs',
    pricing: '~$99–$499/month range',
    pitch: '"AI automation without the complexity"',
    strengths: ['SMB positioning', 'Relatively simple setup'],
    weaknesses: ['Limited scale', 'Unknown brand', 'Limited integrations'],
    threat: 'medium',
    type: 'AI Service',
  },
];

const TIER4: Competitor[] = [
  {
    name: 'WebFX',
    tier: 4,
    what: 'Full-service digital marketing agency with AI add-ons',
    pricing: '$1,000–$5,000+/month retainer',
    pitch: '"Results-driven digital marketing"',
    strengths: ['Established agency model', 'Large team', 'Case studies'],
    weaknesses: ['Expensive', 'Not AI-native', 'Traditional marketing focus'],
    threat: 'medium',
    type: 'Agency',
  },
  {
    name: 'SmartSites',
    tier: 4,
    what: 'Shopify-focused digital agency with AI services',
    pricing: '$1,000–$3,000/month range',
    pitch: '"Award-winning Shopify agency"',
    strengths: ['Niche focus (Shopify)', 'Good reputation'],
    weaknesses: ['Vertical-specific', 'No AI audit positioning', 'Not EMVY scope'],
    threat: 'low',
    type: 'Agency',
  },
  {
    name: 'Vendasta',
    tier: 4,
    what: 'White-label platform for agencies to serve SMBs — includes AI tools',
    pricing: 'Partner/reseller model — custom pricing',
    pitch: '"Everything SMBs need to grow"',
    strengths: ['Large partner network', 'Broad toolset'],
    weaknesses: ['White-label model', 'Not direct-to-SMB', 'Tool-heavy not service-heavy'],
    threat: 'medium',
    type: 'Platform',
  },
];

const WHERE_WE_WIN = [
  'Audit-first approach — nobody else starts with a structured AI audit before building',
  'SMB-only focus — not enterprise, not developer, just SMBs',
  'Human-led, AI-powered — real consultant + real AI agent (Callie)',
  'Transparent pricing — clear offer stack, no hidden costs',
  'Global scope — not tied to one market or vertical',
];

const GAPS_TO_EXPLOIT = [
  'Air.ai and Fluent.ai are expensive and enterprise-heavy — EMVY is accessible and SMB-specific',
  'Voiceflow and Botpress are DIY platforms — EMVY is done-for-you service',
  'Traditional agencies (WebFX) do not have real AI depth — EMVY is AI-native',
  'No competitor has a clear "AI audit" process as their entry point — EMVY owns this',
];

const THREAT_COLORS: Record<string, string> = {
  high: 'bg-red-900 text-red-300',
  medium: 'bg-yellow-900 text-yellow-300',
  low: 'bg-green-900 text-green-300',
};

const THREAT_LABELS: Record<string, string> = {
  high: 'HIGH THREAT',
  medium: 'MEDIUM THREAT',
  low: 'LOW THREAT',
};

export default function CompetitorsPage() {
  const [activeTab, setActiveTab] = useState<'landscape' | 'positioning' | 'tiers'>('landscape');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Competitors</h2>
          <p className="text-sm text-gray-500 mt-1">Competitive intelligence — monitoring cadence: daily pulse, weekly deep-dive, monthly landscape review</p>
        </div>
      </div>

      {/* Monitoring Banner */}
      <div className="bg-blue-950 border border-blue-900 rounded-lg p-4">
        <div className="text-sm font-medium text-blue-300 mb-2">Monitoring Cadence</div>
        <div className="grid grid-cols-3 gap-4 text-xs text-blue-200">
          <div>
            <div className="font-medium">Daily pulse</div>
            <div className="text-blue-300 opacity-70">New pricing, content, announcements</div>
          </div>
          <div>
            <div className="font-medium">Weekly deep-dive</div>
            <div className="text-blue-300 opacity-70">1 competitor profile per week — go deep</div>
          </div>
          <div>
            <div className="font-medium">Monthly landscape</div>
            <div className="text-blue-300 opacity-70">Update master competitor profile</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-800 pb-0">
        {[
          { key: 'landscape', label: 'Landscape' },
          { key: 'positioning', label: 'EMVY Positioning' },
          { key: 'tiers', label: 'Tier Breakdown' },
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as typeof activeTab)}
            className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab.key
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-gray-500 hover:text-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Landscape Tab */}
      {activeTab === 'landscape' && (
        <div className="space-y-6">
          {/* Summary Table */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Competitor</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Price Range</th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Threat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {[...TIER1, ...TIER2, ...TIER3, ...TIER4].map(c => (
                  <tr key={c.name} className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="font-medium text-gray-200">{c.name}</div>
                      <div className="text-xs text-gray-500">{c.what}</div>
                    </td>
                    <td className="px-4 py-3 text-gray-400 text-xs">{c.type}</td>
                    <td className="px-4 py-3 text-gray-400 text-xs">{c.pricing}</td>
                    <td className="px-4 py-3">
                      <span className={`text-xs px-2 py-0.5 rounded font-medium ${THREAT_COLORS[c.threat]}`}>
                        {THREAT_LABELS[c.threat]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Positioning Tab */}
      {activeTab === 'positioning' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <div className="text-sm font-medium text-green-400 mb-4">Where EMVY Wins</div>
            <ul className="space-y-3">
              {WHERE_WE_WIN.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <div className="text-sm font-medium text-blue-400 mb-4">Competitive Gaps to Exploit</div>
            <ul className="space-y-3">
              {GAPS_TO_EXPLOIT.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Tiers Tab */}
      {activeTab === 'tiers' && (
        <div className="space-y-6">
          {[
            { label: 'Tier 1 — Direct Competitors (AI Audit/Automation Agencies)', competitors: TIER1, color: 'text-red-400', border: 'border-red-900' },
            { label: 'Tier 2 — AI Phone/Answering Service Competitors', competitors: TIER2, color: 'text-orange-400', border: 'border-orange-900' },
            { label: 'Tier 3 — SMB Automation Platforms (Adjacent Competitors)', competitors: TIER3, color: 'text-yellow-400', border: 'border-yellow-900' },
            { label: 'Tier 4 — Marketing Agencies with AI Services (Positioning Threat)', competitors: TIER4, color: 'text-gray-400', border: 'border-gray-800' },
          ].map(tier => (
            <div key={tier.label} className={`border ${tier.border} rounded-lg overflow-hidden`}>
              <div className={`px-5 py-3 bg-gray-900 ${tier.color} text-sm font-medium`}>{tier.label}</div>
              <div className="divide-y divide-gray-800">
                {tier.competitors.map(c => (
                  <div key={c.name} className="px-5 py-4 bg-gray-950">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-medium text-gray-200">{c.name}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{c.what}</div>
                      </div>
                      <span className={`text-xs px-2 py-0.5 rounded font-medium ${THREAT_COLORS[c.threat]}`}>
                        {THREAT_LABELS[c.threat]}
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-3">
                      <div>
                        <div className="text-xs text-gray-600 mb-1">Pricing</div>
                        <div className="text-xs text-gray-400">{c.pricing}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 mb-1">Strengths</div>
                        <div className="text-xs text-gray-400">{c.strengths.join(', ')}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-600 mb-1">Weaknesses</div>
                        <div className="text-xs text-gray-400">{c.weaknesses.join(', ')}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
