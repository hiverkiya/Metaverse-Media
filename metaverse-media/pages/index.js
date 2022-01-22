import Head from 'next/head'
import Image from 'next/image'
import Messages from "../components/Messages"
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import { useMoralis } from 'react-moralis'
import Login from "../components/Login"
export default function Home() {
  
  const {isAuthenticated}=useMoralis();
  if(!isAuthenticated) return <Login/>;
  return (
    <div className="h-screen overflow-y-scroll bg-gradient-to-b from-green-500 to-fuchsia-600 overflow-hidden">
      <Head>
        <title>Metaverse Media</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="./icon.ico"  />
      </Head>
     
        <div className="max-w-screen-2xl mx-auto">
          <Header/>
          <Messages/>
        </div>
      
    </div>
  );
}
