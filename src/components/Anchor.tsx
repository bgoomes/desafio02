type AnchorProps = {
    href: string;
    text: string;
};

export function Anchor({href, text}: AnchorProps){
    return (
        <a href={href}>
            <li className="px-6 py-6 hover:bg-gray-300 cursor-pointer text-[#4B5563] text-sm transition-all ">{text}</li>
        </a>
        
    )
}