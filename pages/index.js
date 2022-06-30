import Layout from '../components/layout'
import logoImg from '../public/images/logoAbside.png'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'

export default function Home() {
    return (
        <Layout pageTitle={'Home'}>
            <div className="home-bg h-[100vh] flex flex-col items-center">
                <div className="text-white mt-36 flex flex-col items-center w-[80vw] font-[800] text-[76px]">
                    <p>UP'SIDE</p>
                    <div className="flex items-center justify-center text-[46px] font-[700]">
                        <p className="py-3 text-gray-100 m-5 text-4xl">
                            <Typewriter
                                options={{
                                    strings: [
                                        'Welcome to you, Apsidian !',
                                        'One Project ⇒ One Rocket',
                                        'Search and Create a project',
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </p>
                    </div>
                    <img
                        className="w-12 h-11"
                        src="https://cdn-icons-png.flaticon.com/512/1356/1356479.png"
                        alt=""
                    />
                </div>
                <div className="text-white flex flex-col items-center mt-12">
                    <button className="bg-blue-500 hover:bg-blue-700 hover:scale-110 font-bold py-2 px-4 h-20 w-[22vw] text-black text-[1.7rem] home-button rounded-lg">
                        Launch a project
                    </button>
                    <p className="font-[500] mt flex items-center mt-8">
                        or explore
                        <span className="ml-5 mr-5 hover:scale-110 cursor-pointer">
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
        </Layout>
    )
}
