import { useLocation } from "react-router-dom";

type AnchorProps = {
    href: string;
    text: string;
};

export function Anchor({href, text}: AnchorProps){

    const { pathname } = useLocation();
    const isActive = pathname === href;
    return (
        <a href={href}>
            <li className= {isActive ? "px-6 py-6 bg-[#F3F4F6] cursor-pointer text-[#4B5563] text-sm transition-all " : "px-6 py-6 hover:bg-[#F3F4F6] cursor-pointer text-[#4B5563] text-sm transition-all "}>{text}</li>
        </a>
        
    )
}