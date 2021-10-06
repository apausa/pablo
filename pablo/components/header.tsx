import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Pablo() {
  const { route } = useRouter();
  return (
    <header>
      <Link href={(route === '/') ? '/pablo' : '/'}>
        <h1>Pablo Apausa</h1>
      </Link>
    </header>
  );
}
