import Head from 'next/head'
import DNAAnimation from '../components/DNAAnimation'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>LIPIGENOMICS — Sequencing identity</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen">
        <header className="p-6 flex items-center gap-6">
          <div className="text-xl font-serif text-white">LIPIGENOMICS</div>
          <nav className="ml-auto flex gap-4 text-sm text-gray-300">
            <a className="py-2 px-4 rounded-full border border-transparent hover:border-teal-500">Home</a>
            <a className="py-2 px-4 rounded-full">About</a>
            <a className="py-2 px-4 rounded-full">Research</a>
          </nav>
        </header>

        <section className="flex flex-col items-center text-center pt-6 px-6">
          <DNAAnimation />

          <div className="mt-6">
            <div className="text-sm tracking-widest text-purple-400">SEQUENCING IDENTITY</div>
            <h1 className="text-5xl md:text-6xl font-serif mt-2 text-white">LIPIGENOMICS</h1>
            <Link href="/dashboard">
              <a className="mt-6 inline-block px-6 py-3 rounded-full border border-gray-600 hover:bg-[#0b2c2a] text-white">Enter site →</a>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
