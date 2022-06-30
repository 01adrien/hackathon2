import React from 'react'
import logoImg from '../public/images/logoAbside.png'
import Image from 'next/image'
import Head from 'next/Head'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()

    return (
        <>
            <Head>
                <title>My home page</title>
            </Head>
            <div className="home-bg h-[100vh] flex flex-col items-center">
                <div className="text-white mt-36 flex flex-col items-center w-[80vw] font-[800] text-[76px]">
                    <p>UP&apos;SIDE</p>

                    <div className="flex items-center justify-center text-[46px] font-[700]">
                        <p className="py-3 text-gray-200 m-5 text-4xl">
                            One Project = One Rocket
                        </p>
                    </div>
                    <p className="text-[70px] animate-bounce">🚀</p>
                </div>
                <div className="text-white flex flex-col items-center mt-8">
                    <Link href="/launch">
                        <button className="bg-blue-500 hover:bg-blue-700 hover:scale-110 font-bold py-2 px-4 h-20 w-[32vw] text-black text-[1.3rem] home-button rounded-lg uppercase z-30">
                            Launch a rocket
                        </button>
                    </Link>
                    <p className="font-[500] flex items-center mt-8">
                        or explore
                        <span
                            className="ml-5 mr-5 hover:scale-110 cursor-pointer"
                            onClick={() => router.push('/dashboard')}
                        >
                            <Image
                                src={logoImg}
                                width={80}
                                height={40}
                                style={{ borderRadius: '10px' }}
                                alt=""
                            />
                        </span>
                        galaxy
                    </p>
                </div>
            </div>
        </>
    )
}
