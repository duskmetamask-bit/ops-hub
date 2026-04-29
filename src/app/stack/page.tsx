'use client';

const LAYERS = [
  {
    num: '1',
    name: 'Lead Generation',
    desc: 'Getting SMBs into the pipeline',
    tools: [
      { name: 'Apollo', cost: '$49/mo', status: 'planned', notes: 'Email finding, verification, enrichment — best all-in-one for B2B' },
      { name: 'ZeroBounce', cost: '$0.001/verify', status: 'planned', notes: 'Best-in-class email verification. 99.9% accuracy' },
      { name: 'Google Business Profile API', cost: 'Free', status: 'planned', notes: 'Extract business name, address, reviews, category — goldmine for Perth SMBs' },
      { name: 'LinkedIn Sales Navigator', cost: '$99/mo', status: 'planned', notes: 'Find decision-makers at target companies — key for outreach targeting' },
      { name: 'Hunter.io', cost: '$49/mo', status: 'planned', notes: 'Domain email search' },
      { name: 'Clay', cost: '$134/mo', status: 'future', notes: 'Aggregates 100+ data providers — revisit at $20K/mo revenue' },
      { name: 'Clearbit', cost: '$12K/yr', status: 'gap', notes: 'Rich B2B data enrichment — revisit at $50K revenue' },
    ],
  },
  {
    num: '2',
    name: 'Outreach',
    desc: 'Getting in front of leads',
    tools: [
      { name: 'Gmail SMTP', cost: 'Free', status: 'live', notes: 'dawnlabsai@gmail.com — free, works for now' },
      { name: 'Google Workspace SMTP', cost: '$7.20/user/mo', status: 'planned', notes: '@emvy.ai addresses when domain purchased' },
      { name: 'Instantly.ai', cost: '$37/mo', status: 'future', notes: 'Cold email at scale, warmup, inbox rotation' },
      { name: 'ZeroBounce', cost: '$0.001/verify', status: 'planned', notes: 'Verify before sending — protects deliverability' },
      { name: 'VAPI (Callie)', cost: '$0.05-0.15/min', status: 'live', notes: 'Voice agent — discovery calls' },
      { name: 'Cal.com', cost: 'Free', status: 'live', notes: 'Booking — cal.com/jake-emvy/15-min-ai-chat' },
    ],
  },
  {
    num: '3',
    name: 'Discovery',
    desc: 'Qualifying and booking leads',
    tools: [
      { name: 'Cal.com', cost: 'Free', status: 'live', notes: 'Booking links for discovery calls' },
      { name: 'VAPI (Callie)', cost: '$0.05-0.15/min', status: 'live', notes: 'AI voice agent — transcribes and summarises discovery calls' },
      { name: 'Supabase', cost: 'Free tier', status: 'live', notes: 'Own CRM — leads, stages, notes, activity log' },
      { name: 'Dubsado', cost: '$30/mo', status: 'planned', notes: 'Proposals, contracts, invoicing, client portal' },
      { name: 'Typeform + Cal.com', cost: '$0-$25/mo', status: 'planned', notes: 'Qualification quiz -> Cal.com booking — great qualification flow' },
    ],
  },
  {
    num: '4',
    name: 'Audit',
    desc: 'Running the AI audit',
    tools: [
      { name: 'Custom audit checklist', cost: 'Owned', status: 'live', notes: 'Built by us. Stored in Supabase. Core IP.' },
      { name: 'emvy-audit-report-generator', cost: 'Owned', status: 'live', notes: 'Generates audit document from discovery data' },
      { name: 'Google PageSpeed API', cost: 'Free', status: 'planned', notes: 'Core Web Vitals for any URL — pull into audit report' },
      { name: 'BuiltWith API', cost: '$37/mo', status: 'planned', notes: 'Detect what AI/Tech tools any website uses — key for audit' },
      { name: 'Screaming Frog', cost: '$259/yr', status: 'planned', notes: 'Website crawler — essential for technical SEO audits' },
    ],
  },
  {
    num: '5',
    name: 'Build',
    desc: 'Building the AI solution',
    tools: [
      { name: 'Vercel', cost: 'Free tier', status: 'live', notes: 'App hosting — 100GB bandwidth/mo free' },
      { name: 'Supabase', cost: 'Free tier', status: 'live', notes: 'Database, auth, edge functions — sufficient until 50K users' },
      { name: 'Render', cost: '$7/mo', status: 'planned', notes: 'Backend services needing more than Vercel' },
      { name: 'GitHub', cost: 'Free', status: 'live', notes: 'Code hosting + GitHub Actions CI/CD' },
      { name: 'Claude Code (Anthropic)', cost: 'Usage-based', status: 'live', notes: 'Primary build agent — MEWY runs here' },
      { name: 'NVIDIA API', cost: '$0/pending', status: 'live', notes: 'Access to 139 models including Llama, Mistral, GPT' },
      { name: 'Anthropic Claude', cost: '$3-15/million tokens', status: 'planned', notes: 'Best coding model — add for complex builds' },
      { name: 'Zapier', cost: '$19/mo', status: 'planned', notes: 'Connect app X to app Y — simple automations' },
      { name: 'Framer', cost: '$30/mo', status: 'planned', notes: 'Best for agency-built marketing sites' },
      { name: 'Carrd', cost: '$19/yr', status: 'planned', notes: 'Simple one-page sites — AI tool landing pages' },
    ],
  },
  {
    num: '6',
    name: 'Delivery',
    desc: 'Handing over the built solution',
    tools: [
      { name: 'Supabase + Ops Hub', cost: 'Owned', status: 'live', notes: 'Owned portal — all client data in Supabase' },
      { name: 'Google Drive', cost: 'Free', status: 'live', notes: 'Already used' },
      { name: 'WeTransfer', cost: 'Free', status: 'live', notes: 'Files up to 4GB, no account needed' },
      { name: 'Loom', cost: '$15/mo', status: 'planned', notes: 'Record walkthrough videos of audit findings — clients love this' },
      { name: 'Linear', cost: '$8/user/mo', status: 'planned', notes: 'Issue tracking for internal builds' },
      { name: 'Notion', cost: '$10/user/mo', status: 'planned', notes: 'Docs + project tracking — better for client-facing progress' },
    ],
  },
  {
    num: '7',
    name: 'Reporting',
    desc: 'Showing clients what was built and the results',
    tools: [
      { name: 'Ops Hub (Supabase + Vercel)', cost: 'Owned', status: 'live', notes: 'Real-time pipeline + lead stats — owned dashboard' },
      { name: 'Google Analytics 4', cost: 'Free', status: 'planned', notes: 'Track emvy.ai traffic' },
      { name: 'Vercel Analytics', cost: 'Free', status: 'planned', notes: 'Traffic + performance for Ops Hub' },
      { name: 'Supabase Realtime', cost: 'Free tier', status: 'live', notes: 'Live data in Ops Hub without refresh' },
      { name: 'Google Search Console API', cost: 'Free', status: 'planned', notes: 'Keyword rankings — pull into client reports' },
      { name: 'Looker Studio', cost: 'Free', status: 'live', notes: 'Connect GA, Supabase, any data source' },
    ],
  },
  {
    num: '8',
    name: 'Retain',
    desc: 'Keeping clients on monthly retainers',
    tools: [
      { name: 'Dubsado', cost: '$30/mo', status: 'planned', notes: 'Recurring invoicing, retainer management, client portal' },
      { name: 'Stripe', cost: '2.9% + 30c', status: 'planned', notes: 'Recurring billing via Stripe Billing' },
      { name: 'Loom', cost: '$15/mo', status: 'planned', notes: 'Monthly walkthrough videos — high perceived value for retainers' },
      { name: 'Slack', cost: '$8/user/mo', status: 'planned', notes: 'Ongoing communication with retainer clients' },
      { name: 'Toggl', cost: '$9/user/mo', status: 'planned', notes: 'Time tracking — essential for retainer billing accuracy' },
    ],
  },
  {
    num: '9',
    name: 'Admin',
    desc: 'Running the business',
    tools: [
      { name: 'Sole Trader (current)', cost: 'Free', status: 'live', notes: 'Dusk is the business — simplest structure' },
      { name: 'Company (Pty Ltd)', cost: '~$600/yr', status: 'planned', notes: 'Protect personal assets — talk to accountant at $10K/mo revenue' },
      { name: 'MYOB', cost: '$25/mo', status: 'planned', notes: 'Accounting software — AU-focused' },
      { name: 'Wave', cost: 'Free', status: 'live', notes: 'Basic invoicing + accounting' },
      { name: 'Clockify', cost: 'Free', status: 'live', notes: 'Basic time tracking' },
      { name: 'ASIC Online Services', cost: 'Free', status: 'live', notes: 'Annual review, changes' },
      { name: 'Google Workspace', cost: '$7.20/user/mo', status: 'planned', notes: '@emvy.ai addresses' },
      { name: '1Password', cost: '$4/user/mo', status: 'planned', notes: 'Password manager — essential as tools grow' },
    ],
  },
];

