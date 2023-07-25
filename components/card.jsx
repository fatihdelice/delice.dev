import Link from "next/link"
import { StarIcon, ArrowIcon } from "./icons"


const Card = ({ item, user }) => {
    return (
        <Link
            href={item.permaLink}
            data-cheep-id={item._id}
            className="mt-5 border border-neutral-700 bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full relative"
        >
            <div className="flex items-center">
                {item.imageUrl && (
                    <picture className="relative">
                        <img className="rounded-xl" src={item.logoUrl} alt={item.appName} width="90" height="90" decoding="async" loading="lazy" />
                    </picture>
                )}
                <div className='ml-4'>
                    <h3 className="font-bold">{item.appName}</h3>
                    <p className="text-[#bbb]">{item.appCategory}</p>
                    <span className="flex items-center text-[#bbb]">{item.star}<StarIcon /></span>
                </div>
            </div>
            <div className="text-neutral-300">
                <ArrowIcon />
            </div>
        </Link>
    )
}

export default Card