import Image from "next/image";
import AuthForm from "../components.tsx/AuthForm";

export default function Home() {
  return (
  <div
    //background here
    className="
      flex
      min-h-full
      flex-col
      justify-center
      py-12
      sm:px-6
      lg:px-8
      bg-radial-gradient
    "
  >
    <div className="sm:mx-auto 
                    sm:w-full 
                    sm:max-w-md                    
                   bg-zinc-700/20
                    px-4
                    pt-8
                    pb-4
                    sm:rounded-t-lg
                    sm:px-10">
      <h2 
          className="
            mt-0
            text-center 
            text-3xl 
            font-semibold
            font-inter
            tracking-light 
            text-neutral-100
          "
        >
          Login
        </h2>
        <h3
          className="
            mt-3
            text-center 
            text-normal
            font-light
            font-inter
            tracking-light
            text-neutral-100/45
          "
        >
          Please enter your account details
        </h3>
    </div>
    <AuthForm />
  </div>
  );
}
