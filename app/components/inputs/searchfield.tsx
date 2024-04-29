import React, { useState } from 'react';
import clsx from 'clsx';
import { FieldErrors } from 'react-hook-form';

interface InputProps {
    id: string;
    type?: string;
    required?: boolean;
    errors: FieldErrors;
    disabled?: boolean;
}

const Search: React.FC<InputProps> = ({
    id,
    type,
    errors,
    disabled
}) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [isTyping, setIsTyping] = useState<boolean>(false);
    const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

    const options = ["Fumo1", "natasha", "sanan"];

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);
        setIsTyping(!!value);

        // Filter options based on input value
        const filtered = options.filter(option =>
            option.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredOptions(filtered);
    };

    const handleSelectOption = (selectedValue: string) => {
        setInputValue(selectedValue);
        setIsTyping(false);
        console.log('Selected option:', selectedValue);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && filteredOptions.length > 0) {
            setInputValue(filteredOptions[0]);
            setIsTyping(false);
            console.log('Selected option:', filteredOptions[0]);
        }
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <label
                className={clsx(`
                    block
                    text-sm
                    font-medium
                    leading-6
                    text-neutral-100
                `)}
                htmlFor={id}
            >
                Search
            </label>
            <div className="mt-2 relative">
                <input
                    id={id}
                    type={type}
                    autoComplete={id}
                    disabled={disabled}
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    className={clsx(`
                        form-input
                        block
                        w-full
                        rounded-full
                        border-0
                        py-4
                        pl-4
                        pr-10
                        text-neutral-100/60
                        bg-teal-800/30
                        shadow-sm
                        placeholder-gray-400
                        placeholder-opacity-100
                        focus:ring-2
                        focus:ring-inset
                        focus:ring-teal-800
                        font-inter
                        text-left
                        sm:text-xl
                        sm:leading-6
                    `,
                        errors[id] && 'focus:ring-rose-500',
                        disabled && 'opacity-50 cursor-default'
                    )}
                />
                {isTyping && (
                    <ul className="absolute z-10 mt-1 w-full text-neutral-100/60 bg-teal-800 rounded-md shadow-lg">
                        {filteredOptions.map((option, index) => (
                            <li
                                key={index}
                                className="py-2 px-4 cursor-pointer hover:ring-teal-800 transition-colors duration-200"
                                onClick={() => handleSelectOption(option)}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Search;