export default function StackPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Tool Stack</h2>
        <p className="text-sm text-gray-500 mt-1">9-layer architecture — Lead Gen through Admin. Webhooks are the glue layer connecting everything.</p>
      </div>

      <div className="bg-blue-950 border border-blue-900 rounded-lg p-4">
        <div className="text-sm font-medium text-blue-300 mb-1">Webhook Glue Layer</div>
        <div className="text-xs text-blue-200 opacity-70">New email reply | Form submitted | Call completed | Booking created | Proposal signed | Payment received | Lead scored HOT | Audit complete | SEO ranking change | Competitor site change</div>
      </div>

      <div className="space-y-3">
        {LAYERS.map(layer => (
          <div key={layer.num} className="border border-gray-800 rounded-lg overflow-hidden">
            <div className="flex items-center gap-4 px-5 py-4 bg-gray-900">
              <div className="text-xs font-mono text-gray-600 w-5">{layer.num}</div>
              <div>
                <div className="text-sm font-medium text-white">{layer.name}</div>
                <div className="text-xs text-gray-500">{layer.desc}</div>
              </div>
              <div className="ml-auto text-xs text-gray-600">{layer.tools.length} tools</div>
            </div>
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
                    <span className={`text-xs hidden md:block max-w-xs truncate ${
                      tool.status === 'live' ? 'text-green-400' :
                      tool.status === 'planned' ? 'text-blue-400' :
                      tool.status === 'gap' ? 'text-yellow-400' : 'text-gray-600'
                    }`}>{tool.notes}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
