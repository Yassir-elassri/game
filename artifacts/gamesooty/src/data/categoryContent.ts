export interface CategoryContent {
  slug: string;
  metaDescription: string;
  editorial: string;
  highlights: string[];
  howToPlay: string[];
  faq: { q: string; a: string }[];
}

export const CATEGORY_CONTENT: Record<string, CategoryContent> = {
  arcade: {
    slug: 'arcade',
    metaDescription:
      'Play free arcade games online — no download, no sign-up. Action-packed titles with instant browser play on desktop and mobile.',
    editorial:
      'Arcade games are the purest form of gaming: simple rules, deep mastery, and the relentless pull of beating your last score. Our arcade collection spans everything from retro-style shooters and platformers to modern reflex challenges and endless runners. Each game is built for quick sessions that somehow turn into hours. You will find no downloads, no accounts, and no friction — just raw gameplay from the moment you click.',
    highlights: [
      'Instant play in any browser',
      'Classic and modern arcade styles',
      'Perfect for score chasing',
      'Mobile and desktop friendly',
    ],
    howToPlay: [
      'Most arcade games use arrow keys or WASD for movement — check the in-game instructions for specifics.',
      'Start on normal difficulty to learn the mechanics before pushing for high scores.',
      'Use the fullscreen button for the best experience on desktop.',
      'Tap-to-play controls activate automatically on touchscreen devices.',
    ],
    faq: [
      {
        q: 'Are all arcade games on Gamesooty free?',
        a: 'Yes — every arcade game on Gamesooty is 100% free to play. No purchase, subscription, or in-app payment is ever required.',
      },
      {
        q: 'Do I need to create an account to play arcade games?',
        a: 'No account needed. Just open the game page and click play. Your recently played games are remembered locally in your browser.',
      },
      {
        q: 'Can I play arcade games on my phone?',
        a: 'Yes. All games run in modern mobile browsers. Touch controls activate automatically where supported.',
      },
      {
        q: 'How do I save my high score?',
        a: 'Scores are managed by the individual game. Many games save your best score locally in your browser between sessions.',
      },
    ],
  },

  puzzles: {
    slug: 'puzzles',
    metaDescription:
      'Free online puzzle games — logic, brain teasers, word puzzles, and more. Play instantly in your browser, no download needed.',
    editorial:
      'Puzzle games are uniquely rewarding: every level is a small problem to crack, and the satisfaction of finding the solution never gets old. Our puzzle collection includes logic puzzles, sliding tiles, match-3 games, word challenges, physics-based brainteasers, and much more. Whether you have five minutes to clear your head or an hour to really dig in, there is a puzzle here that will stretch your thinking in the best possible way.',
    highlights: [
      'Logic, word, and physics puzzles',
      'Relaxing and stimulating gameplay',
      'Great for all ages',
      'No time pressure — play at your pace',
    ],
    howToPlay: [
      'Read the objective before starting — puzzle games often have a specific win condition that is easy to miss.',
      'If you are stuck, step away and come back fresh. A new perspective often reveals the solution instantly.',
      'Use hints sparingly — overuse reduces the satisfaction of solving a puzzle on your own.',
      'Harder difficulty levels unlock more interesting mechanics in most puzzle games.',
    ],
    faq: [
      {
        q: 'Are puzzle games good for your brain?',
        a: 'Yes — research shows puzzle games improve working memory, problem-solving skills, and concentration. They are a productive and enjoyable way to exercise your mind.',
      },
      {
        q: 'Are all puzzle games free on Gamesooty?',
        a: 'Every puzzle game in our catalog is completely free. No hidden fees, no subscriptions.',
      },
      {
        q: 'Can children play puzzle games on Gamesooty?',
        a: 'Absolutely. Our puzzle games are family-friendly and suitable for players of all ages. We review every game for appropriate content before it goes live.',
      },
      {
        q: 'Do puzzle games work on mobile?',
        a: 'Yes. Touch-screen puzzle games work great on phones and tablets — just open the game in your mobile browser.',
      },
    ],
  },

  adventure: {
    slug: 'adventure',
    metaDescription:
      'Play free adventure games online — explore worlds, solve quests, and uncover stories. No download required.',
    editorial:
      'Adventure games take you somewhere else entirely. Our collection spans atmospheric exploration games, quest-driven RPG-lites, platforming adventures, and story-rich journeys — all playable in your browser the moment you arrive. Whether you prefer action-heavy quests or slower, narrative-led experiences, the adventure genre rewards curiosity, persistence, and a willingness to explore every corner of the map.',
    highlights: [
      'Story-driven and exploration gameplay',
      'Wide range of styles and settings',
      'Short and long-form adventures available',
      'No download — play in seconds',
    ],
    howToPlay: [
      'Explore every area thoroughly — adventure games often hide upgrades, shortcuts, and story clues off the main path.',
      'Talk to every character or read every note you find — context makes the adventure richer.',
      'Save your progress whenever the game allows. Many browser adventures have autosave built in.',
      'Do not rush — adventure games are designed to be experienced, not just completed.',
    ],
    faq: [
      {
        q: 'How long are browser adventure games?',
        a: 'It varies widely. Some adventure games are quick 10-minute experiences, while others have hours of content. Each game page lists the category and gives you an idea of depth.',
      },
      {
        q: 'Are adventure games free on Gamesooty?',
        a: 'Yes, every adventure game in our catalog is completely free to play with no sign-up required.',
      },
      {
        q: 'Can I save my progress in adventure games?',
        a: 'Many adventure games include built-in save systems or use browser local storage. Check the individual game for save instructions.',
      },
      {
        q: 'Are adventure games suitable for kids?',
        a: 'Most of our adventure games are family-friendly. All titles are reviewed for content suitability before being listed.',
      },
    ],
  },

  'dress-up': {
    slug: 'dress-up',
    metaDescription:
      'Free online dress-up games — mix and match outfits, accessories, and styles. Play instantly in your browser, no sign-up needed.',
    editorial:
      'Dress-up games are a creative playground for fashion and self-expression. Our collection lets you style characters across hundreds of themes — from fairy-tale princesses and pop idols to modern street fashion and fantasy warriors. Mix and match clothes, hairstyles, accessories, and cosmetics to build looks that are entirely your own. These games are endlessly replayable because there is always a new combination to discover, and always a more perfect outfit waiting to be created.',
    highlights: [
      'Hundreds of fashion combinations',
      'Themes from fantasy to modern style',
      'Creative and relaxing gameplay',
      'Perfect for all ages',
    ],
    howToPlay: [
      'Start with the base outfit or character skin before layering accessories and clothing.',
      'Experiment freely — there are no wrong choices, and you can change everything at any time.',
      'Look for seasonal or themed collections within games for unique style options.',
      'Screenshot your favourite looks to save them before moving on.',
    ],
    faq: [
      {
        q: 'Are dress-up games free on Gamesooty?',
        a: 'Yes — all dress-up games are completely free with no purchases or subscriptions required.',
      },
      {
        q: 'Can I play dress-up games on mobile?',
        a: 'Yes. Dress-up games are among the most touch-friendly games in our catalog and work great on phones and tablets.',
      },
      {
        q: 'Are dress-up games only for girls?',
        a: 'Not at all. Fashion and design games are for anyone who enjoys creativity and style. Our catalog includes themes that appeal to all players.',
      },
      {
        q: 'Can I save my designs?',
        a: 'Many dress-up games include a screenshot or share feature. Use your device screenshot tool to save looks you love.',
      },
    ],
  },

  action: {
    slug: 'action',
    metaDescription:
      'Free online action games — intense combat, missions, and challenges. Play instantly in your browser with no download.',
    editorial:
      'Action games demand quick thinking, sharp reflexes, and the determination to get back up after every defeat. Our action collection covers melee brawlers, combat platformers, wave-based survival games, and everything in between. These are games built around the satisfaction of mastering a challenge that felt impossible just ten minutes ago. No tutorials required — pick a game, jump in, and figure it out.',
    highlights: [
      'Intense combat and reflex challenges',
      'Wide range of action sub-genres',
      'Short learning curves, deep mastery',
      'Instant browser play',
    ],
    howToPlay: [
      'Learn to dodge before focusing on attacking — staying alive is always the first priority.',
      'Study enemy patterns in action games. Most enemies have predictable behaviour that can be exploited.',
      'Use the fullscreen mode to see more of the game environment.',
      'Keep your hands on the keyboard home row for faster reaction times.',
    ],
    faq: [
      {
        q: 'Are action games suitable for beginners?',
        a: 'Yes. Most action games on Gamesooty include easy or normal modes perfect for learning. You can always increase the difficulty once you are comfortable.',
      },
      {
        q: 'Do action games require a fast internet connection?',
        a: 'Most browser action games work well on standard broadband connections. A stable connection is more important than raw speed.',
      },
      {
        q: 'Are action games free on Gamesooty?',
        a: 'Every action game in our catalog is 100% free. No payment required, ever.',
      },
      {
        q: 'Do action games work on mobile?',
        a: 'Many do. Games with touch-compatible controls will work on smartphones and tablets.',
      },
    ],
  },

  strategy: {
    slug: 'strategy',
    metaDescription:
      'Free online strategy games — build, plan, and conquer. Browser-based strategy with no download required.',
    editorial:
      'Strategy games reward patience and forward thinking above everything else. Our collection includes tower defence games, base-building simulations, turn-based tactics, and real-time strategy titles — all playable free in your browser. The best strategy games create situations where you feel genuinely clever for finding the winning move, and genuinely motivated to try again when you do not. If you enjoy being in control and thinking three steps ahead, this is your category.',
    highlights: [
      'Tower defence, tactics, and base building',
      'Rewarding for patient, methodical players',
      'Single-session and longer-form strategy games',
      'Free and instant in your browser',
    ],
    howToPlay: [
      'Prioritise economy early — in most strategy games, a strong resource base makes everything else easier.',
      'Read the tutorial even if you think you know the genre. Each game has its own balance.',
      'Do not overextend. Secure one objective at a time rather than spreading thin.',
      'Observe how your opponents or enemies behave before committing to a strategy.',
    ],
    faq: [
      {
        q: 'Are strategy games free on Gamesooty?',
        a: 'Yes, all strategy games in our catalog are completely free to play in your browser.',
      },
      {
        q: 'Do I need gaming experience to play strategy games?',
        a: 'No. We have strategy games for all skill levels, from simple tower defence games to complex tactical challenges.',
      },
      {
        q: 'How long does a strategy game session take?',
        a: 'It depends on the game. Some strategy games are designed for 15-minute sessions; others have campaigns that take much longer. Check the game description for an indication.',
      },
      {
        q: 'Can I pause strategy games?',
        a: 'Most browser strategy games support pausing. Check the in-game menu or press Escape to pause.',
      },
    ],
  },

  sports: {
    slug: 'sports',
    metaDescription:
      'Free online sports games — football, basketball, tennis, and more. Play instantly in your browser, no download needed.',
    editorial:
      'Sports games bring the competitive energy of real sport into a format that is instantly accessible and endlessly replayable. Our sports collection covers football, basketball, tennis, golf, and a range of niche sports, each with its own distinct controls and scoring systems. These games are perfect for short competitive bursts — beat your personal best, try to master a tricky shot, or simply enjoy the satisfaction of a well-timed goal.',
    highlights: [
      'Football, basketball, tennis, and more',
      'Quick to learn, hard to master',
      'Great for competitive play',
      'Free and instant in your browser',
    ],
    howToPlay: [
      'Start with timing — most sports games revolve around getting your timing right for shots, passes, or jumps.',
      'Watch the indicator bars and power meters carefully before committing to a shot.',
      'Practice the core mechanic in easy mode before increasing difficulty.',
      'Look for multiplayer sports games if you want to compete against others.',
    ],
    faq: [
      {
        q: 'Are sports games free on Gamesooty?',
        a: 'Yes — all sports games are completely free with no hidden costs.',
      },
      {
        q: 'Can I play sports games on mobile?',
        a: 'Many sports games support touch controls and work well on smartphones and tablets.',
      },
      {
        q: 'Are there multiplayer sports games available?',
        a: 'Yes, some of our sports games support local or online multiplayer. Check the game description for details.',
      },
      {
        q: 'Do sports games require specific hardware?',
        a: 'No special hardware is needed. All games run in standard web browsers on any device.',
      },
    ],
  },

  driving: {
    slug: 'driving',
    metaDescription:
      'Free online driving games — race, drift, and cruise in your browser. No download, no sign-up required.',
    editorial:
      'Driving games satisfy a universal urge: to go fast without consequences. Our driving collection spans realistic circuit racing, arcade drift challenges, traffic-dodging endless drivers, and off-road adventures. Each game brings something different to the experience — from the precision of lap-time optimisation to the chaotic fun of keeping your car on the road at impossible speeds. No licence required, no installs, just open the game and floor it.',
    highlights: [
      'Racing, drifting, and traffic dodging',
      'Realistic and arcade styles',
      'Time attack and endless modes',
      'Instant browser play on any device',
    ],
    howToPlay: [
      'Brake before corners, not during — carry as much speed as possible through the apex.',
      'In traffic games, look two or three cars ahead rather than reacting at the last moment.',
      'Use arrow keys or WASD for steering in most driving games. Some support gamepad.',
      'Practice the track layout before pushing for best lap times.',
    ],
    faq: [
      {
        q: 'Are driving games free on Gamesooty?',
        a: 'Yes — every driving and racing game in our catalog is completely free to play.',
      },
      {
        q: 'Can I use a gamepad for driving games?',
        a: 'Some browser driving games support gamepad input via the Web Gamepad API. Check the individual game for controller support.',
      },
      {
        q: 'Do driving games work on mobile?',
        a: 'Many do, with tilt or on-screen touch controls. Performance may vary by device.',
      },
      {
        q: 'Are there multiplayer driving games?',
        a: 'Some titles in our driving category support multiplayer racing. Check the game description for details.',
      },
    ],
  },

  shooting: {
    slug: 'shooting',
    metaDescription:
      'Free online shooting games — target practice, wave survival, and first-person shooters. Play instantly in your browser.',
    editorial:
      'Shooting games are all about precision, awareness, and staying cool under pressure. Our shooting collection includes top-down shooters, target practice games, physics-based projectile challenges, and first-person-style browser experiences. The genre rewards accuracy and the ability to stay focused when the action gets intense. Whether you prefer methodical sniping or frantic spray-and-pray, there is a shooting game here that will test your nerve.',
    highlights: [
      'Target practice, wave survival, and more',
      'Tests precision and reaction speed',
      'Multiple shooting sub-genres',
      'Free and instantly playable',
    ],
    howToPlay: [
      'Aim for weak points or critical hit areas — most shooting games reward accuracy over volume of fire.',
      'Control your movement and keep cover between shots when available.',
      'Use the mouse for aiming where possible — it provides the most precision.',
      'Conserve ammunition in survival shooters and prioritise the most dangerous enemies first.',
    ],
    faq: [
      {
        q: 'Are shooting games on Gamesooty violent?',
        a: 'Our shooting games feature cartoon or stylised violence appropriate for general audiences. We review all content before publishing.',
      },
      {
        q: 'Are shooting games free on Gamesooty?',
        a: 'Yes, every shooting game in our catalog is completely free to play.',
      },
      {
        q: 'Do shooting games work on mobile?',
        a: 'Some do with tap-to-aim controls. Mouse-based shooting games perform best on desktop.',
      },
      {
        q: 'Can I play shooting games with a keyboard only?',
        a: 'Many shooting games can be played with keyboard alone, though mouse + keyboard usually gives the best experience.',
      },
    ],
  },

  'board-game': {
    slug: 'board-game',
    metaDescription:
      'Free online board games — chess, checkers, Sudoku, and more. Play classic tabletop games instantly in your browser.',
    editorial:
      'Board games have endured for centuries because the best ones are genuinely brilliant pieces of design. Our online board game collection brings classic tabletop experiences into your browser — from chess and checkers to card games and dice-based strategy. These are games built on elegance and balance, where understanding the rules deeply is just the beginning. Whether you play to relax or to win at all costs, board games reward dedicated, thoughtful play.',
    highlights: [
      'Classic and modern board games',
      'Play against AI at varying difficulties',
      'Timeless rules, always free',
      'Great for all ages and skill levels',
    ],
    howToPlay: [
      'Learn the rules completely before playing — board games rely on knowing every option available to you.',
      'Start against easy AI difficulty to build your understanding of strategy.',
      'Think about what your opponent can do on their next turn before making your move.',
      'Board games reward patience — never rush a decision you have time to think through.',
    ],
    faq: [
      {
        q: 'Can I play board games against other people?',
        a: 'Some board games on Gamesooty support local two-player mode. Most can also be played solo against AI opponents.',
      },
      {
        q: 'Are board games free on Gamesooty?',
        a: 'Yes — all board and card games are completely free to play in your browser.',
      },
      {
        q: 'Do board games work on mobile?',
        a: 'Yes. Turn-based board games are particularly well-suited to touchscreen devices.',
      },
      {
        q: 'Are the rules shown inside the game?',
        a: 'Most board games include a help or tutorial section. If you are unfamiliar with a game, look for the ? or Help button in the game interface.',
      },
    ],
  },

  jigsaw: {
    slug: 'jigsaw',
    metaDescription:
      'Free online jigsaw puzzle games — beautiful images, multiple difficulty levels. Play instantly in your browser.',
    editorial:
      'Jigsaw puzzles are one of the most satisfying and accessible games ever devised. Our online jigsaw collection features beautifully illustrated images spanning nature, fantasy, architecture, and art — all playable directly in your browser. Choose how many pieces you want to work with, rotate and snap pieces into place, and enjoy the calm, focused pleasure of watching an image come together one piece at a time. Perfect for a quiet moment alone or a shared activity with friends and family.',
    highlights: [
      'Beautiful themed images',
      'Multiple difficulty levels and piece counts',
      'Relaxing and meditative gameplay',
      'Great for all ages',
    ],
    howToPlay: [
      'Start by finding edge and corner pieces — they are easiest to place and define the puzzle boundary.',
      'Sort pieces by colour or pattern before you begin assembling.',
      'Work on small sections of the image at a time rather than the whole puzzle at once.',
      'Use the reference image in the corner to check where pieces belong.',
    ],
    faq: [
      {
        q: 'Are jigsaw games free on Gamesooty?',
        a: 'Yes — all jigsaw puzzle games are completely free to play in your browser.',
      },
      {
        q: 'Can I save my jigsaw puzzle progress?',
        a: 'Many jigsaw games save your progress automatically in the browser. Check the individual game for save options.',
      },
      {
        q: 'Are jigsaw games good for children?',
        a: 'Yes. Jigsaw puzzles are excellent for developing spatial reasoning and patience in children of all ages.',
      },
      {
        q: 'Do jigsaw games work on tablets?',
        a: 'Yes — jigsaw puzzles are ideal for touchscreens and work very well on tablets and iPads.',
      },
    ],
  },

  multiplayer: {
    slug: 'multiplayer',
    metaDescription:
      'Free online multiplayer games — compete and cooperate with players worldwide. Play instantly in your browser.',
    editorial:
      'Multiplayer games turn every session into an unpredictable, human experience. Our multiplayer collection includes competitive games where you face real opponents, cooperative titles where teamwork is everything, and local two-player games for playing alongside a friend. The best multiplayer games create moments that you remember precisely because they happened against a real person — a last-second comeback, an unexpected alliance, or a perfectly executed play that no AI would ever make.',
    highlights: [
      'Real-time online and local multiplayer',
      'Competitive and cooperative modes',
      'No download required to play with others',
      'Leaderboards and score tracking in many games',
    ],
    howToPlay: [
      'Complete the single-player or practice mode first to learn the game before facing other players.',
      'Be aware of the game\'s community — check if there are tips or strategies shared by experienced players.',
      'In competitive games, focus on consistent improvement rather than winning immediately.',
      'Local multiplayer games work great on a single keyboard — check the key bindings for both players.',
    ],
    faq: [
      {
        q: 'Do I need an account to play multiplayer games?',
        a: 'No account is required to play. Just open the game and start playing — many multiplayer games match you with opponents automatically.',
      },
      {
        q: 'Are multiplayer games free on Gamesooty?',
        a: 'Yes — all multiplayer games are completely free to play.',
      },
      {
        q: 'Can I play multiplayer games on mobile?',
        a: 'Some multiplayer games are mobile-compatible. Check the game description for device support details.',
      },
      {
        q: 'Is there a way to play with a specific friend?',
        a: 'Some games include room codes or friend-invite features. Check the individual game for details on inviting specific players.',
      },
    ],
  },

  other: {
    slug: 'other',
    metaDescription:
      'Free online games — unique and diverse titles that do not fit a single category. Play instantly in your browser.',
    editorial:
      'Sometimes the best games defy easy categorisation. Our "Other" collection is home to creative, experimental, and genuinely unique browser games that blend genres, subvert expectations, or simply do something you have never seen before. If you have exhausted the main categories or just enjoy discovering the unexpected, this is the collection to explore. Every game here earned its place by being interesting, well-made, and worth your time.',
    highlights: [
      'Unique and experimental titles',
      'Cross-genre and creative games',
      'Always something new to discover',
      'Free and instant in your browser',
    ],
    howToPlay: [
      'Go in without expectations — these games often surprise you with their mechanics.',
      'Read the in-game instructions carefully, as unique games may have non-obvious controls.',
      'If a game feels unusual at first, give it a few minutes before deciding it is not for you.',
      'Share games you enjoy from this section — unique games deserve a wider audience.',
    ],
    faq: [
      {
        q: 'Why are some games listed under "Other"?',
        a: 'Games in this category blend multiple genres or are genuinely unique in ways that make a single category label misleading. They are just as high-quality as any other game on the site.',
      },
      {
        q: 'Are Other category games free?',
        a: 'Yes — every game on Gamesooty, regardless of category, is completely free to play.',
      },
      {
        q: 'Do these games work on mobile?',
        a: 'Many do. Browser compatibility varies by game — most will work on modern mobile browsers.',
      },
      {
        q: 'How often is the Other category updated?',
        a: 'We add new games across all categories regularly. Check back often to discover new titles.',
      },
    ],
  },
};
