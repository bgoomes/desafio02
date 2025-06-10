type titleProps = {
    text: string;
};

export function Title({text}: titleProps) {
    return (
        <h1 className="text-[#1F2937] text-3xl">{text}</h1>
    )
}