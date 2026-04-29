'use client';

import { useState } from 'react';

type ChecklistItem = {
  id: string;
  task: string;
  category: string;
  status: 'done' | 'todo';
};

type Pillar = {
  id: string;
  name: string;
  topics: string[];
  priority: 'high' | 'medium';
  status: 'planned' | 'in_progress' | 'published';
};

type Keyword = {
  keyword: string;
  intent: string;
  difficulty: 'Low' | 'Medium' | 'High';
  priority: 'high' | 'medium';
};

const CHECKLIST: ChecklistItem[] = [
  // Domain
  { id: 'd1', task: 'Buy emvy.ai from Porkbun', category: 'domain', status: 'todo' },
  { id: 'd2', task: 'Point emvy.ai to Vercel (A record + CNAME)', category: 'domain', status: 'todo' },
  { id: 'd3', task: 'Add emvy.ai to Google Search Console (DNS TXT verification)', category: 'domain', status: 'todo' },
  { id: 'd4', task: 'Add emvyai.vercel.app to Google Search Console (HTML tag)', category: 'domain', status: 'todo' },
  { id: 'd5', task: 'Set up www.emvy.ai redirect to emvy.ai', category: 'domain', status: 'todo' },
  // Analytics
  { id: 'a1', task: 'Google Analytics 4 on emvyai.vercel.app', category: 'analytics', status: 'todo' },
  { id: 'a2', task: 'Enable Vercel Analytics (free — in Vercel dashboard)', category: 'analytics', status: 'todo' },
  { id: 'a3', task: 'Microsoft Clarity on emvyai.vercel.app', category: 'analytics', status: 'todo' },
  // Technical
  { id: 't1', task: 'Run PageSpeed Insights on emvyai.vercel.app', category: 'technical', status: 'todo' },
  { id: 't2', task: 'Fix any Core Web Vitals failures (LCP, FID, CLS)', category: 'technical', status: 'todo' },
  { id: 't3', task: 'Submit sitemap to Google Search Console (/sitemap.xml)', category: 'technical', status: 'todo' },
  // Content Infrastructure
  { id: 'c1', task: 'Set up Carrd ($19/yr) — lead magnet landing page', category: 'content', status: 'todo' },
  { id: 'c2', task: 'Create PDF lead magnet: "The AI Audit Checklist for Perth SMBs"', category: 'content', status: 'todo' },
  { id: 'c3', task: 'Set up email capture on Carrd (Tally or ConvertKit)', category: 'content', status: 'todo' },
  { id: 'c4', task: 'Publish Carrd page at emvy.ai/audit-checklist', category: 'content', status: 'todo' },
  { id: 'c5', task: 'Build emvy-content-pipeline skill v2 with SEO research step', category: 'content', status: 'todo' },
];

const PILLARS: Pillar[] = [
  {
    id: 'p1',
    name: 'AI Tools Not Working',
    topics: [
      'Why your AI tools don\'t talk to each other',
      'The hidden cost of disconnected AI tools',
      'How to audit your AI stack in 30 minutes',
    ],
    priority: 'high',
    status: 'planned',
  },
  {
    id: 'p2',
    name: 'AI Phone Answering',
    topics: [
      'Why your AI phone agent is missing calls',
      'Why Botpress/VAPI isn\'t enough on its own',
      'The AI receptionist audit checklist',
    ],
    priority: 'high',
    status: 'planned',
  },
  {
    id: 'p3',
    name: 'AI for Small Business',
    topics: [
      'AI automation for Perth small business — what actually works',
      'The $500/mo vs $5,000/mo AI agency: what\'s the difference',
      'How much does an AI audit cost in Australia',
    ],
    priority: 'high',
    status: 'planned',
  },
  {
    id: 'p4',
    name: 'Case Studies + Results',
    topics: [
      'How [Industry] in Perth automated [problem]',
      'From [pain] to [result] — real EMVY client story',
    ],
    priority: 'medium',
    status: 'planned',
  },
];

