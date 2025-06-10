import { Card } from "../components/Card";
import { Title } from "../components/Title";
import { data } from "../data/data";

export function Fullstack(){
    return (
       <section className="w-full h-svh p-20 flex flex-col gap-8">
            <Title text="Fullstack Team" />
            <article className="w-4xl grid grid-cols-2 gap-8">
                {data.fullstack.map((member, index) => (
                    <Card 
                        key={index}
                        avatar={member.avatar} 
                        name={member.name} 
                        role={member.role} 
                    />
                 ))}
            </article>
        </section>
    )
}