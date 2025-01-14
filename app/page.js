
import Link from 'next/link'

export default function Home() {
    return (
      <main>
        <div>
            <h1>Mace's Week 2 App</h1>
            <h2>Home</h2>
            <br></br>
            <br></br>
            <Link href={{pathname:'/week-2'}}>Week 2 Page</Link>
        </div>
        
      </main>
    );
  }