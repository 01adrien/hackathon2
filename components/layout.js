import Head from 'next/head'

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
            {children}
        </>
    )
}
