'use client';

import useRoutes from "@/app/hooks/useRoutes";
import { useState } from "react";
import HomeItem from "./HomeItem";

const HomeTopbar = () => {
    const route = useRoutes();
    const [isOpen, setIsOpen] = useState(false)
    return ( 
        <div>
            <nav
                className="
                flex
                flex-row
                justify-between
                "
            >
                <ul
                    role="list"
                    className="
                        flex
                        flex-row
                        items-center
                        space-x-1
                    "
                >
                    {route.map((item) =>  (
                        <HomeItem 
                            key={item.label}
                            href={item.href}
                            label={item.label}
                            active={item.active}
                            onClick={item.onClick}
                        />
                    ))}
                </ul>
            </nav>
        </div>
    );
}
 
export default HomeTopbar;