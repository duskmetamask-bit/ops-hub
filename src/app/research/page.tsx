'use client';

import { useState } from 'react';

const SMB_PAIN = [
  {
    category: 'Revenue & Sales',
    items: [
      'Lead qualification — filtering inbound noise, scoring prospects, routing to right rep',
      'Outreach automation — personalized cold email/LinkedIn at scale without sounding robotic',
      'CRM hygiene — auto-updating records, logging calls, flagging stale data',
      'Sales forecasting — predicting close rates and revenue with AI-assisted accuracy',
    ],
  },
  {
    category: 'Operations & Admin',
    items: [
      'Customer support — chatbots, auto-responders, ticket routing (biggest adoption area)',
      'Scheduling & booking — appointment automation, calendar management',
      'Data entry & processing — invoice processing, form filling, document handling',
      'Internal search — finding info across docs, emails, Slack, Notion',
    ],
  },
  {
    category: 'Marketing',
    items: [
      'Content generation — social posts, blog drafts, ad copy (most used, most hated for quality)',
      'SEO optimization — keyword research, meta descriptions, content briefs',
      'Email marketing — sequence writing, A/B subject lines, send-time optimization',
    ],
  },
  {
    category: 'Finance & HR',
    items: [
      'Bookkeeping automation — reconciling transactions, categorizing expenses',
      'Payroll & benefits admin — automated processing, compliance checks',
      'Hiring pipelines — resume screening, interview scheduling, offer letters',
    ],
  },
];

const WHAT_BREAKS = [
  {
    title: 'AI SDRs / Fully automated outbound email at scale',
    breaks: 'Email providers flag as spam, reply quality is obvious, leads complain. Works for 50-100 emails/day, falls apart at volume.',
    root: 'Low intelligence, high reputation risk',
  },
  {
    title: 'AI-generated content posted directly without human review',
    breaks: 'Hallucinated facts, brand voice mismatch, wrong pricing, outdated info. Good for first drafts, dangerous for published output.',
    root: 'Looks "AI slop" — damages brand trust',
  },
  {
    title: 'Autonomous agents that take actions without confirmation',
    breaks: 'Sends wrong emails, books incorrect meetings, modifies data it should not.',
    root: 'No accountability when it goes wrong',
  },
  {
    title: 'Cross-platform data sync workflows (Zapier/Make)',
    breaks: 'API changes, rate limits, field mapping drift, auth token expiration.',
    root: '30-40% of automations fail silently within 6 months without active maintenance',
  },
  {
    title: 'AI chatbots trained on poor knowledge bases',
    breaks: 'Confidently wrong answers, cannot handle edge cases, frustrates customers.',
    root: 'Businesses try to automate too much, too fast, with messy data',
  },
  {
    title: 'Predictive analytics / forecasting (for SMBs)',
    breaks: 'Not enough data for reliable predictions, wrong outputs misleading.',
    root: 'AI generates plausible-sounding numbers that are wrong',
  },
  {
    title: 'Auto-generated proposals / quotes',
    breaks: 'Wrong pricing, missing scope, legal exposure.',
    root: '"AI said it was fine" does not hold up',
  },
];

const WHAT_WORKS = [
  { use: 'Meeting transcription + summary', why: 'Low stakes if wrong, massive time savings. Gong, Fireflies, Otter are solid.' },
  { use: 'Lead enrichment + data lookup', why: 'Clay, Apollo. Mostly reliable, clear ROI.' },
  { use: 'Customer support deflection', why: 'Deflecting Tier 1 tickets 30-50% with Intercom/Zendesk AI. Works well when FAQ-shaped.' },
  { use: 'Document Q&A', why: 'Giving AI a knowledge base and letting it answer questions. Works reliably with good RAG.' },
  { use: 'Code completion', why: 'Copilot/Cursor. Clear productivity wins for developers.' },
  { use: 'Grammar & writing refinement', why: 'Grammarly, Claude, GPT for polishing. Consistent quality.' },
];

const KEY_TAKEAWAYS = [
  'Most SMBs are oversubscribed — paying for too many tools that do not integrate',
  'Most SMBs are under-implemented — tools not configured or integrated properly',
  'Most SMBs are unsupervised — no visibility into what is working or broken',
  'Most SMBs are underskilled — nobody in-house knows how to use AI properly',
];

const EMVY_POSITIONING = '"You have AI tools. They are not working. We will audit what is broken, fix what is wrong, and build what you actually need."';

