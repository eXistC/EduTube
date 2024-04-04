'use client';

import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type Variant = 'LOGIN' | 'REGISTER'

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN'){
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
    }, [variant]);
    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
        
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

        const onSubmit: SubmitHandler<FieldValues> = (data) => {
            setIsLoading(true);

            if (variant === 'REGISTER'){
                // Register route
            }

            if (variant === 'LOGIN'){
                // NextAuth route
            }
        }

    return (
        <div
            className="
                mt-8
                sm:mx-auto
                sm:w-full
                sm:max-w-md
            "
        >
            <div
                className="
                    bg-white
                    px-4
                    py-8
                    shadow
                    sm:rounded-lg
                    sm:px-10
                "
            >
                <form
                    className="space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {variant === 'REGISTER' && (
                        <Input 
                            id="name" 
                            label="Name" 
                            register={register}
                            errors={errors}
                        />
                    )}
                    <Input 
                        id="email" 
                        label="email address"
                        type="email"
                        register={register}
                        errors={errors}
                    />
                    <Input 
                        id="password" 
                        label="Password"
                        type="password"
                        register={register}
                        errors={errors}
                    />
                    <div>
                        <Button
                            disabled={isLoading}
                            fullwidth
                            type="submit"
                        >
                            {variant === "LOGIN" ? "Sign In" : "Register"}
                        </Button>
                    </div>
                    <div className="
                        flex
                        gap-2
                        justify-center
                        text-sm
                        mt-6
                        px-2
                        text-gray-500
                    ">
                        <div>
                            {variant === 'LOGIN' ? 'New to EduTube?' : "Already have an account?"}
                        </div>
                        <div
                            onClick={toggleVariant}
                            className="underline cursor-pointer"
                        >
                            {variant === 'LOGIN' ? 'Create an account' : 'Login'}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default AuthForm;