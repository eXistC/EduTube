'use client'
import clsx from 'clsx';
import{
    FieldErrors,
    FieldValues,
} from 'react-hook-form';

interface InputProps {
    label: string;
    id: string;
    type?: string;
    required?: boolean;
    errors: FieldErrors,
    disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
    label,
    id,
    type,
    errors,
    disabled
}) => {
    return (
        <div>
            <label
                className="
                    block
                    w-5/6
                    mx-auto
                    text-sm
                    font-medium
                    leading-6
                    text-neutral-100
                "
                htmlFor={id}
                
                >
                {label}
                <div className="mt-2">
                    <input
                        id={id}
                        type={type}
                        autoComplete={id}
                        disabled={disabled}
                        className={clsx(`
                        form-input
                        block 
                        w-full 
                        rounded-md 
                        border-0 
                        py-1.5 
                        text-neutral-100/60
                        bg-teal-800/30
                        shadow-sm 
                        placeholder-gray-400 
                        placeholder-opacity-100
                        focus:ring-2 
                        focus:ring-inset 
                        focus:ring-teal-800 
                        font-inter
                        sm:text-med
                        sm:leading-6`,
                        errors[id] && 'focus:ring-rose-500',
                        disabled && 'opacity-50 cursor-default'
                      )}
                    />
                </div>
            </label>
        </div>
    );
}
 
export default Input