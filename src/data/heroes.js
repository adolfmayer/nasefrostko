export const heroes = [
  {
    id: 'vin-diesel',
    name: 'Vin Diesel',
    race: 'Inox',
    traits: ['Outcast ', 'Resourceful ', 'Strong'],
    perks: [
      { text: 'Nahraď jednu kartu -1 jednou kartou +1.', slots: 3 },
      { text: 'Nahraď jednu kartu -2 jednou kartou +0.', slots: 1 },
      {
        text: 'Nahraď jednu kartu +1 dvěma kartami +0 Posuň jeden ze svých žetonů hrdiny o 1 pole zpět.',
        slots: 2,
      },
      {
        text: 'Nahraď dvě karty +0 dvěma kartami Průraznost 3 Pokračuj.',
        slots: 1,
      },
      {
        text: 'Nahraď dvě karty +0 dvěma kartami Odstrčení 2 Pokračuj.',
        slots: 1,
      },
      { text: 'Přidej jednu kartu +3.', slots: 1 },
      { text: 'Přidej jednu kartu +2 Znehybnění.', slots: 2 },
      { text: 'Přidej dvě karty Léčení 1,sebe Pokračuj.', slots: 1 },
      { text: 'Ignoruj efekty scénáře a přidej jednu kartu +1.', slots: 1 },
      { text: 'Ignoruj -1 efekty předmětů a přidej jednu kartu +1.', slots: 1 },
      {
        text: 'Během svého dlouhého odpoč. můžeš posunout jeden svůj žeton hrdiny o 1 pole zpět.',
        slots: 2,
        chained: true,
      },
      {
        text: 'Pro každý scénář se můžeš vybavit 1 jednoručním předmětem navíc.',
        slots: 1,
      },
      {
        text: 'Na konci každého scénáře smíš odhodit až dvě karty kořisti, kromě náhodných předmětů, a táhnout místo toho stejný počet nových karet kořisti.',
        slots: 1,
      },
    ],
    image:
      'https://raw.githubusercontent.com/any2cards/worldhaven/refs/heads/master/images/art/frosthaven/characters/images/fh-drifter.png',
    color: 'from-blue-900/20',
    borderColor: 'group-hover:border-blue-500/50',
  },
  {
    id: 'surimi-jones',
    name: 'Surimi Jones',
    race: 'Lurker',
    traits: ['Armored ', 'Chaotic ', 'Strong'],
    image:
      'https://raw.githubusercontent.com/any2cards/worldhaven/refs/heads/master/images/art/frosthaven/characters/images/fh-crashing-tide.png',
    color: 'from-pink-900/20',
    borderColor: 'group-hover:border-pink-500/50',
  },
  {
    id: 'blaze-chilli',
    name: 'Blaze Chilli & Lime',
    race: 'Savvas',
    traits: ['Arcane ', 'Chaotic ', 'Intimidating'],
    image:
      'https://raw.githubusercontent.com/any2cards/worldhaven/refs/heads/master/images/art/frosthaven/characters/images/fh-pyroclast.png',
    color: 'from-red-900/20',
    borderColor: 'group-hover:border-red-500/50',
  },
  {
    id: 'slim-shady',
    name: 'Slim Shady',
    race: 'Valrath',
    perks: [
      { text: 'Odstraň dvě karty -1.', slots: 1 },
      { text: 'Nahraď jednu kartu -2 jednou kartou +0.', slots: 1 },
      { text: 'Nahraď jednu kartu -1 jednou kartou +1.', slots: 3 },
      { text: 'Nahraď jednu kartu +0 jednou kartou +1 Prokletí.', slots: 3 },
      { text: 'Přidej jednu kartu +2 Nabij tmu.', slots: 2 },
      {
        text: 'Přidej jednu kartu Znehybnění Pokračuj a jednu kartu Zmatení Pokračuj.',
        slots: 2,
      },
      { text: 'Přidej dvě karty Léčení 1, 1 spojenec Pokračuj.', slots: 2 },
      { text: 'Ignoruj efekty scénáře.', slots: 1 },
      {
        text: 'Kdykoli vykonáš dlouhý odpočinek, můžeš přesunout jeden Stín až o tři pole.',
        slots: 1,
      },
      {
        text: 'Kdykoli vykonáš krátký odpočinek, můžeš Konzumovat Tmu a vykonat tak Zmatení, Prokletí, Vzdálenost 2, jako by se Smrtonoška nacházela na poli se Stínem.',
        slots: 1,
      },
      {
        text: 'Kdykoli se nacházíš na poli se Stínem, všechny na tebe cílíci útoky jsou znevýhodněné.',
        slots: 1,
      },
    ],
    traits: ['Arcane ', 'Outcast ', 'Persuasive'],
    image:
      'https://raw.githubusercontent.com/any2cards/worldhaven/refs/heads/master/images/art/frosthaven/characters/images/fh-deathwalker.png',
    color: 'from-zinc-800/20',
    borderColor: 'group-hover:border-zinc-500/50',
  },
];
