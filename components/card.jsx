import Link from "next/link"
import { StarIcon, ArrowIcon } from "./icons"


const Card = ({ item }) => {
    return (
        <Link
            href={item.permaLink}
            data-cheep-id={item._id}
            className="hover:bg-neutral-900/60 bg-neutral-900 rounded-lg flex items-center justify-between px-3 py-4 w-full relative text-[#bbb]"
        >
            <div className="flex justify-start items-center gap-4">
                {item.imageUrl && (
                    <picture className="relative">
                        <img className="rounded-xl" src={item.logoUrl} alt={item.appName} width="100" height="100" decoding="async" loading="lazy" />
                    </picture>
                )}
                <div>
                    <h3 className="font-bold">{item.appName}</h3>
                    <p>{item.appCategory}</p>
                    <span className="flex items-center text-[#bbb]">{item.star}<StarIcon /></span>
                </div>
            </div>
            <ArrowIcon />
        </Link>
    )
}

export default Card