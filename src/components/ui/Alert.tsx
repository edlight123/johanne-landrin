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
          'bg-blue-50 border-blue-200 text-blue-900': variant === 'info',
          'bg-amber-50 border-amber-200 text-amber-900': variant === 'warning',
          'bg-green-50 border-green-200 text-green-900': variant === 'success',
          'bg-red-50 border-red-200 text-red-900': variant === 'error',
        },
        className
      )}
    >
      <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
      <div className="flex-1 text-sm">{children}</div>
    </div>
  );
}
