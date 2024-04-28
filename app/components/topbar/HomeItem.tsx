'use client';

import clsx from "clsx";
import Link from "next/link";

interface HomeItemProps{
    label: string;
    href: string;
    onClick?: () => void;
    active?: boolean;
}

const HomeItem: React.FC<HomeItemProps> = ({
    label,
    href,
    onClick,
    active
}) => {
    const handleClick = () => {
        if (onClick){
            return onClick();
        }
    };

    return ( 
        <div>
            <li onClick={handleClick}>
                <Link 
                    href={href}
                    className={clsx(`
                        flex
                        my-4
                        mx-8
                        rounded-3xl
                        px-5
                        py-2
                        text-l
                        text-center
                        font-semibold
                        font-inter
                        tracking-light 
                        text-gray-500
                        hover:text-black
                        hover:bg-gray-100
                    `,
                        active && 'bg-zinc-600/50 text-neutral-100'
                )}
                >
                    <span>
                        {label}
                    </span>
                </Link>
            </li>
        </div> 
    );
}
 
export default HomeItem