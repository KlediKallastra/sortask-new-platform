export default function BackgroundGlows() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-tech-primary/20 rounded-full blur-[128px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-tech-secondary/20 rounded-full blur-[128px]"></div>
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.07]"></div>
    </div>
  )
}

