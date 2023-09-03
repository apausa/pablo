'use client';

import { Link } from '@nextui-org/react';
import React from 'react';

export default function Home() {
  return (
    <div>
      <p>
        <Link href="https://apausa.xyz" isExternal className="font-bold">Pablo Apausa</Link>
        {' '}
        (He/Him)
      </p>
      <br />
      <p>Software Engineer</p>
      <p>Geneva, Switzerland</p>
    </div>
  );
}
