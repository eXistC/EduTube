'use client';

import Button from "@/app/components/Button";
import searchfield from "@/app/components/inputs/searchfield";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const SearchBar = () => {
    const { formState } = useForm();
    const { errors } = formState;
    const [isLoading, setIsLoading] = useState(false);
    const [variant, setVariant] = useState('LOGIN');
    
    return (
        <div className="flex flex-col items-center space-y-4">
            <input
                id="search"
                type="text"
                required
            />
        </div>
    );
};

export default SearchBar;
