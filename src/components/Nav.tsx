import { Anchor } from "./Anchor";

export function Nav(){
    return (
        <nav className="w-80 h-svh">
             <header className="w-80 h-20 p-6 border-b-2 border-[#F3F4F6] text-[#1F2937] text-lg font-bold">Tech Stacks</header>
            <ul className="h-80 py-4">
                <Anchor href="/frontend" text="Frontend" />
                <Anchor href="/backend" text="Backend" />
                <Anchor href="/fullStack" text="FullStack" />
                <Anchor href="/uiux" text="UI/UX" />
           </ul>
        </nav>
    );
}