const KEYWORDS: Keyword[] = [
  { keyword: 'AI audit Perth', intent: 'Commercial', difficulty: 'Low', priority: 'high' },
  { keyword: 'AI automation agency Perth', intent: 'Commercial', difficulty: 'Low', priority: 'high' },
  { keyword: 'AI phone answering Perth', intent: 'Commercial', difficulty: 'Low', priority: 'high' },
  { keyword: 'small business AI tools not working', intent: 'Informational', difficulty: 'Low', priority: 'medium' },
  { keyword: 'automation audit small business', intent: 'Commercial', difficulty: 'Medium', priority: 'medium' },
  { keyword: 'AI consultant Perth', intent: 'Commercial', difficulty: 'Medium', priority: 'medium' },
  { keyword: 'how to automate my Perth business', intent: 'Informational', difficulty: 'Low', priority: 'medium' },
  { keyword: 'AI chatbot for small business Perth', intent: 'Commercial', difficulty: 'Low', priority: 'medium' },
];

const DISTRIBUTION = {
  free: [
    'LinkedIn (Dusk personal profile)',
    'Reddit (r/smallbusiness, r/entrepreneur — no spam)',
    'Email warm pipeline leads',
    'Google Business Profile',
  ],
  paid: [
    'LinkedIn Sponsored Content — $10-50/day',
    'Google Ads — $10-30/day',
    'Perth business newsletters',
  ],
};

const PHASE3_CHECKLIST = [
  'Primary keyword in: title, H1, first 100 words, URL slug',
  'Secondary keywords in H2s and throughout body',
  'Internal link to /audit or /contact',
  'External link to 1-2 authoritative sources',
  'Meta description (150-160 chars) with keyword + CTA',
  'Image alt text describing image (include keyword)',
  'Add to Google Search Console via URL Inspection -> Request indexing',
  'Share on LinkedIn if/when relevant',
];

const REPORTING_TEMPLATE = [
  { label: 'Organic Traffic', note: 'up/down from last month' },
  { label: 'Organic Leads', note: 'from GA4 goals' },
  { label: 'Bookings from SEO', note: '' },
  { label: 'Ranking Keywords', note: 'total indexed' },
  { label: 'Top Performing Post', note: 'title + views' },
  { label: 'Core Web Vitals', note: '% passing' },
  { label: 'Backlinks', note: 'new this month' },
];

const CATEGORY_LABELS: Record<string, string> = {
  domain: 'Domain',
  analytics: 'Analytics',
  technical: 'Technical',
  content: 'Content',
};

const CATEGORY_COLORS: Record<string, string> = {
  domain: 'text-blue-400',
  analytics: 'text-green-400',
  technical: 'text-purple-400',
  content: 'text-orange-400',
};

