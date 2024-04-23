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
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 
          className="
            mt-0
            text-center 
            text-3xl 
            font-bold 
            tracking-tight 
            text-neutral-100
          "
        >
          Login
        </h2>
    </div>
    <AuthForm />
  </div>
  );
}
