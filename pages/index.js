import Layout from '../components/layout'
import logoImg from '../public/images/logoAbside.png'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()

    return (
        <Layout pageTitle={'Home'}>
            <div className="home-bg h-[100vh] flex flex-col items-center">
                <div className="text-white mt-36 flex flex-col items-center w-[80vw] font-[800] text-[76px]">
                    <p>UP'SIDE</p>
                    <p className="flex items-center justify-center text-[46px] font-[700]">
                        One project <span className="m-5 text-2xl">⇒</span>
                        One
                        <img
                            className="w-14 h-14 ml-5 animate-bounce"
                            src="https://cdn-icons-png.flaticon.com/512/1356/1356479.png"
                        />
                    </p>
                </div>
                <div className="text-white flex flex-col items-center mt-28">
                    <button className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 h-20 w-[25vw] text-black text-[1.7rem] home-button rounded-lg">
                        Launch a project
                    </button>
                    <p className="font-[700] mt flex items-center mt-8">
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
                            />
                        </span>
                        galaxy
                    </p>
                </div>
            </div>
        </Layout>
    )
}
