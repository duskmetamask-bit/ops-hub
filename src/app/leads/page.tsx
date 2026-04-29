'use client';

import { useState } from 'react';
import type { Lead } from '@/lib/types';

// Full 24-lead EMVY pipeline — all with emails, scored, enriched
const LEADS: Lead[] = [
  // HOT
  {
    id: 'l1',
    name: 'Dicandilo Thomson',
    email: 'office@dicandilothomson.com.au',
    contact: 'Matt Dicandilo',
    stage: 'HOT',
    score: 7,
    industry: 'Chartered Accountant',
    suburb: 'Burswood, WA',
    signal: 'Chartered accounting firm, 20yr+ experience, small business tax focus',
    icp_fit: 'Established firm, multiple staff implied, professional services — high ICP fit',
  },
  // WARM
  {
    id: 'l2',
    name: 'DPS Accounting',
    email: 'pj@singla.com.au',
    contact: 'Pankaj Singla (PJ)',
    stage: 'WARM',
    score: 8,
    industry: 'Accountant',
    suburb: 'Joondalup, WA',
    signal: 'One-stop-shop: bookkeeping, payroll, SMSF, tax. Owner-led. Pain: SMB admin burden',
    icp_fit: 'Owner answers personally, diverse service offering, clear operational pain signal',
  },
  {
    id: 'l3',
    name: 'Prosper Business & Property Broker',
    email: 'prosper888@bigpond.com',
    stage: 'WARM',
    score: 8,
    industry: 'Real Estate / Business Broker',
    suburb: 'Perth, WA',
    signal: 'Business + property broker, 50+ years combined experience, family operated',
    icp_fit: 'Family-operated, established, complex inquiry management needs',
  },
  {
    id: 'l4',
    name: 'Realestate 88',
    email: 'jwright@re88.com.au',
    contact: 'Peter Wright / Jasmyn Wright',
    stage: 'WARM',
    score: 7,
    industry: 'Real Estate',
    suburb: 'Perth, WA',
    signal: 'Boutique premium agency, inner-city + new project sales, major WA developers',
    icp_fit: 'Established boutique agency, high-value leads requiring rapid response',
  },
  {
    id: 'l5',
    name: 'Beyond Accountancy',
    email: 'info@beyondaccountancy.com.au',
    contact: 'Harry Liu',
    stage: 'WARM',
    score: 6,
    industry: 'Accountant',
    suburb: 'Perth (online)',
    signal: 'SMB accounting: proactive tax advice, bookkeeping, BAS. Founded 2011',
    icp_fit: 'Established 2011, professional services, online delivery model',
  },
  // DISCOVERED
  {
    id: 'l6',
    name: 'Aircon Express Perth',
    email: 'sales@airconexpress.com.au',
    stage: 'DISCOVERED',
    score: 10,
    industry: 'Air Conditioning',
    suburb: 'East Victoria Park, Perth',
    signal: '38+ years, locally owned, licensed electrical + refrigeration, 7-day service',
    icp_fit: 'Long hours, 7-day service = phone demand. Established. Strong pain signal.',
  },
  {
    id: 'l7',
    name: 'Alpha Co Plumbing And Gas',
    email: 'info@alphacoplumbing.com.au',
    contact: 'Jim (owner)',
    stage: 'DISCOVERED',
    score: 10,
    industry: 'Plumber',
    suburb: 'Perth CBD, WA',
    signal: 'Est. 1999 (26+ yrs), 7-day 06:30-19:15, mobile (owner answers directly)',
    icp_fit: 'Owner mobile on listing = personal phone demand. Long hours. Ideal ICP.',
  },
  {
    id: 'l8',
    name: 'Air Con Repair Perth',
    email: 'info@acrepairperth.com.au',
    stage: 'DISCOVERED',
    score: 9,
    industry: 'Air Conditioning',
    suburb: 'Perth CBD',
    signal: '10+ years, emergency service, licensed',
    icp_fit: 'Emergency service = missed calls = lost jobs. High pain signal.',
  },
  {
    id: 'l9',
    name: 'Gilmour & Jooste Electrical',
    email: 'info@gilmourandjoosteelectrical.com.au',
    contact: 'Garth Gilmour',
    stage: 'DISCOVERED',
    score: 6,
    industry: 'Electrician',
    suburb: 'Balcatta, Perth',
    signal: 'Commercial + residential, named owner, mobile service model',
    icp_fit: 'Named owner (Garth), commercial/residential mix, driving + answering = distraction',
  },
  {
    id: 'l10',
    name: 'Irwin Electrical Pty Ltd',
    email: 'info@wiseelectrical.com.au',
    stage: 'DISCOVERED',
    score: 5,
    industry: 'Electrician',
    suburb: 'Balcatta, Perth',
    signal: 'Pty Ltd structure (formal business), electrical + switchboard contractor',
    icp_fit: 'Established formal business, phone-first inquiry model',
  },
  {
    id: 'l11',
    name: 'Ace Plumbing & Gas Pty Ltd',
    email: 'info@aceplumbing.com.au',
    stage: 'DISCOVERED',
    score: 5,
    industry: 'Plumber',
    suburb: 'Maylands, Perth',
    signal: 'Hot water systems specialist, licensed plumber + gasfitter, multi-category',
    icp_fit: 'Technical trade = complex quote requests handled manually',
  },
  {
    id: 'l12',
    name: 'Edental Perth',
    email: 'info@edentalperth.net.au',
    contact: 'Dr. Amandeep Chauhan',
    stage: 'DISCOVERED',
    score: 5,
    industry: 'Dentist',
    suburb: 'Rivervale, Perth',
    signal: 'Multi-dentist practice open 365 days. Founded 2016. NOTE: not owner-overloaded',
    icp_fit: 'Multi-dentist = admin burden. 365 days = phone demand. Lower score due to practice size.',
  },
  {
    id: 'l13',
    name: 'Cleaning Services Perth',
    email: 'info@cleaningservicesperth.com',
    stage: 'DISCOVERED',
    score: 2,
    industry: 'Cleaning',
    suburb: 'Perth',
    signal: 'Low priority, low score',
    icp_fit: 'Low ICP fit — commoditised service, less clear automation pain',
  },
  // SENT
  {
    id: 'l14',
    name: 'Ryan & Partners',
    email: 'admin@ryanandpartners.com.au',
    contact: 'Patricia Ryan (Trish)',
    stage: 'SENT',
    score: 10,
    industry: 'Accountant',
    suburb: 'Joondalup, WA',
    signal: 'Awaiting reply — email sent',
    icp_fit: 'High score, owner contact named',
  },
  {
    id: 'l15',
    name: 'BMD Plumbing and Gas',
    email: 'service@bmdplumbing.com.au',
    contact: 'Brian McDaid',
    stage: 'SENT',
    score: 8,
    industry: 'Plumbing',
    suburb: 'Belmont/Cloverdale, Perth',
    signal: 'Awaiting reply — email sent',
    icp_fit: 'Family name (McDaid), established plumbing operation',
  },
  {
    id: 'l16',
    name: 'Air Conditioning Perth (DACS)',
    email: 'info@dacsair.com.au',
    stage: 'SENT',
    score: 7,
    industry: 'Air Conditioning',
    suburb: 'Como, Perth',
    signal: 'Awaiting reply — email sent',
    icp_fit: 'Established HVAC business',
  },
  {
    id: 'l17',
    name: 'Accountant In Perth',
    email: 'contact@accountantinperth.com.au',
    contact: 'Sue Hill',
    stage: 'SENT',
    score: 6,
    industry: 'Accountant',
    suburb: 'Perth, WA',
    signal: 'Awaiting reply — email sent',
    icp_fit: 'Named contact (Sue Hill), professional services',
  },
  {
    id: 'l18',
    name: 'Elevate Accounting',
    email: 'shane@elevategroup.com.au',
    contact: 'Shane Crommelin',
    stage: 'SENT',
    score: 5,
    industry: 'Accountant',
    suburb: 'Mount Pleasant, Perth',
    signal: 'Awaiting reply — email sent',
    icp_fit: 'Named owner contact',
  },
  {
    id: 'l19',
    name: '3G Electrical',
    email: 'markgoldberg54@yahoo.com.au',
    contact: 'Mark Goldberg',
    stage: 'SENT',
    score: 5,
    industry: 'Electrical',
    suburb: 'Ballajura, Perth',
    signal: 'Awaiting reply — email sent',
    icp_fit: 'Named owner (Mark Goldberg)',
  },
  {
    id: 'l20',
    name: 'McKinley Plowman',
    email: 'clientcare@mckinleyplowman.com.au',
    contact: 'Nigel Plowman',
    stage: 'SENT',
    score: 5,
    industry: 'Accountant',
    suburb: 'Joondalup & Perth, WA',
    signal: 'Awaiting reply — email sent',
    icp_fit: 'Named owner (Nigel Plowman), multi-location firm',
  },
  {
    id: 'l21',
    name: 'Perth Central Dental Centre',
    email: 'richard@perthdentalcentre.com.au',
    contact: 'Richard Tien',
    stage: 'SENT',
    score: 4,
    industry: 'Dentist',
    suburb: 'Perth CBD, WA',
    signal: 'Awaiting reply — email sent',
    icp_fit: 'Named owner, CBD location',
  },
  {
    id: 'l22',
    name: 'Delta Roofing',
    email: 'tim@deltaroofing.com.au',
    contact: 'Tim',
    stage: 'SENT',
    score: 3,
    industry: 'Roofing',
    suburb: "O'Connor, Perth",
    signal: 'Awaiting reply — email sent',
    icp_fit: 'Named contact (Tim)',
  },
  {
    id: 'l23',
    name: 'Professional Electricians Perth (Westline)',
    email: 'info@westlineelectrical.com.au',
    stage: 'SENT',
    score: 0,
    industry: 'Electrician',
    suburb: 'Perth',
    signal: 'Awaiting reply — email sent',
    icp_fit: 'Unscored',
  },
  // RESEARCH
  {
    id: 'l24',
    name: 'West Coast Air',
    email: 'admin@westcoastair.com.au',
    stage: 'RESEARCH',
    score: 7,
    industry: 'HVAC / Air Conditioning',
    suburb: 'Byford, Perth',
    signal: 'HVAC specialist — need to verify email and review status before outreach',
    icp_fit: 'HVAC trade — strong ICP category if pain signals confirmed',
  },
];