export default function SeoPage() {
  const [items, setItems] = useState<ChecklistItem[]>(CHECKLIST);
  const [activeTab, setActiveTab] = useState<'checklist' | 'pillars' | 'keywords' | 'distribution' | 'activation'>('activation');

  const toggleItem = (id: string) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, status: item.status === 'done' ? 'todo' : 'done' }
          : item
      )
    );
  };

  const categories = ['domain', 'analytics', 'technical', 'content'] as const;
  const doneCount = items.filter(i => i.status === 'done').length;
  const totalCount = items.length;
  const progressPct = Math.round((doneCount / totalCount) * 100);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">SEO / Content</h2>
          <p className="text-sm text-gray-500 mt-1">Organic lead generation playbook — activate when outbound is locked</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-400">{progressPct}%</div>
            <div className="text-xs text-gray-500">Phase 1 Complete</div>
          </div>
        </div>
      </div>

      {/* Activation Trigger Banner */}
      <div className="bg-amber-950 border border-amber-800 rounded-lg p-5">
        <div className="text-sm font-medium text-amber-300 mb-3">Activation Trigger — Flip the SEO switch when ALL of these are true:</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            '3+ consistent audit clients/month',
            'Email sequence 1.0 running without daily management',
            'Reply Detector cron catching replies reliably',
            "Dusk's calendar full enough that outbound takes too much time",
            'Know the exact 3-5 pain points clients come for (from real conversations)',
          ].map((req, i) => (
            <div key={i} className="flex items-start gap-2">
              <div className="w-5 h-5 rounded border border-amber-700 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-amber-200">{req}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Lead Magnet Strategy */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
        <div className="text-sm font-medium text-gray-300 mb-4">Lead Magnet Strategy</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Lead Magnet</div>
            <div className="text-sm font-medium text-white">&quot;The AI Audit Checklist for Perth SMBs&quot;</div>
            <div className="text-xs text-gray-500 mt-1">PDF — create once, use forever</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Landing Page</div>
            <div className="text-sm font-medium text-white">Carrd ($19/yr)</div>
            <div className="text-xs text-gray-500 mt-1">emvy.ai/audit-checklist</div>
          </div>
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">Capture Tool</div>
            <div className="text-sm font-medium text-white">Tally or ConvertKit</div>
            <div className="text-xs text-gray-500 mt-1">Email capture + PDF delivery</div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-700">
          <div className="text-xs text-gray-500 mb-2">Content Types That Convert for B2B</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { type: 'Lead magnet checklist', conversion: '10-20%', effort: 'Medium' },
              { type: 'How-to blog post', conversion: '2-5%', effort: 'Medium' },
              { type: 'Case study', conversion: '5-15%', effort: 'High' },
              { type: 'Free audit CTA', conversion: '5-10%', effort: 'High' },
            ].map(item => (
              <div key={item.type} className="bg-gray-800 rounded p-3">
                <div className="text-xs text-gray-300 font-medium">{item.type}</div>
                <div className="text-xs text-gray-500 mt-1">{item.conversion} conversion &middot; {item.effort} effort</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-800 pb-0">
        {[
          { key: 'activation', label: 'Activation' },
          { key: 'checklist', label: 'Phase 1 Checklist' },
          { key: 'pillars', label: 'Content Pillars' },
          { key: 'keywords', label: 'Keywords' },
          { key: 'distribution', label: 'Distribution' },
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

      {/* Activation Tab */}
      {activeTab === 'activation' && (
        <div className="space-y-6">
          <div>
            <div className="text-sm font-medium text-gray-300 mb-3">Pre-Flight Checklist (run before publishing anything)</div>
            <div className="space-y-1">
              {[
                'Domain emvy.ai purchased + pointed to Vercel',
                'Search Console verified for emvy.ai + emvyai.vercel.app',
                'GA4 installed on site',
                'Core Web Vitals passing',
                'Sitemap submitted to Google',
                'Carrd lead magnet page live at emvy.ai/audit-checklist',
                'Content pipeline skill rebuilt with SEO step',
                '5 blog post titles confirmed (one per pillar)',
              ].map((task, i) => (
                <div key={i} className="flex items-center gap-3 py-2 border-b border-gray-800 last:border-0">
                  <div className="w-4 h-4 rounded border border-gray-600 flex-shrink-0" />
                  <span className="text-sm text-gray-400">{task}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-medium text-gray-300 mb-3">Content Cadence — Once Active</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['Week 1: Lead magnet + 1 blog post', 'Week 2: Blog post 2', 'Week 3: Blog post 3 + submit to Search Console', 'Week 4: Review analytics, double down on what works'].map((week, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 rounded-lg p-3">
                  <div className="text-xs text-gray-500 mb-1">Week {i + 1}</div>
                  <div className="text-xs text-gray-300">{week}</div>
                </div>
              ))}
            </div>
            <div className="mt-3 text-sm text-gray-600">Ongoing: 1-2 posts/month once active</div>
          </div>

          <div>
            <div className="text-sm font-medium text-gray-300 mb-3">Phase 3 — SEO Technical Checklist (before each post)</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              {PHASE3_CHECKLIST.map((item, i) => (
                <div key={i} className="flex items-center gap-2 py-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-600 flex-shrink-0" />
                  <span className="text-sm text-gray-400">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-sm font-medium text-gray-300 mb-3">Monthly Reporting Template</div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
              <div className="grid grid-cols-2 gap-3">
                {REPORTING_TEMPLATE.map(item => (
                  <div key={item.label} className="flex items-center justify-between border-b border-gray-800 pb-2 last:border-0">
                    <span className="text-xs text-gray-400">{item.label}</span>
                    <span className="text-xs text-gray-600">{item.note || '—'}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Phase 1 Checklist Tab */}
      {activeTab === 'checklist' && (
        <div className="space-y-6">
          {categories.map(cat => {
            const catItems = items.filter(i => i.category === cat);
            const catDone = catItems.filter(i => i.status === 'done').length;
            return (
              <div key={cat}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm font-medium ${CATEGORY_COLORS[cat]}`}>
                    {CATEGORY_LABELS[cat]}
                  </span>
                  <span className="text-xs text-gray-600">{catDone}/{catItems.length}</span>
                </div>
                <div className="space-y-1">
                  {catItems.map(item => (
                    <button
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      className="w-full text-left flex items-center gap-3 px-4 py-2.5 rounded-lg border transition-all bg-gray-900 border-gray-800 hover:border-gray-700"
                    >
                      <span className={`w-4 h-4 rounded border flex-shrink-0 flex items-center justify-center ${
                        item.status === 'done' ? 'bg-green-500 border-green-500' : 'border-gray-600'
                      }`}>
                        {item.status === 'done' && (
                          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </span>
                      <span className={`text-sm ${item.status === 'done' ? 'line-through text-gray-600' : 'text-gray-300'}`}>
                        {item.task}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Content Pillars Tab */}
      {activeTab === 'pillars' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {PILLARS.map(pillar => (
            <div key={pillar.id} className="bg-gray-900 border border-gray-800 rounded-lg p-5">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-base text-white">{pillar.name}</h3>
                  <div className="flex gap-2 mt-2">
                    <span className={`text-xs px-2 py-0.5 rounded font-medium ${
                      pillar.priority === 'high' ? 'bg-red-900 text-red-300' : 'bg-gray-700 text-gray-300'
                    }`}>
                      {pillar.priority.toUpperCase()}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      pillar.status === 'published' ? 'bg-green-900 text-green-300' :
                      pillar.status === 'in_progress' ? 'bg-blue-900 text-blue-300' :
                      'bg-gray-800 text-gray-400'
                    }`}>
                      {pillar.status.replace('_', ' ')}
                    </span>
                  </div>
                </div>
              </div>
              <ul className="space-y-2">
                {pillar.topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5 flex-shrink-0">—</span>
                    <span className="text-sm text-gray-400">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Keywords Tab */}
      {activeTab === 'keywords' && (
        <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Keyword</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Intent</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Difficulty</th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {KEYWORDS.map((kw, i) => (
                <tr key={i} className="hover:bg-gray-800/40 transition-colors">
                  <td className="px-4 py-3 text-gray-200 font-mono text-xs">{kw.keyword}</td>
                  <td className="px-4 py-3 text-gray-400 text-xs">{kw.intent}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      kw.difficulty === 'Low' ? 'bg-green-900 text-green-300' : 'bg-yellow-900 text-yellow-300'
                    }`}>{kw.difficulty}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded ${
                      kw.priority === 'high' ? 'bg-red-900 text-red-300' : 'bg-gray-700 text-gray-300'
                    }`}>{kw.priority}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Distribution Tab */}
      {activeTab === 'distribution' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
              <div className="text-sm font-medium text-gray-300 mb-4">Free Distribution</div>
              <ul className="space-y-2">
                {DISTRIBUTION.free.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
              <div className="text-sm font-medium text-gray-300 mb-4">Paid Distribution (when budget allows)</div>
              <ul className="space-y-2">
                {DISTRIBUTION.paid.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <div className="text-sm font-medium text-gray-300 mb-4">Internal Linking System (automatic SEO value)</div>
            <div className="grid grid-cols-2 gap-3">
              {[
                'Every blog post links to /audit (service page)',
                'Every blog post links to other related posts',
                'Audit service page links to relevant blog posts',
                'Footer links to top 5 blog posts',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-600 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-lg p-5">
            <div className="text-sm font-medium text-gray-300 mb-4">Keyword Research Stack (free tools)</div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {[
                { tool: 'Google Search Console', use: 'See what you already rank for' },
                { tool: 'Google Autocomplete', use: 'Type and see suggestions' },
                { tool: 'AnswerThePublic', use: 'Visual keyword clusters' },
                { tool: 'Ubersuggest', use: 'Keyword ideas + volume' },
                { tool: 'AlsoAsked', use: '"People also ask" clusters' },
                { tool: 'Hunter.io', use: 'Find who is searching' },
              ].map(item => (
                <div key={item.tool} className="bg-gray-800 rounded p-3">
                  <div className="text-xs text-gray-300 font-medium">{item.tool}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{item.use}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
