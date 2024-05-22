"use client";
import React, { useRef, useState } from 'react';
import './style.scss';
import Link from 'next/link';
import Arrowright from '../icons/Arrowright';
import CopyIcon from '../icons/CopyIcon';

export default function Key() {
    const pRef = useRef(null);
    const [copiedText, setCopiedText] = useState('');
    const handleCopyText = () => {
        if (pRef.current) {
          const text = pRef.current.innerText; 
          navigator.clipboard.writeText(text);
          setCopiedText(text); 
        }
      };

  return (
    
    <section className='keyPage'>
        <div className='container'>
            <div className='row'>
                <div className='col-sm-12'>
                    <div className='text-center'>
                        <h1 className='text-center mb-3'>Secret Key</h1>
                    </div>
                    <div className='keyWrap'>
                        <div className='keyWrapInner d-flex '>
                            <p className='mb-0' ref={pRef}>sk_test_tR3PYbcVNZZ796tH88S4VQ2u</p>
                            <button onClick={handleCopyText}><CopyIcon/></button>
                        </div>
                    </div>
                    <div className='m-auto text-center backBtn'>
                        <Link className='secondaryBtn' href={"/"}> <Arrowright/> Home</Link>
                    </div>    
                </div>
            </div>
        </div>
    </section>
    
  )
}
