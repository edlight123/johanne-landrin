import { TextareaHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-black/70 mb-1.5"
          >
            {label}
            {props.required && <span className="text-teal-700 ml-1">*</span>}
          </label>
        )}
        <textarea
          id={textareaId}
          className={cn(
            'w-full rounded-lg border border-black/15 bg-white px-4 py-2.5',
            'text-black placeholder:text-black/40',
            'focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/15',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'min-h-[120px] resize-y',
            error && 'border-black/30 focus:border-teal-600 focus:ring-teal-600/15',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="mt-1.5 text-sm text-black/70">{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea;
