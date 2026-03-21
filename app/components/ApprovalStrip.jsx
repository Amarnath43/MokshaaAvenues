import { APPROVALS } from '../lib/data'

export default function ApprovalStrip() {
  return (
    <div
      className="flex items-center justify-center gap-12 flex-wrap px-[40px] py-5"
      style={{ background: 'var(--forest)' }}
    >
      {APPROVALS.map((item, idx) => (
        <div key={item.label} className="flex items-center gap-3">
          {/* Divider between items */}
          {idx > 0 && (
            <div
              className="hidden md:block w-px h-9 mr-9 flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.15)' }}
            />
          )}
          <div
            className="w-11 h-11 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
            style={{ background: 'rgba(255,255,255,0.1)' }}
          >
            {item.icon}
          </div>
          <div>
            <div
              className="text-[0.62rem] font-semibold tracking-[0.14em] uppercase"
              style={{ color: 'var(--mint)' }}
            >
              {item.label}
            </div>
            <div className="text-[0.85rem] font-bold text-white">
              {item.value}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
