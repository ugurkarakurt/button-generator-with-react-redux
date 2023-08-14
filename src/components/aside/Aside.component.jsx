import React from 'react';
import Button from './Button.component';
import Header from './Header.component';
import CopyToClipboardButton from './CopyClipBoard.component';

export default function Aside() {

  return (
    <aside id="buttonPreviewer" className="aside">
      <Button />
      <CopyToClipboardButton />
      <Header />
    </aside>
  )
}
