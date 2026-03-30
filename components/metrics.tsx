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
  const circumference = 2 * Math.PI * 18 // radius 18px
  const offset = circumference * (1 - score / 100)

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-28 h-28">
        {/* SVG Circle Progress */}
        <svg className="w-full h-full -rotate-90" viewBox="0 0 40 40">
          {/* Background circle */}
          <circle
            cx="20"
            cy="20"
            r="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-secondary"
          />
          {/* Progress circle */}
          <circle
            cx="20"
            cy="20"
            r="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className={`${getScoreColor(score)} transition-all duration-500`}
            style={{
              filter: `drop-shadow(0 0 4px ${score >= 90 ? 'rgb(34, 197, 94)' : score >= 50 ? 'rgb(245, 158, 11)' : 'rgb(239, 68, 68)'})`,
            }}
          />
        </svg>

        {/* Score Text - Centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-2xl font-bold ${getScoreColor(score)}`}>
            {score}
          </span>
        </div>
      </div>

      {/* Label */}
      <p className="text-xs font-medium text-text-dim uppercase tracking-widest">
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
