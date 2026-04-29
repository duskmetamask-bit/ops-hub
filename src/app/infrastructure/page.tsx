'use client';

import { useState } from 'react';

type ToolLayer = {
  layer: string;
  layerNum: string;
  tools: {
    name: string;
    status: 'live' | 'planned' | 'gap' | 'future';
    cost?: string;
    notes?: string;
  }[];
};

const LAYERS: ToolLayer[] = [
  {
    layer: 'Lead Generation',
    layerNum: '1',
    tools: [
      { name: 'Apollo', status: 'planned', cost: '$49/mo', notes: 'Email finding, verification, enrichment' },
      { name: 'ZeroBounce', status: 'planned', cost: '$0.001/verify', notes: 'Best-in-class email verification' },
      { name: 'Google Business Profile API', status: 'planned', cost: 'Free', notes: 'Extract business data for Perth SMBs' },
      { name: 'LinkedIn Sales Navigator', status: 'planned', cost: '$99/mo', notes: 'Find decision-makers at target companies' },
      { name: 'Hunter.io', status: 'planned', cost: '$49/mo', notes: 'Domain email search' },
      { name: 'Clay', status: 'future', cost: '$134/mo', notes: 'Aggregates 100+ data providers — revisit at $20K/mo' },
      { name: 'Clearbit', status: 'gap', cost: '$12K/yr', notes: 'Rich B2B data — revisit at $50K revenue' },
    ],
  },
  {
    layer: 'Outreach',
    layerNum: '2',
    tools: [
      { name: 'Gmail SMTP (owned)', status: 'live', notes: 'dawnlabsai@gmail.com — free, works now' },
      { name: 'Google Workspace SMTP', status: 'planned', cost: '$7.20/user/mo', notes: '@emvy.ai addresses when domain purchased' },
      { name: 'Instantly.ai', status: 'planned', cost: '$37/mo', notes: 'Cold email at scale, warmup, inbox rotation' },
      { name: 'ZeroBounce', status: 'planned', cost: '$0.001/verify', notes: 'Verify before sending — protects deliverability' },
      { name: 'VAPI (Callie)', status: 'live', notes: 'Voice agent — discovery calls' },
      { name: 'Cal.com', status: 'live', notes: 'Booking — https://cal.com/jake-emvy/15-min-ai-chat' },
      { name: 'SendGrid', status: 'future', cost: '$20/mo', notes: 'Dedicated IP for 500+/day volume' },
    ],
  },
  {
    layer: 'Discovery',
    layerNum: '3',
    tools: [
      { name: 'Cal.com', status: 'live', notes: 'Booking links for discovery calls' },
      { name: 'VAPI (Callie)', status: 'live', notes: 'AI voice agent — transcribes and summarises discovery calls' },
      { name: 'Supabase (owned)', status: 'live', notes: 'Own CRM — leads, stages, notes, activity log' },
      { name: 'Dubsado', status: 'planned', cost: '$30/mo', notes: 'Proposals, contracts, invoicing, client portal' },
      { name: 'Google Docs + DocuSign', status: 'planned', cost: '$40/mo', notes: 'Templates + e-signature — simple until we need more' },
    ],
  },
  {
    layer: 'Audit',
    layerNum: '4',
    tools: [
      { name: 'Custom audit checklist (owned)', status: 'live', notes: 'Built by us. Stored in Supabase. Core IP.' },
      { name: 'emvy-audit-report-generator skill', status: 'live', notes: 'Generates audit document from discovery data' },
      { name: 'Google PageSpeed API', status: 'planned', cost: 'Free', notes: 'Core Web Vitals for any URL — pull into report' },
      { name: 'BuiltWith API', status: 'planned', cost: '$37/mo', notes: 'Detect AI/Tech tools any website uses — key for audit' },
      { name: 'Screaming Frog', status: 'planned', cost: '$259/yr', notes: 'Website crawler — essential for technical audits' },
    ],
  },
  {
    layer: 'Build',
    layerNum: '5',
    tools: [
      { name: 'Vercel', status: 'live', notes: 'App hosting — free tier 100GB bandwidth/mo' },
      { name: 'Supabase', status: 'live', notes: 'Database, auth, edge functions — free tier sufficient' },
      { name: 'Render', status: 'planned', cost: '$7/mo', notes: 'Backend services needing more than Vercel' },
      { name: 'GitHub', status: 'live', notes: 'Code hosting + GitHub Actions CI/CD — free' },
      { name: 'Claude Code (Anthropic)', status: 'live', notes: 'Primary build agent — MEWY runs here' },
      { name: 'NVIDIA API', status: 'live', notes: 'Access to 139 models — $0/pending' },
      { name: 'Anthropic Claude', status: 'planned', cost: '$3-15/million tokens', notes: 'Best coding model — add for complex builds' },
      { name: 'Zapier', status: 'planned', cost: '$19/mo', notes: 'Connect app X to app Y — simple automations' },
      { name: 'Framer', status: 'planned', cost: '$30/mo', notes: 'Best for agency-built marketing sites' },
      { name: 'Carrd', status: 'planned', cost: '$19/yr', notes: 'Simple one-page sites — AI tool landing pages' },
    ],
  },
  {
    layer: 'Delivery',
    layerNum: '6',
    tools: [
      { name: 'Supabase + Ops Hub', status: 'live', notes: 'Owned portal — all client data in Supabase' },
      { name: 'Google Drive', status: 'live', notes: 'Free — already used' },
      { name: 'WeTransfer', status: 'live', notes: 'Free for files up to 4GB — no account needed' },
      { name: 'Loom', status: 'planned', cost: '$15/mo', notes: 'Record walkthrough videos of audit findings' },
      { name: 'Linear', status: 'planned', cost: '$8/user/mo', notes: 'Issue tracking for internal builds' },
    ],
  },
  {
    layer: 'Reporting',
    layerNum: '7',
    tools: [
      { name: 'Ops Hub (Supabase + Vercel)', status: 'live', notes: 'Owned dashboard — pipeline + lead stats, real-time' },
      { name: 'Google Analytics 4', status: 'planned', cost: 'Free', notes: 'Track emvy.ai traffic' },
      { name: 'Vercel Analytics', status: 'planned', cost: 'Free', notes: 'Traffic + performance for Ops Hub' },
      { name: 'Supabase Realtime', status: 'live', notes: 'Live data in Ops Hub without refresh' },
      { name: 'Google Search Console API', status: 'planned', cost: 'Free', notes: 'Keyword rankings — pull into client reports' },
      { name: 'Google Data Studio (Looker Studio)', status: 'live', cost: 'Free', notes: 'Connect GA, Supabase, any data source' },
    ],
  },
  {
    layer: 'Retain',
    layerNum: '8',
    tools: [
      { name: 'Dubsado', status: 'planned', cost: '$30/mo', notes: 'Recurring invoicing, retainer management, client portal' },
      { name: 'Stripe', status: 'planned', notes: '2.9% + 30c per transaction — recurring billing' },
      { name: 'Loom', status: 'planned', cost: '$15/mo', notes: 'Monthly walkthrough videos — high perceived value for retainers' },
      { name: 'Slack', status: 'planned', cost: '$8/user/mo', notes: 'Ongoing communication with retainer clients' },
      { name: 'Toggl', status: 'planned', cost: '$9/user/mo', notes: 'Time tracking — essential for retainer billing accuracy' },
    ],
  },
  {
    layer: 'Admin',
    layerNum: '9',
    tools: [
      { name: 'Sole Trader (current)', status: 'live', notes: 'Dusk is the business — simplest structure' },
      { name: 'Company (Pty Ltd)', status: 'planned', cost: '~$600/yr', notes: 'Protect personal assets — talk to accountant at $10K/mo' },
      { name: 'MYOB', status: 'planned', cost: '$25/mo', notes: 'Accounting software — AU-focused' },
      { name: 'Wave', status: 'live', cost: 'Free', notes: 'Basic invoicing + accounting' },
      { name: 'Clockify', status: 'live', cost: 'Free', notes: 'Basic time tracking' },
      { name: 'ASIC Online Services', status: 'live', cost: 'Free', notes: 'Annual review, changes' },
      { name: 'Google Workspace', status: 'planned', cost: '$7.20/user/mo', notes: '@emvy.ai addresses' },
      { name: '1Password', status: 'planned', cost: '$4/user/mo', notes: 'Password manager — essential as tools grow' },
    ],
  },
];

