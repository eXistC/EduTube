'use client';

import qs from "query-string"
import clsx from 'clsx';
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = () => {
    const router = useRouter();
    const [value, setValue] = useState("");

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!value){
            return
        }
        const url =qs.stringifyUrl({
            url: "#",
            query: {term:value},
        },{ skipEmptyString: true});

        router.push(url);
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
