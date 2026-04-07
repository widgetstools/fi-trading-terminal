import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { OAS_DATA, SPREADS, INITIAL_TRADES, SENSITIVITY } from '@/data/tradingData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

/* ── Position Summary ── */
export function PositionSummary() {
  const cards = [
    { label:'Market Value',   value:'$47.2M',  sub:'+$1.4M today',   color:'var(--bn-blue)'  },
    { label:'Unrealized P&L', value:'+$284K',  sub:'+0.61% MTD',     color:'var(--bn-green)' },
    { label:'Total DV01',     value:'$18,420', sub:'per basis point', color:'var(--fi-amber)' },
    { label:'Mod Duration',   value:'4.82',    sub:'yrs weighted',    color:'var(--bn-blue)'  },
  ];
  const details = [
    { label:'Wt Avg YTM', value:'5.14%', color:'var(--bn-t0)' },
    { label:'Wt Avg OAS', value:'+58 bp', color:'var(--bn-green)' },
    { label:'Convexity',  value:'0.84',  color:'var(--bn-t0)' },
    { label:'Ann. Income',value:'$243.8K', color:'var(--fi-amber)' },
  ];
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-3 h-8 border-b flex-shrink-0" style={{ background:'var(--bn-bg1)', borderColor:'var(--bn-border)' }}>
        <span className="font-mono-fi font-semibold tracking-widest uppercase" style={{ fontSize:9, color:'var(--bn-t2)' }}>Position Summary</span>
        <div className="flex gap-1">
          {['MTD','YTD'].map((v,i) => (
            <button key={v} className="font-mono-fi px-1.5 py-0.5 rounded-sm border text-xs" style={{ fontSize:9, background: i===0 ? 'rgba(61,158,255,0.1)':'transparent', borderColor: i===0 ? 'var(--bn-blue)':'var(--bn-border2)', color: i===0 ? 'var(--bn-blue)':'var(--bn-t2)' }}>{v}</button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-px flex-shrink-0" style={{ background:'var(--bn-border)' }}>
        {cards.map(c => (
          <div key={c.label} className="flex flex-col gap-0.5 p-2" style={{ background:'var(--bn-bg2)' }}>
            <span className="font-mono-fi uppercase tracking-widest" style={{ fontSize:9, color:'var(--bn-t2)' }}>{c.label}</span>
            <span className="font-mono-fi font-medium" style={{ fontSize:13, color:c.color }}>{c.value}</span>
            <span className="font-mono-fi" style={{ fontSize:9, color:'var(--bn-t2)' }}>{c.sub}</span>
          </div>
        ))}
      </div>
      <div className="flex-1 flex flex-col justify-center gap-1 px-3 py-1 border-t" style={{ borderColor:'var(--bn-border)' }}>
        {details.map(d => (
          <div key={d.label} className="flex items-center justify-between">
            <span className="font-mono-fi" style={{ fontSize:9, color:'var(--bn-t2)' }}>{d.label}</span>
            <span className="font-mono-fi" style={{ fontSize:9, color:d.color }}>{d.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── OAS Distribution ── */
export function OasDistribution() {
  const max = Math.max(...OAS_DATA.map(d => d.oas)) || 1;
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-3 h-8 border-b flex-shrink-0" style={{ background:'var(--bn-bg1)', borderColor:'var(--bn-border)' }}>
        <span className="font-mono-fi font-semibold tracking-widest uppercase" style={{ fontSize:9, color:'var(--bn-t2)' }}>OAS Distribution</span>
        <div className="flex gap-1">
          {['bp','%ile'].map((v,i) => (
            <button key={v} className="font-mono-fi px-1.5 py-0.5 rounded-sm border" style={{ fontSize:9, background: i===0 ? 'rgba(61,158,255,0.1)':'transparent', borderColor: i===0 ? 'var(--bn-blue)':'var(--bn-border2)', color: i===0 ? 'var(--bn-blue)':'var(--bn-t2)' }}>{v}</button>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto py-1">
        {OAS_DATA.map(d => (
          <div key={d.name} className="flex items-center gap-2 px-3 py-1">
            <span className="font-mono-fi w-16 flex-shrink-0" style={{ fontSize:9, color:'var(--bn-t1)' }}>{d.name.split(' ')[0]}</span>
            <div className="flex-1 h-1.5 rounded-sm overflow-hidden" style={{ background:'var(--bn-bg3)' }}>
              <div className="h-full rounded-sm" style={{ width: `${d.oas === 0 ? 1 : (d.oas/max)*100}%`, background:d.color }} />
            </div>
            <span className="font-mono-fi w-10 text-right flex-shrink-0" style={{ fontSize:9, color:d.color }}>
              {d.oas === 0 ? '0' : `+${d.oas}`}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Spread Monitor ── */
export function SpreadMonitor() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex border-b flex-shrink-0" style={{ borderColor:'var(--bn-border)' }}>
        {['Spread Monitor','Curve Trades','Alerts'].map((t,i) => (
          <button key={t} className="font-mono-fi px-3 py-1.5 border-b-2 text-xs uppercase tracking-wider"
            style={{ fontSize:9, color: i===0 ? 'var(--bn-blue)':'var(--bn-t2)', borderBottomColor: i===0 ? 'var(--bn-blue)':'transparent', background:'transparent' }}>
            {t}
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-y-auto">
        {SPREADS.map(s => (
          <div key={s.label} className="flex items-center justify-between px-3 py-1.5 border-b" style={{ borderColor:'var(--bn-border)' }}>
            <span className="font-mono-fi" style={{ fontSize:11, color:'var(--bn-t1)' }}>{s.label}</span>
            <span className="font-mono-fi" style={{ fontSize:11, color:'var(--bn-t0)' }}>{s.value}</span>
            <span className="font-mono-fi" style={{ fontSize:9, color: s.up ? 'var(--bn-green)':'var(--bn-red)' }}>{s.change}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Recent Trades ── */
export function RecentTrades() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex border-b flex-shrink-0" style={{ borderColor:'var(--bn-border)' }}>
        {['Recent Trades','Runs','Axes'].map((t,i) => (
          <button key={t} className="font-mono-fi px-3 py-1.5 border-b-2 text-xs uppercase tracking-wider"
            style={{ fontSize:9, color: i===0 ? 'var(--bn-blue)':'var(--bn-t2)', borderBottomColor: i===0 ? 'var(--bn-blue)':'transparent', background:'transparent' }}>
            {t}
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-y-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr style={{ background:'var(--bn-bg2)' }}>
              {['TIME','BOND','SIDE','SIZE','PX','YTM'].map(h => (
                <th key={h} className="font-mono-fi text-left px-2 py-1 border-b" style={{ fontSize:9, color:'var(--bn-t2)', letterSpacing:'0.05em', borderColor:'var(--bn-border)' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {INITIAL_TRADES.map((t, i) => (
              <tr key={i} className="border-b hover:bg-[var(--bn-bg3)]" style={{ borderColor:'var(--bn-border)' }}>
                <td className="font-mono-fi px-2 py-1" style={{ fontSize:9, color:'var(--bn-t2)' }}>{t.time}</td>
                <td className="font-mono-fi px-2 py-1" style={{ fontSize:9, color:'var(--bn-cyan)' }}>{t.bond}</td>
                <td className="font-mono-fi px-2 py-1">
                  <span className="font-bold" style={{ fontSize:9, color: t.side==='B' ? 'var(--bn-green)':'var(--bn-red)' }}>
                    {t.side==='B' ? 'BUY':'SELL'}
                  </span>
                </td>
                <td className="font-mono-fi px-2 py-1" style={{ fontSize:9, color:'var(--bn-t1)' }}>{t.size}</td>
                <td className="font-mono-fi px-2 py-1" style={{ fontSize:9, color: t.side==='B' ? 'var(--bn-blue)':'var(--bn-red)' }}>{t.price.toFixed(3)}</td>
                <td className="font-mono-fi px-2 py-1" style={{ fontSize:9, color:'var(--bn-t1)' }}>{t.ytm.toFixed(2)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ── Rate Sensitivity ── */
export function RateSensitivity() {
  const max = 100;
  return (
    <div className="flex flex-col h-full">
      <div className="flex border-b flex-shrink-0" style={{ borderColor:'var(--bn-border)' }}>
        {['Rate Sensitivity','Scenario'].map((t,i) => (
          <button key={t} className="font-mono-fi px-3 py-1.5 border-b-2 text-xs uppercase tracking-wider"
            style={{ fontSize:9, color: i===0 ? 'var(--bn-blue)':'var(--bn-t2)', borderBottomColor: i===0 ? 'var(--bn-blue)':'transparent', background:'transparent' }}>
            {t}
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-y-auto py-1">
        {SENSITIVITY.map(s => (
          <div key={s.label} className="flex items-center gap-2 px-3 py-1">
            <span className="font-mono-fi w-12 flex-shrink-0" style={{ fontSize:9, color:'var(--bn-t1)' }}>{s.label}</span>
            <div className="flex-1 h-1.5 rounded-sm overflow-hidden" style={{ background:'var(--bn-bg3)' }}>
              <div className="h-full rounded-sm" style={{ width:`${s.pct}%`, background: s.positive ? 'var(--bn-green)':'var(--bn-red)', opacity:.75 }} />
            </div>
            <span className="font-mono-fi w-16 text-right flex-shrink-0" style={{ fontSize:9, color: s.positive ? 'var(--bn-green)':'var(--bn-red)' }}>{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
