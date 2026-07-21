export function AmbientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-surface">
      <div
        className="absolute -top-[18rem] -left-[12rem] h-[44rem] w-[44rem] rounded-full opacity-50 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(251,146,60,0.18), transparent 60%)' }}
      />
      <div
        className="absolute top-[20%] -right-[14rem] h-[40rem] w-[40rem] rounded-full opacity-40 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.16), transparent 60%)' }}
      />
      <div
        className="absolute bottom-[-12rem] left-[18%] h-[38rem] w-[38rem] rounded-full opacity-40 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.14), transparent 60%)' }}
      />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div className="noise absolute inset-0 opacity-[0.04] mix-blend-soft-light" />
    </div>
  )
}
