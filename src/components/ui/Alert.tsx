import { AlertCircle, Info, CheckCircle, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AlertProps {
  children: React.ReactNode;
  variant?: 'info' | 'warning' | 'success' | 'error';
  className?: string;
}

export default function Alert({ children, variant = 'info', className }: AlertProps) {
  const icons = {
    info: Info,
    warning: AlertCircle,
    success: CheckCircle,
    error: XCircle,
  };

  const Icon = icons[variant];

  return (
    <div
      className={cn(
        'rounded-lg border p-4 flex items-start gap-3',
        {
          'bg-teal-50 border-black/10 text-black': variant === 'info',
          'bg-teal-50 border-black/20 text-black': variant === 'warning',
          'bg-teal-50 border-teal-200 text-black': variant === 'success',
          'bg-white border-black/30 text-black': variant === 'error',
        },
        className
      )}
    >
      <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
      <div className="flex-1 text-sm">{children}</div>
    </div>
  );
}
