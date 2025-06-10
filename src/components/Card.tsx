type cardProps = {
    avatar: string;
    name: string;
    role: string;
}

export function Card({avatar, name, role}: cardProps) {
    return(
        <div className="w-[430px] h-30 bg-white rounded-xl p-10 flex items-center gap-8">
            <div className="rounded-full bg-[#E5E7EB] text-[#6B7280] text-2xl w-18 h-18 flex items-center justify-center">{avatar}</div>
            <div>
                <p className="text-[#111827] font-medium text-2xl">{name}</p>
                <span className="text-[#6B7280] text-xl">{role}</span>
            </div>
        </div>
    )
}