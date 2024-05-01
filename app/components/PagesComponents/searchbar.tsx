'use client';

import axios from 'axios';
import qs from "query-string"   // Not in Use
import clsx from 'clsx';
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from 'react-hot-toast';

interface SearchBarProps {
    onSearch: (results: any[]) => Promise<void>;
  }

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const router = useRouter();
    const [value, setValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!value){
            return
        }

        setIsLoading(true);
        
        try {
            const response = await axios.post('/api/video', { term: value });
            onSearch(response.data); // Call the onSearch function with the search results
          } catch (error) {
            toast.error('Error: Something went wrong!');
          } finally {
            setIsLoading(false);
          }
    }

    return (
        <form 
            className="flex flex-col"
            onSubmit={onSubmit}
        >
            <div>
                <label
                    className="
                        block
                        w-full
                        mx-auto
                        max-w-2xl
                        text-sm
                        font-medium
                        leading-6
                        text-neutral-100
                    "
                >
                    <div className="mt-2">
                        <input
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            className={clsx(`
                            form-input
                            block 
                            w-full 
                            rounded-full
                            border-0
                            py-4
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
                            sm:leading-6`,
                          )}
                        />
                    </div>
                </label>
            </div>
        </form>
    );
};

export default SearchBar;
function onSearch(data: any) {
    throw new Error('Function not implemented.');
}

