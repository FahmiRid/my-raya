/* eslint-disable react/no-unescaped-entities */
import { Inter } from "next/font/google";
import Link from "next/link";
// import backgroundMusic from './music/raya.mp3'

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      {/* <audio src={backgroundMusic} loop autoPlay /> */}
      <header className="bg-gray-900 text-white py-4">
        <nav className="flex justify-between items-center container mx-4">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" passHref={true} legacyBehavior={true}>
                <a className="text-gray-300 hover:text-white">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/qr.js" passHref={true} legacyBehavior={true}>
                <a className="text-gray-300 hover:text-white">Scan QR</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref={true} legacyBehavior={true}>
                <a className="text-gray-300 hover:text-white">My Profile</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-20 md:p-24">
        <div className="w-full md:w-1/2">
          <h1
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{ fontFamily: "Italianno" }}
          >
            Selamat Hari Raya Aidilfitri 🌙
          </h1>
          <h6
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Newsreader" }}
          >
            Mohon maaf zahir dan batin ✨
          </h6>
          <p
            className="text-lg md:text-xl mb-6"
            style={{ fontFamily: "Newsreader" }}
          >
            May you are blessed with Allah's rahmat in your life... May there is
            love and harmony in our relation for life...
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn more
          </button>
        </div>
      </main>
    </div>
  );
}
