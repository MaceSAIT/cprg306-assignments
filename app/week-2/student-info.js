import Link from 'next/link'
import React from 'react';
import ReactDOM from 'react-dom';

export class studentInfo extends React.Component {
    render() {
      return 
      <div>
        <h2>Mace Howald</h2>
        <Link href={{pathname:'https://github.com/MaceSAIT/cprg306-assignments'}}>Github</Link>
      </div>
    }
  }