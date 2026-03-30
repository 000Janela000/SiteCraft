export interface MetricScore {
  label: string
  score: number
}

interface MetricsProps {
  scores: MetricScore[]
}

function getScoreColor(score: number): string {
  if (score >= 90) return "text-green-500"
  if (score >= 50) return "text-yellow-500"
  return "text-red-500"
}

export function MetricCard({ label, score }: MetricScore) {
  const circumference = 2 * Math.PI * 14 // radius 14px (smaller)
  const offset = circumference * (1 - score / 100)

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-20 h-20">
        {/* SVG Circle Progress */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 40 40">
          {/* Background circle */}
          <circle
            cx="20"
            cy="20"
            r="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-secondary/60"
          />
          {/* Progress circle */}
          <circle
            cx="20"
            cy="20"
            r="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className={`${getScoreColor(score)} transition-all duration-500`}
          />
        </svg>

        {/* Score Text - Centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-sm font-semibold ${getScoreColor(score)}`}>
            {score}
          </span>
        </div>
      </div>

      {/* Label */}
      <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">
        {label}
      </p>
    </div>
  )
}

export function Metrics({ scores }: MetricsProps) {
  return (
    <div className="flex justify-center gap-8 flex-wrap">
      {scores.map((metric) => (
        <MetricCard key={metric.label} {...metric} />
      ))}
    </div>
  )
}
