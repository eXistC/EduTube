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
      justify-top
      py-32
      sm:px-6
      lg:px-8
      bg-radial-gradient
    "
  >
    <div
      className="sm:mx-auto 
                  sm:w-full 
                  sm:max-w-32
                  sm:rounded-3xl
                bg-zinc-600/20
                  px-2
                  py-3
                  mb-8
                  text-neutral-100
                  text-center
                  font-inter
                  font-semibold
                  text-xl
                  shadow-xl
                    
      "
      >
        Edu.Tube
      </div>
    <div className="sm:mx-auto 
                    sm:w-full 
                    sm:max-w-lg           
                   bg-zinc-700/20
                    px-4
                    pt-8
                    pb-4
                    sm:rounded-t-3xl
                    sm:px-10
                    "
                    >

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
          Authorization
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
