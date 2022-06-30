import Head from 'next/head'
import Image from 'next/image'
import rocketlogoImg from '../public/images/rocket_stopl.png'
import Link from 'next/link'

export default function Layout({ children, pageTitle }) {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin
                />
                <link
                    href={`https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,400;0,500;1,300&display=swap`}
                    rel="stylesheet"
                />
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
