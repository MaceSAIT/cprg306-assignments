//import { StyleSheet, Text, View } from 'react-native';
import Link from 'next/link'

export default function Home() {
    return (
      <main>
        <div>
            <h1 className="text-3xl font-bold m-6 text-center">Mace's CPRG 306 Assignments</h1>
            <h2>Home</h2>
            <br></br>
            <br></br>

            <ul className='flex flex-col justify-center'>
              <li className="p-4 m-2 border rounded-lg bg-gray-900">
                <Link className="text-lg text-gray-200 font-semibold" href={{pathname:'/week-2'}}>Week 2 Page</Link>
              </li>
              <li className="p-4 m-2 border rounded-lg bg-gray-900">
                <Link className="text-lg text-gray-200 font-semibold" href={{pathname:'/week-3'}}>Week 3 Page</Link>
              </li>
              <li className="p-4 m-2 border rounded-lg bg-gray-900">
                <Link className="text-lg text-gray-200 font-semibold" href={{pathname:'/week-4'}}>Week 4 Page</Link>
              </li>
              <li className="p-4 m-2 border rounded-lg bg-gray-900">
                <Link className="text-lg text-gray-200 font-semibold" href={{pathname:'/week-5'}}>Week 5 Page</Link>
              </li>
              <li className="p-4 m-2 border rounded-lg bg-gray-900">
                <Link className="text-lg text-gray-200 font-semibold" href={{pathname:'/week-6'}}>Week 6 Page</Link>
              </li>
              <li className="p-4 m-2 border rounded-lg bg-gray-900">
                <Link className="text-lg text-gray-200 font-semibold" href={{pathname:'/week-7'}}>Week 7 Page</Link>
              </li>
              <li className="p-4 m-2 border rounded-lg bg-gray-900">
                <Link className="text-lg text-gray-200 font-semibold" href={{pathname:'/week-8'}}>Week 8 Page</Link>
              </li>
              <li className="p-4 m-2 border rounded-lg bg-gray-900">
                <Link className="text-lg text-gray-200 font-semibold" href={{pathname:'/week-9'}}>Week 9 Page</Link>
              </li>
              <li className="p-4 m-2 border rounded-lg bg-gray-900">
                <Link className="text-lg text-gray-200 font-semibold" href={{pathname:'/week-10'}}>Week 10 Page</Link>
              </li>
            </ul>
        </div>
        
      </main>
    );
  }

/*{
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#F3F2F8',
      //alignItems: 'center',
      justifyContent: 'flex-start',
    },
});
}*/
