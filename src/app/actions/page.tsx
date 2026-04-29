'use client';

import { useState } from 'react';

type PriorityAction = {
  id: string;
  action: string;
  reason: string;
  priority: 'urgent' | 'high' | 'medium';
  source?: string;
  due_date?: string;
};

const ACTIONS: PriorityAction[] = [
  // URGENT
  {
    id: 'a1',
    action: 'Review Dicandilo Thomson (HOT lead) — search for pain evidence, draft outreach email',
    reason: 'Top HOT lead — Matt Dicandilo, Chartered Accountant, Burswood. Score 7/10. Awaiting reply.',
    priority: 'urgent',
    source: 'vault/daily/2026-04-29.md',
    due_date: '2026-04-30',
  },
  {
    id: 'a2',
    action: 'Review Aircon Express Perth + Alpha Co Plumbing (DISCOVERED 10/10)',
    reason: 'Both 10/10 prospects — 38 years and est. 1999. Need review before staging.',
    priority: 'urgent',
    source: 'vault/daily/2026-04-29.md',
    due_date: '2026-04-30',
  },
  // HIGH
  {
    id: 'a3',
    action: 'Fix Lead Finder cron — write to Supabase instead of pipeline.json',
    reason: 'Cron is disconnected from live Supabase dashboard. 24 leads are in leads table, cron writes elsewhere.',
    priority: 'high',
    source: 'vault/daily/2026-04-29.md',
  },
  {
    id: 'a4',
    action: 'Buy emvy.ai from Porkbun',
    reason: 'Domain purchase is blocking: Search Console verification, site ownership proof, email setup, Carrd.',
    priority: 'high',
    source: 'vault/emvy-content-seo-playbook.md',
  },
  {
    id: 'a5',
    action: 'Set up GA4 on emvyai.vercel.app',
    reason: 'Need G-XXXXXXXXXX measurement ID. Required for SEO measurement.',
    priority: 'high',
    source: 'vault/emvy-content-seo-playbook.md',
  },
  // MEDIUM
  {
    id: 'a6',
    action: 'Wait for replies from 11 SENT leads',
    reason: '12 HOT/WARM leads emailed Apr 24. Reply Detector cron running 9/11/1/3/5PM Mon-Fri.',
    priority: 'medium',
    source: 'vault/daily/2026-04-29.md',
  },
  {
    id: 'a7',
    action: 'Get Supabase anon JWT key — dashboard write access needed',
    reason: 'Dashboard can read but not write. Need eyJ... anon key from Vercel env vars.',
    priority: 'medium',
    source: 'This session',
  },
  {
    id: 'a8',
    action: 'Build out Ops Hub /leads page with live Supabase data',
    reason: '24 leads are in Supabase. Dashboard should query leads table directly.',
    priority: 'medium',
    source: 'This session',
  },
];

const BLOCKERS = [
  { item: 'emvy.ai domain', type: 'Domain', status: 'waiting_on_dusk', notes: 'Buy from Porkbun — ~$50/yr' },
  { item: 'Exa API key', type: 'API', status: 'waiting_on_external', notes: 'Optional — fallback search' },
  { item: 'Hunter API key', type: 'API', status: 'waiting_on_external', notes: '$49/mo — optional, manual enrich works for now' },
  { item: 'Lead Finder to Supabase sync', type: 'Integration', status: 'in_progress', notes: 'Cron writes to pipeline.json, disconnected from Supabase' },
  { item: 'GA4 on site', type: 'Analytics', status: 'waiting_on_dusk', notes: 'Need G-XXXXXXXXXX measurement ID' },
  { item: 'Supabase anon JWT key', type: 'Integration', status: 'waiting_on_dusk', notes: 'Dashboard write access — stored in Vercel env vars' },
];

const OFFER_STACK = [
  { tier: 'Lead', desc: 'Free 15-min discovery call', price: 'Free' },
  { tier: 'Audit', desc: 'Structured AI audit — find what is and is not working', price: '$1,500' },
  { tier: 'Build', desc: 'Build the AI solution that fixes what the audit found', price: '$3,000–$5,000' },
  { tier: 'Retainer', desc: 'Ongoing maintenance + iterations', price: '$1,500/mo' },
];

const PITCH_ANGLES = [
  { angle: 'AI Phone Answering', desc: 'Missed calls = missed jobs. VAPI + Cal.com handles booking while you work.' },
  { angle: 'AI Tool Integration', desc: 'You have 5 tools. None of them talk to each other. We fix that.' },
  { angle: 'AI Audit First', desc: 'Before we build anything, we audit what you have. You might not need to build.' },
  { angle: 'Done-For-You', desc: 'We spec, build, and maintain. You focus on your business.' },
];

const PRIORITY_COLORS: Record<string, { bg: string; border: string; text: string; label: string }> = {
  urgent: { bg: 'bg-red-950', border: 'border-red-800', text: 'text-red-300', label: 'Urgent' },
  high: { bg: 'bg-orange-950', border: 'border-orange-800', text: 'text-orange-300', label: 'High' },
  medium: { bg: 'bg-gray-900', border: 'border-gray-700', text: 'text-gray-400', label: 'Medium' },
};

