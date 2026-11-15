import React from 'react';
import DoodleCrewFooter from './ui/doodle-crew-footer';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const crew = [
    { kind: 'yeti', letter: 0, seat: 'front', offset: -0.32, name: 'Bruno', says: 'Ready for the talks?' },
    { kind: 'bird', letter: 1, seat: 'top', offset: 0.02, name: 'Pip', says: 'Ideas worth spreading!' },
    { kind: 'kid', letter: 2, seat: 'top', offset: -0.05, name: 'Juno', says: 'Best seat at Crucible Lusaka.' },
    { kind: 'ghost', letter: 3, seat: 'behind', offset: 0, name: 'Boo', says: 'Rethinking Tomorrow!' },
    { kind: 'cat', letter: 3, seat: 'front', offset: 0.45, flip: true, name: 'Patch', says: 'See you at the event.' },
  ];

  const columns = [
    {
      title: 'Event',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Speakers', href: '#speakers' },
        { label: 'Program', href: '#program' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Theme',
      links: [
        { label: 'Economics', href: '#about' },
        { label: 'Artificial Intelligence', href: '#about' },
        { label: 'Psychology', href: '#about' },
        { label: 'Leadership', href: '#about' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'Crucible Lusaka', href: '#about' },
        { label: 'TEDx Program', href: 'https://www.ted.com/about/programs-initiatives/tedx-program' },
      ],
    },
  ];

  const socials = [
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'YouTube', href: 'https://youtube.com' },
  ];

  return (
    <DoodleCrewFooter
      wordmark="TEDX"
      brand="TEDxCrucibleLusaka"
      blurb="This independent TEDx event is operated under license from TED, dedicated to transforming ambitious students into pioneering leaders."
      tagline=""
      columns={columns}
      actions={[]}
      copyright={`© ${currentYear} TEDxCrucibleLusaka. Organized by Students at Crucible Lusaka.`}
      legal={[]}
      socials={socials}
      crew={crew}
      doodles={['continent', 'sun', 'node', 'pattern', 'star', 'bolt']}
      palette={{
        background: '#000000',
        ink: '#f4f1ea',
        accent: '#ff2b06',
      }}
      height="580px"
    />
  );
}