import Link from 'next/link';
import React from 'react';



const CTA = () => {
  return (
   <section className='cta'>
    <p className='cta-text'>Have a project in mind? <br className='sm:block hidden'/>Let&apos;s build something</p>
    <Link className='btn' href="contact">
    Contact me
    </Link>
   </section>
  );
};

export default CTA;