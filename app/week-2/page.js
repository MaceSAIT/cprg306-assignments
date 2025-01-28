//import { studentInfo } from "./student-info.js";
//<studentInfo/>
import Link from 'next/link'

export default function Page() {
    return (
      <main>
        <div>
            <h1>Mace's <s>Week 2</s> App</h1>
            <h2>Mace Howald</h2>
            <br></br>
            <a href='https://github.com/MaceSAIT/cprg306-assignments' target="_blank">Github using Anchor</a>
            <br></br>
            <Link href={{pathname:'https://github.com/MaceSAIT/cprg306-assignments'}}>Github using Link</Link>
            <br></br>
            <br></br>
            <Link href={{pathname:'/'}}>Back to Home</Link>
        </div>
        
      </main>
    );
  }