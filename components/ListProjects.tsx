import React from 'react'
import ButtonTechnologies from './ButtonTechnologies';

interface ProjectsProps {
    title: string;
    description: string;
    tools: string[];
    date: number;
    role: string;
    link: string;
    image: string;
}

const ListProjects: React.FC<ProjectsProps> = ({ title, description, tools, date, role, link, image }) => {
    return (
        <div className='relative w-full flex justify-between items-center mx-4 my-8'>

            {/* Conteneur avec image et description */}
            <div className="flex flex-col md:flex-row w-full h-full p-2">


                {/* Partie de gauche - titre et description */}
                <div className='w-full md:w-1/3 p-4 flex flex-col justify-between'>
                    <h1 className="text-4xl font-semibold uppercase">{title}</h1>

                    <div className='flex flex-col flex-grow justify-end'>
                        <div>
                            {/* Description */}
                            <p className="text-black text-sm">{description}</p>

                            {/* Boutons des technologies */}
                            <div className="flex flex-wrap gap-1 pt-3">
                                {tools.map((tool, index) => (
                                    <ButtonTechnologies text={tool} key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Partie de droite - info et image */}
                <div className="w-full md:w-2/3 flex flex-col items-center">

                    {/* Date, Rôle, Lien */}
                    <div className="w-full flex gap-6 mb-4 items-center flex-row pl-[15px] md:pl-0">

                        <div className="flex-col-col items-center gap-2">
                            <p className="text-gray font-semibold">Date :</p>
                            <p className="text-black">{date}</p>
                        </div>
                        <div className="flex-col items-center gap-2">
                            <p className="text-gray font-semibold">Lien :</p>
                            <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                Voir le projet
                            </a>
                        </div>
                        <div className="flex-col items-center gap-2">
                            <p className="text-gray font-semibold">Rôle :</p>
                            <p className="text-black">{role}</p>
                        </div>

                    </div>

                    {/* Image */}
                    <div className="w-full shadow-lg h-[200px] md:h-[220px] rounded-xl overflow-hidden">
                        <img src={image} alt={title} className="w-full h-full object-cover rounded-t-xl md:rounded-xl" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ListProjects
