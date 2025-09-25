export function LoadingSpinner({ size = "sm", className = "" }: { size?: "sm" | "md" | "lg", className?: string }) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-6 h-6", 
    lg: "w-8 h-8"
  };

  return (
    <div className={`${sizeClasses[size]} border-2 border-primary border-t-transparent rounded-full animate-spin ${className}`} />
  );
}

export function PulseAnimation({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`animate-pulse ${className}`}>
      {children}
    </div>
  );
}

export function FadeInAnimation({ children, delay = 0, className = "" }: { 
  children: React.ReactNode, 
  delay?: number,
  className?: string 
}) {
  return (
    <div 
      className={`animate-fade-in ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}