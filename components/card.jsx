import Link from "next/link"
import { StarIcon, ArrowIcon } from "./icons"


const Card = ({ item }) => {
    return (
        <Link
            href={item.permaLink}
            data-cheep-id={item._id}
            className="hover:bg-neutral-900/70 bg-neutral-900 rounded-lg flex items-center justify-between px-3 py-4 w-[165px] md:w-[184px] relative"
        >
            <div className="flex flex-col justify-start items-start gap-4 h-full">
                {item.imageUrl && (
                    <picture className="relative">
                        <img className="rounded-xl" src={item.logoUrl} alt={item.appName} width="160" height="160" decoding="async" loading="lazy" />
                    </picture>
                )}
                <div>
                    <h3 className="font-bold">{item.appName}</h3>
                    <p className="text-[#bbb]">{item.appCategory}</p>
                    <span className="flex items-center text-[#bbb]">{item.star}<StarIcon /></span>
                </div>
            </div>
        </Link>
    )
}

export default Card