export default function ActionsPage() {
  const [activeTab, setActiveTab] = useState<'priorities' | 'blockers' | 'offer' | 'pitch'>('priorities');
  const urgent = ACTIONS.filter(a => a.priority === 'urgent');
  const high = ACTIONS.filter(a => a.priority === 'high');
  const medium = ACTIONS.filter(a => a.priority === 'medium');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Actions</h2>
          <p className="text-sm text-gray-500 mt-1">Priorities, blockers, offer stack, and pitch angles</p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="text-center">
            <div className="text-xl font-bold text-red-400">{urgent.length}</div>
            <div className="text-xs text-gray-500">Urgent</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-orange-400">{high.length}</div>
            <div className="text-xs text-gray-500">High</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-gray-500">{BLOCKERS.length}</div>
            <div className="text-xs text-gray-500">Blockers</div>
          </div>
        </div>
      </div>

      {/* Offer Stack Banner */}
      <div className="grid grid-cols-4 gap-3">
        {OFFER_STACK.map(o => (
          <div key={o.tier} className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center">
            <div className="text-xs text-gray-500 uppercase tracking-wider">{o.tier}</div>
            <div className="text-lg font-bold text-white mt-1">{o.price}</div>
            <div className="text-xs text-gray-500 mt-1">{o.desc}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-800 pb-0">
        {[
          { key: 'priorities', label: 'Priorities' },
          { key: 'blockers', label: 'Blockers' },
          { key: 'offer', label: 'Offer Stack' },
          { key: 'pitch', label: 'Pitch Angles' },
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

      {/* Priorities Tab */}
      {activeTab === 'priorities' && (
        <div className="space-y-6">
          {urgent.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-red-400 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                Urgent — Do Today
              </h3>
              <div className="space-y-2">
                {urgent.map(action => (
                  <div key={action.id} className={`${PRIORITY_COLORS.urgent.bg} border ${PRIORITY_COLORS.urgent.border} rounded-lg p-4`}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className={`font-medium text-sm ${PRIORITY_COLORS.urgent.text}`}>{action.action}</h3>
                        <p className={`text-xs ${PRIORITY_COLORS.urgent.text} opacity-70 mt-1`}>{action.reason}</p>
                        {action.source && <p className="text-xs text-red-400 opacity-50 mt-1">Source: {action.source}</p>}
                      </div>
                      {action.due_date && (
                        <span className="text-xs text-red-400 bg-red-900 px-2 py-0.5 rounded flex-shrink-0">
                          {action.due_date}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {high.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-orange-400 mb-3">High Priority</h3>
              <div className="space-y-2">
                {high.map(action => (
                  <div key={action.id} className={`${PRIORITY_COLORS.high.bg} border ${PRIORITY_COLORS.high.border} rounded-lg p-4`}>
                    <h3 className={`font-medium text-sm ${PRIORITY_COLORS.high.text}`}>{action.action}</h3>
                    <p className={`text-xs ${PRIORITY_COLORS.high.text} opacity-70 mt-1`}>{action.reason}</p>
                    {action.source && <p className="text-xs text-orange-400 opacity-50 mt-1">Source: {action.source}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {medium.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-3">Medium Priority</h3>
              <div className="space-y-2">
                {medium.map(action => (
                  <div key={action.id} className={`${PRIORITY_COLORS.medium.bg} border ${PRIORITY_COLORS.medium.border} rounded-lg p-3`}>
                    <h3 className={`font-medium text-sm ${PRIORITY_COLORS.medium.text}`}>{action.action}</h3>
                    <p className={`text-xs ${PRIORITY_COLORS.medium.text} opacity-70 mt-1`}>{action.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Blockers Tab */}
      {activeTab === 'blockers' && (
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-red-950 border border-red-900 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-red-400">{BLOCKERS.filter(b => b.status === 'waiting_on_dusk').length}</div>
              <div className="text-xs text-red-400 opacity-70">Waiting You</div>
            </div>
            <div className="bg-yellow-950 border border-yellow-900 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-yellow-400">{BLOCKERS.filter(b => b.status === 'waiting_on_external').length}</div>
              <div className="text-xs text-yellow-400 opacity-70">Waiting External</div>
            </div>
            <div className="bg-blue-950 border border-blue-900 rounded-lg p-3 text-center">
              <div className="text-xl font-bold text-blue-400">{BLOCKERS.filter(b => b.status === 'in_progress').length}</div>
              <div className="text-xs text-blue-400 opacity-70">In Progress</div>
            </div>
          </div>
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

      {/* Offer Stack Tab */}
      {activeTab === 'offer' && (
        <div className="space-y-4">
          {OFFER_STACK.map(o => (
            <div key={o.tier} className="bg-gray-900 border border-gray-800 rounded-lg p-5">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{o.tier}</div>
                  <div className="text-xl font-bold text-white mt-1">{o.price}</div>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-2">{o.desc}</p>
            </div>
          ))}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <div className="text-sm font-medium text-gray-300 mb-3">Booking</div>
            <a
              href="https://cal.com/jake-emvy/15-min-ai-chat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm font-medium"
            >
              cal.com/jake-emvy/15-min-ai-chat
            </a>
          </div>
        </div>
      )}

      {/* Pitch Angles Tab */}
      {activeTab === 'pitch' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PITCH_ANGLES.map(angle => (
            <div key={angle.angle} className="bg-gray-900 border border-gray-800 rounded-lg p-5">
              <div className="text-sm font-medium text-blue-400 mb-2">{angle.angle}</div>
              <p className="text-sm text-gray-400">{angle.desc}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