const STAGE_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  HOT: { bg: 'bg-red-950', text: 'text-red-300', border: 'border-red-800' },
  WARM: { bg: 'bg-orange-950', text: 'text-orange-300', border: 'border-orange-800' },
  DISCOVERED: { bg: 'bg-indigo-950', text: 'text-indigo-300', border: 'border-indigo-800' },
  SENT: { bg: 'bg-blue-950', text: 'text-blue-300', border: 'border-blue-800' },
  RESEARCH: { bg: 'bg-yellow-950', text: 'text-yellow-300', border: 'border-yellow-800' },
  COLD: { bg: 'bg-gray-900', text: 'text-gray-400', border: 'border-gray-700' },
  SKIP: { bg: 'bg-gray-900', text: 'text-gray-500', border: 'border-gray-800' },
  ARCHIVED: { bg: 'bg-gray-950', text: 'text-gray-600', border: 'border-gray-900' },
};

const STAGE_ORDER = ['HOT', 'WARM', 'DISCOVERED', 'SENT', 'RESEARCH'];

const SCORE_COLOR = (score: number) => {
  if (score >= 8) return 'text-red-400';
  if (score >= 6) return 'text-orange-400';
  if (score >= 4) return 'text-yellow-400';
  return 'text-gray-400';
};

export default function LeadsPage() {
  const [filter, setFilter] = useState<string>('ALL');
  const [search, setSearch] = useState('');

  const stageCounts = STAGE_ORDER.reduce((acc, stage) => {
    acc[stage] = LEADS.filter(l => l.stage === stage).length;
    return acc;
  }, {} as Record<string, number>);

  const filtered = LEADS.filter(l => {
    const matchStage = filter === 'ALL' || l.stage === filter;
    const matchSearch =
      !search ||
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.industry.toLowerCase().includes(search.toLowerCase()) ||
      (l.suburb?.toLowerCase().includes(search.toLowerCase()) ?? false);
    return matchStage && matchSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Lead Pipeline</h2>
          <p className="text-sm text-gray-500 mt-1">
            24 active leads &middot; Source of truth: Supabase leads table
          </p>
        </div>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search name, industry, suburb..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-1.5 text-sm text-gray-200 placeholder-gray-600 focus:outline-none focus:border-blue-500 w-64"
          />
          <a
            href="https://cal.com/jake-emvy/15-min-ai-chat"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-1.5 rounded-lg transition-colors"
          >
            Book Discovery Call
          </a>
        </div>
      </div>

      {/* Pipeline Summary */}
      <div className="grid grid-cols-5 gap-3">
        {STAGE_ORDER.map(stage => (
          <button
            key={stage}
            onClick={() => setFilter(filter === stage ? 'ALL' : stage)}
            className={`rounded-lg p-4 border transition-all text-center ${
              filter === stage
                ? `${STAGE_COLORS[stage].bg} ${STAGE_COLORS[stage].border} border-2`
                : 'bg-gray-900 border-gray-800 hover:border-gray-700'
            }`}
          >
            <div className={`text-3xl font-bold ${SCORE_COLOR(Object.values(stageCounts).length > 0 ? 7 : 0)}`}>
              {stageCounts[stage]}
            </div>
            <div className={`text-xs font-medium mt-1 ${STAGE_COLORS[stage].text}`}>{stage}</div>
          </button>
        ))}
      </div>

      {/* ICP Reminder */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
        <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">ICP — Ideal Customer Profile</div>
        <div className="text-sm text-gray-400 space-y-1">
          <p><span className="text-gray-300 font-medium">Has money:</span> 5+ years operating, multiple staff, commercial/physical presence</p>
          <p><span className="text-gray-300 font-medium">Feels the pain:</span> Reviews mention busy/overworked/admin burden — not just &quot;could be more efficient&quot;</p>
          <p className="text-gray-600 mt-2">Scoring: Pain evidence +4 | Owner answers +2 | High-pain industry +2 | 7-day service +1 | Established 5+yrs +1 | Email +1</p>
        </div>
      </div>

      {/* Leads Table */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Lead</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Contact</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">Industry</th>
              <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider hidden xl:table-cell">Signal</th>
              <th className="text-center px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
              <th className="text-center px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Stage</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {filtered.map(lead => (
              <tr key={lead.id} className="hover:bg-gray-800/50 transition-colors">
                <td className="px-4 py-3">
                  <div className="font-medium text-gray-200">{lead.name}</div>
                  <div className="text-xs text-gray-500">{lead.suburb}</div>
                  <div className="text-xs text-gray-600 mt-0.5 hidden md:block">{lead.email}</div>
                </td>
                <td className="px-4 py-3 text-gray-400 hidden md:table-cell">{lead.contact || '—'}</td>
                <td className="px-4 py-3 text-gray-400 hidden lg:table-cell">{lead.industry}</td>
                <td className="px-4 py-3 text-gray-500 text-xs hidden xl:table-cell max-w-xs">
                  {lead.signal}
                </td>
                <td className="px-4 py-3 text-center">
                  <span className={`font-bold ${SCORE_COLOR(lead.score)}`}>{lead.score}</span>
                  <span className="text-gray-600 text-xs">/10</span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                    STAGE_COLORS[lead.stage].bg + ' ' + STAGE_COLORS[lead.stage].text
                  }`}>
                    {lead.stage}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="py-12 text-center text-gray-600">
            No leads match your filter or search.
          </div>
        )}
      </div>

      {/* Process Lock */}
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
        <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-3">Pipeline Process — LOCKED</div>
        <div className="flex items-center gap-3 text-sm text-gray-400 overflow-x-auto">
          {['DISCOVER', 'ENRICH', 'SCORE', 'STAGE', 'REVIEW', 'DRAFT', 'SEND'].map((step, i) => (
            <div key={step} className="flex items-center gap-3 flex-shrink-0">
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center">
                  <span className="text-xs font-bold text-gray-400">{i + 1}</span>
                </div>
                <span className="text-xs text-gray-500">{step}</span>
              </div>
              {i < 6 && <div className="w-6 h-px bg-gray-700 flex-shrink-0" />}
            </div>
          ))}
        </div>
        <div className="mt-3 flex gap-4 text-xs text-gray-600">
          <span>No email = archived</span>
          <span>HOT 8+, WARM 6-7, DISCOVERED 4-5, COLD 1-3</span>
          <span>Dusk sends all emails personally</span>
        </div>
      </div>
    </div>
  );
}
