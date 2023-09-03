'use client';

import { Link } from '@nextui-org/react';
import React from 'react';
import BUTTONS_METADATA from './lib/state/constants/home';
import { ButtonMetadata } from './types/home';
import OwnButton from './components/OwnButton';

export default function Home() {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col basis-2/5 p-4">
        <header className="flex flex-col pb-2">
          <p>
            <strong className="font-bold">Pablo Apausa</strong>
            {' '}
            (He/Him)
          </p>
          <p>Software Engineer</p>
          <p>Geneva, Switzerland</p>
        </header>
        <main className="flex flex-col">
          {BUTTONS_METADATA.map((buttonMetadata: ButtonMetadata) => (
            <OwnButton buttonMetadata={buttonMetadata} />
          ))}
        </main>
      </div>
    </div>
  );
}
