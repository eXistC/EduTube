'use client';

import clsx from 'clsx';

interface ButtonProps{
    type?: 'button' | 'submit' | 'reset' | undefined;
    fullwidth?: boolean;
    children?: React.ReactNode;
    onClick?: () => void;
    secondary?: boolean;
    danger?: boolean;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    type,
    fullwidth,
    children,
    onClick,
    secondary,
    danger,
    disabled
}) => {
    return ( 
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={clsx(`
                flex
                justify-center
                rounded-lg
                px-3
                py-3
                text-sm
                font-medium
                focus-visable:outline
                focus-visable:outline-2
                focus-visable:outline-offset-2
                shadow-lg
                `,
                disabled && "opacity-50 cursor-default",
                fullwidth && "w-5/12 mx-auto",
                secondary ? 'text-black' : 'text-white',
                danger && "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
                !secondary && !danger && "bg-teal-800 hover:bg-teal-900 focus-visible:outline-teal-800"
            )}
        >
            {children}
        </button>
     );
}
 
export default Button;