'use client';

import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

type Variant = 'LOGIN' | 'REGISTER'

const AuthForm = () => {
    const session = useSession();
    const router = useRouter();
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (session?.status === 'authenticated'){
            router.push('/home')
        }
    }, [session?.status ,router]);

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
                axios.post('/api/register', data)
                .catch(() => toast.error('Error Something went wrong!'))
                .finally(() => setIsLoading(false))
            }

            if (variant === 'LOGIN'){
                signIn('credentials',{
                    ...data,    //Expaing data
                    redirect: false
                })
                .then((callback) => {
                    if(callback?.error){
                        toast.error('Invalid Cretential');
                    }
                    if(callback?.ok && !callback.error){
                        toast.success('Logged in');
                    }
                })
                .finally(() => setIsLoading(false))
            }
        }

    return (
        <div
            className="
                sm:mx-auto
                sm:w-full
                sm:max-w-md
            "
        >
            <div
                className="
                    bg-zinc-700/20
                    px-4
                    pb-8
                    sm:rounded-b-lg
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
                            disabled={isLoading}
                        />
                    )}
                    <Input 
                        id="email" 
                        label="Email address"
                        type="email"
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                    />
                    <Input 
                        id="password" 
                        label="Password"
                        type="password"
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                    />
                    <div className="bg-primary-500 hover:bg-primary-600">
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
                        text-neutral-100/60
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