const BLOCKERS = [
  { item: 'emvy.ai domain', type: 'Domain', status: 'waiting_on_dusk', notes: 'Buy from Porkbun — unblocks email, Search Console, Carrd' },
  { item: 'Exa API key', type: 'API', status: 'waiting_on_external', notes: 'Fallback search — optional' },
  { item: 'Hunter API key', type: 'API', status: 'waiting_on_external', notes: '$49/mo — optional, manual enrich works for now' },
  { item: 'Lead Finder to Supabase sync', type: 'Integration', status: 'in_progress', notes: 'Cron writes to pipeline.json, not Supabase — needs fixing' },
  { item: 'GA4 on site', type: 'Analytics', status: 'waiting_on_dusk', notes: 'Need G-XXXXXXXXXX measurement ID from Google' },
  { item: 'Supabase anon JWT key', type: 'Integration', status: 'waiting_on_dusk', notes: 'Dashboard write access — stored in Vercel env vars' },
];

const LIVE_COUNT = LAYERS.reduce((acc, l) => acc + l.tools.filter(t => t.status === 'live').length, 0);
const PLANNED_COUNT = LAYERS.reduce((acc, l) => acc + l.tools.filter(t => t.status === 'planned').length, 0);

export default function InfrastructurePage() {
  const [expandedLayer, setExpandedLayer] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'stack' | 'blockers' | 'crons'>('stack');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Infrastructure</h2>
          <p className="text-sm text-gray-500 mt-1">9-layer tool stack — Lead Gen through Admin</p>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <div className="text-center">
            <div className="text-xl font-bold text-green-400">{LIVE_COUNT}</div>
            <div className="text-xs text-gray-500">Live</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-blue-400">{PLANNED_COUNT}</div>
            <div className="text-xs text-gray-500">Planned</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-gray-500">{LAYERS.length}</div>
            <div className="text-xs text-gray-500">Layers</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-800 pb-0">
        {[
          { key: 'stack', label: 'Tool Stack' },
          { key: 'blockers', label: 'Blockers' },
          { key: 'crons', label: 'Active Crons' },
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

      {/* Stack Tab */}
      {activeTab === 'stack' && (
        <div className="space-y-2">
          {LAYERS.map(layer => {
            const liveTools = layer.tools.filter(t => t.status === 'live').length;
            const totalTools = layer.tools.length;
            const isExpanded = expandedLayer === layer.layerNum;
            return (
              <div key={layer.layerNum} className="border border-gray-800 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedLayer(isExpanded ? null : layer.layerNum)}
                  className="w-full flex items-center justify-between px-5 py-4 bg-gray-900 hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-xs font-mono text-gray-600 w-5">{layer.layerNum}</div>
                    <div className="text-sm font-medium text-white">{layer.layer}</div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-green-400">{liveTools} live</span>
                      <span className="text-gray-700">/</span>
                      <span className="text-xs text-gray-500">{totalTools} total</span>
                    </div>
                  </div>
                  <svg
                    className={`w-4 h-4 text-gray-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isExpanded && (
                  <div className="divide-y divide-gray-800 bg-gray-950">
                    {layer.tools.map(tool => (
                      <div key={tool.name} className="flex items-center justify-between px-5 py-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                            tool.status === 'live' ? 'bg-green-400' :
                            tool.status === 'planned' ? 'bg-blue-400' :
                            tool.status === 'gap' ? 'bg-yellow-400' : 'bg-gray-600'
                          }`} />
                          <span className={`text-sm ${tool.status === 'future' ? 'text-gray-600' : 'text-gray-300'}`}>{tool.name}</span>
                        </div>
                        <div className="flex items-center gap-4 flex-shrink-0">
                          {tool.cost && <span className="text-xs text-gray-600">{tool.cost}</span>}
                          <span className={`text-xs font-medium hidden md:block max-w-xs truncate ${
                            tool.status === 'live' ? 'text-green-400' :
                            tool.status === 'planned' ? 'text-blue-400' :
                            tool.status === 'gap' ? 'text-yellow-400' : 'text-gray-600'
                          }`}>{tool.notes}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Blockers Tab */}
      {activeTab === 'blockers' && (
        <div className="space-y-2">
          {BLOCKERS.map(blocker => (
            <div key={blocker.item} className="bg-gray-900 border border-gray-800 rounded-lg p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-200">{blocker.item}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      blocker.status === 'waiting_on_dusk' ? 'bg-red-900 text-red-300' :
                      blocker.status === 'waiting_on_external' ? 'bg-yellow-900 text-yellow-300' :
                      'bg-blue-900 text-blue-300'
                    }`}>
                      {blocker.status.replace(/_/g, ' ')}
                    </span>
                    <span className="text-xs text-gray-600">{blocker.type}</span>
                  </div>
                  {blocker.notes && <p className="text-xs text-gray-500 mt-1">{blocker.notes}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Crons Tab */}
      {activeTab === 'crons' && (
        <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Job</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Schedule</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {[
                { name: 'AI Opportunities Research', schedule: 'Midnight daily', status: 'Active', statusColor: 'text-green-400' },
                { name: 'Lead Finder', schedule: '9AM Mon-Thu', status: 'Needs fix — writes to pipeline.json not Supabase', statusColor: 'text-yellow-400' },
                { name: 'Reply Detector', schedule: '9/11/1/3/5PM M-F', status: 'Active', statusColor: 'text-green-400' },
                { name: 'Pipeline Health', schedule: '8AM Mondays', status: 'Active', statusColor: 'text-green-400' },
                { name: 'Session Snapshot', schedule: 'Every 30 min', status: 'Active', statusColor: 'text-green-400' },
              ].map(cron => (
                <tr key={cron.name}>
                  <td className="px-4 py-3 text-gray-300">{cron.name}</td>
                  <td className="px-4 py-3 text-gray-500">{cron.schedule}</td>
                  <td className="px-4 py-3"><span className={`text-xs font-medium ${cron.statusColor}`}>{cron.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