const AGENT_LANDSCAPE = [
  { category: 'Customer-Facing', agents: ['Intercom Fin — AI chatbot for customer support', 'Zendesk AI — ticket routing, auto-responses', 'Drift — AI sales chatbot for website visitors', 'Freshdesk Freddy — auto-ticket resolution, agent assist'] },
  { category: 'Sales & Revenue', agents: ['Clay + AI — data enrichment + personalized outreach at scale', 'Apollo AI — lead discovery, email sequencing, calling automation', '11x Alice — AI SDR, automated prospecting and outreach'] },
  { category: 'Operations & Back-Office', agents: ['Nanonets — document processing, invoice OCR, data extraction', 'Gong / Chorus — sales call analysis, deal intelligence, coaching', 'Notion AI — doc drafting, search, summarization inside Notion'] },
  { category: 'Marketing', agents: ['Jasper — marketing copy generation', 'Surfer SEO — content optimization for search', 'AdCreative.ai — ad creative generation and testing'] },
  { category: 'Developer / IT', agents: ['Cursor — AI code IDE, autocomplete, agent mode', 'GitHub Copilot — code completion across languages', 'Vercel v0 — UI component generation from prompts'] },
];

export default function ResearchPage() {
  const [activeTab, setActiveTab] = useState<'market' | 'landscape' | 'what-works' | 'emvy'>('market');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-white">Research</h2>
        <p className="text-sm text-gray-500 mt-1">SMB AI pain points, agent landscape, what works, what breaks</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-800 pb-0">
        {[
          { key: 'market', label: 'SMB Pain Points' },
          { key: 'landscape', label: 'Agent Landscape' },
          { key: 'what-works', label: 'What Works vs Breaks' },
          { key: 'emvy', label: 'EMVY Takeaways' },
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

      {/* SMB Pain Points */}
      {activeTab === 'market' && (
        <div className="grid grid-cols-2 gap-4">
          {SMB_PAIN.map(cat => (
            <div key={cat.category} className="bg-gray-900 border border-gray-800 rounded-lg p-5">
              <div className="text-sm font-medium text-gray-300 mb-4">{cat.category}</div>
              <ul className="space-y-2">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-600 flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Agent Landscape */}
      {activeTab === 'landscape' && (
        <div className="space-y-4">
          {AGENT_LANDSCAPE.map(cat => (
            <div key={cat.category} className="bg-gray-900 border border-gray-800 rounded-lg p-5">
              <div className="text-sm font-medium text-gray-300 mb-3">{cat.category}</div>
              <div className="grid grid-cols-2 gap-2">
                {cat.agents.map((agent, i) => (
                  <div key={i} className="text-sm text-gray-400 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-600 flex-shrink-0 mt-1.5" />
                    {agent}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* What Works vs Breaks */}
      {activeTab === 'what-works' && (
        <div className="space-y-6">
          <div>
            <div className="text-sm font-medium text-green-400 mb-3">What Works (Stable, High-ROI)</div>
            <div className="grid grid-cols-2 gap-3">
              {WHAT_WORKS.map((item, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                  <div className="text-sm font-medium text-gray-200">{item.use}</div>
                  <div className="text-xs text-gray-500 mt-1">{item.why}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-red-400 mb-3">What Breaks (Unreliable, High-Maintenance)</div>
            <div className="space-y-2">
              {WHAT_BREAKS.map((item, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                  <div className="text-sm font-medium text-gray-200 mb-1">{item.title}</div>
                  <div className="text-xs text-gray-500 mb-1">{item.breaks}</div>
                  <div className="text-xs text-red-400 opacity-70">Root cause: {item.root}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* EMVY Takeaways */}
      {activeTab === 'emvy' && (
        <div className="space-y-6">
          <div className="bg-blue-950 border border-blue-900 rounded-lg p-5">
            <div className="text-xs text-blue-400 uppercase tracking-wider mb-2">EMVY Positioning</div>
            <div className="text-lg font-medium text-blue-200">{EMVY_POSITIONING}</div>
          </div>

          <div>
            <div className="text-sm font-medium text-gray-300 mb-3">The Opportunity</div>
            <div className="grid grid-cols-2 gap-3">
              {KEY_TAKEAWAYS.map((item, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-sm text-gray-400">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-medium text-gray-300 mb-3">What to Sell</div>
            <div className="space-y-2">
              {[
                { service: 'AI Audit', price: '$1,500', pain: '"We have 5 tools and none of them work together"' },
                { service: 'AI Build', price: '$3-5K', pain: '"We need X automated but do not know how to build it right"' },
                { service: 'AI Retainer', price: '$1,500/mo', pain: '"We keep buying tools that break and nobody maintains them"' },
              ].map(item => (
                <div key={item.service} className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-200">{item.service}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{item.pain}</div>
                  </div>
                  <div className="text-lg font-bold text-white">{item.price}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <div className="text-sm font-medium text-gray-300 mb-3">Competitive Edge</div>
            <div className="space-y-2">
              {[
                'Integration-first — most agencies sell tools, we connect them',
                'Maintenance included — we do not disappear after the build',
                'Honest about limitations — we tell clients when AI is not the right solution',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 mt-1.5" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
