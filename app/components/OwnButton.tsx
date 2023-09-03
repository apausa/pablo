import React from 'react';
import { Button, Link } from '@nextui-org/react';
import { ButtonMetadata } from '../types/home';

export default function OwnButton({ buttonMetadata }: any) {
  const {
    color, variant, content, href,
  }: ButtonMetadata = buttonMetadata;

  return (
    <Button
      href={href}
      as={Link}
      isExternal
      color={color}
      variant={variant}
      className="my-2"
      size="lg"
    >
      {content}
    </Button>
  );
}
