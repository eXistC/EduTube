'use client';

import Search from "@/app/components/inputs/searchfield";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const SearchBar = () => {
    const { formState } = useForm();
    const { errors } = formState;

    return (
        <div className="flex flex-col items-center space-y-4">
            <Search
                id="search"
                type="text"
                required
                errors={errors}
            />
        </div>
    );
};

export default SearchBar;
