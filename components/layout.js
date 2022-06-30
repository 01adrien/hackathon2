import Head from 'next/head'
import Image from 'next/image'
import rocketlogoImg from '../public/images/rocket_stopl.png'
import Link from 'next/link'

export default function Layout({ children, pageTitle }) {
    return (
        <>
            <Head>
                <link
                    rel="icon"
                    href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏦</text></svg>"
                />
                <title>{pageTitle}</title>
            </Head>
            <div className="flex absolute right-0 top-0 pt-3">
                <Link href="/">
                    <Image
                        src={rocketlogoImg}
                        alt=""
                        width={60}
                        height={40}
                        className="cursor-pointer hover:animate-spin p-2"
                    ></Image>
                </Link>
                <p className="text-lg text-white font-bold p-2">Home</p>
            </div>
            {children}
        </>
    )
}
