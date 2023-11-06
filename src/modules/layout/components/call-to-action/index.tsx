import UnderlineLink from "@modules/common/components/underline-link"
import clsx from "clsx"
import Image from "next/image"

import { Lobster } from 'next/font/google'

const lobster = Lobster({
    weight: '400',
    subsets: ['latin']
})

interface CallToActionProps {
    headerText: string
    body: JSX.Element
    actionText: string
    actionHref: string
    imgSrc: string
    imgPos: "left" | "right"
}

const CallToAction = ({ headerText, body, actionText, actionHref, imgSrc, imgPos }: CallToActionProps) => {
    return (
        <div className="bg-rose-50 w-full">
            <div className={clsx("content-container flex flex-col-reverse gap-y-8 small:flex-row small:items-center justify-evenly py-16 relative", {
                'md:!flex-row-reverse': imgPos === 'left'
            })}>
                <div className="text-rose-800">
                    <h3 className={clsx(lobster.className, "text-4xl font-bold")}>{headerText}</h3>
                    <br />
                    <div className="max-w-xs">{body}</div>
                    <div className="mt-6">
                        <UnderlineLink href={actionHref}>{actionText}</UnderlineLink>
                    </div>
                </div>

                <div className="relative w-full aspect-square small:w-[35%] small:aspect-[28/36]">
                    <Image
                        src={imgSrc}
                        alt=""
                        className="absolute inset-0"
                        fill
                        sizes="100vw"
                        style={{
                            objectFit: "cover",
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default CallToAction
