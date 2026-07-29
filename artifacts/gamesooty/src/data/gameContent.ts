import { formatPlayers } from '@/lib/games';

export interface GameContentTemplate {
  extendedDescription: (game: {
    title: string;
    description: string;
    rating: number;
    players: number;
  }) => string;
  controls: { key: string; action: string }[];
  howToPlay: string[];
  tips: string[];
}

type GameInput = { title: string; description: string; rating: number; players: number };

export const GAME_CONTENT: Record<string, GameContentTemplate> = {
  action: {
    extendedDescription: ({ title, rating, players }: GameInput) =>
      `${title} is a standout entry in the action genre — a category built on fast reflexes, split-second decision-making, and the relentless desire to push further than your last attempt. What separates great action games from average ones is the satisfaction loop, and ${title} delivers it well: face a challenge, die, learn from it, and come back stronger. The mechanics click into place within the first minute, but real mastery reveals itself over many sessions as you start reading enemy patterns, optimising your movement, and finding efficiencies you didn't know were there.

Action games are best experienced without distractions, and ${title} respects that philosophy — every moment is filled with intentional, engaging gameplay that rewards commitment. The difficulty scales naturally: early stages teach you the fundamentals without overwhelming you, while later sections demand the precision and pattern recognition you've built along the way. It is the kind of game where a bad run teaches you more than a lucky win, and where consistent practice translates directly into measurable improvement.

With a ${rating.toFixed(1)}/5 rating from ${formatPlayers(players)} players, ${title} has proven itself as one of the more compelling titles in this collection. Play in fullscreen on desktop for the sharpest response and the most immersive experience.`,
    controls: [
      { key: 'WASD / Arrow Keys', action: 'Move character' },
      { key: 'Space', action: 'Jump / Dodge / Roll' },
      { key: 'Left Click / Z', action: 'Attack / Shoot' },
      { key: 'Right Click / X', action: 'Special ability / Block' },
      { key: 'E', action: 'Interact with objects / Pick up' },
      { key: 'Shift', action: 'Sprint / Dash' },
      { key: 'P / Esc', action: 'Pause game' },
    ],
    howToPlay: [
      'Begin by mastering the movement controls — smooth, deliberate movement is the foundation of everything else in an action game. Spend the first run learning how the character responds before focusing on combat.',
      'Study enemy attack patterns before committing to your own strikes. Almost every enemy telegraphs its attacks with a visible animation; reacting to that tell beats button-mashing in every situation.',
      'Collect power-ups, health items, and bonuses as you encounter them rather than saving them for emergencies — most do not carry between sessions, and holding them provides no benefit.',
      'Progress through levels methodically, clearing threats before advancing to avoid being surrounded. Rushing forward when enemies remain behind you is the most common cause of unnecessary deaths.',
      'Use the fullscreen button in the game toolbar for the sharpest visibility and most responsive keyboard feel on desktop.',
    ],
    tips: [
      'Keep moving at all times — a stationary target is dramatically easier to hit than a moving one, and most action game enemies are designed to punish players who stop.',
      'Every enemy has a tell before attacking. Investing time in learning these patterns converts difficult sections into manageable, predictable sequences.',
      'Prioritise ranged and high-damage enemies first when given a choice; close-range threats are easier to handle when the field is less crowded.',
      'If a section is blocking your progress after multiple attempts, try a completely different approach — most action games have several valid strategies for each challenge, and the one you've been using may simply not suit your playstyle.',
    ],
  },

  adventure: {
    extendedDescription: ({ title, rating, players }: GameInput) =>
      `Adventure games offer something rare in the browser gaming space: a genuine sense of place, purpose, and progression that rewards exploration and curiosity above all else. ${title} is a strong example of what the genre can achieve — movement, interaction, environmental storytelling, and challenge woven together into an experience that pulls you forward without ever feeling prescriptive. The best adventure games make you feel genuinely embedded in their worlds, and ${title} earns that quality through careful level design and a respect for player intelligence.

Unlike reflex-driven genres, adventure rewards patience and observation. The solution to a difficult section is usually visible if you look carefully enough — a clue in the environment, an item you passed earlier, a dialogue line that pointed somewhere you didn't go. That detective-style engagement makes progress feel genuinely earned rather than simply survived.

${title} has been played by ${formatPlayers(players)} players and holds a ${rating.toFixed(1)}/5 rating — strong evidence that the experience resonates across a broad audience. Open it in fullscreen, give yourself room to explore, and resist the urge to rush. The best moments in adventure games come from thorough, curious play.`,
    controls: [
      { key: 'Arrow Keys / WASD', action: 'Move / Walk / Run' },
      { key: 'Space / Up Arrow', action: 'Jump / Climb' },
      { key: 'E / Enter', action: 'Interact / Talk to characters' },
      { key: 'Z / X', action: 'Action button / Attack' },
      { key: 'I / Tab', action: 'Inventory / Items' },
      { key: 'Esc / P', action: 'Pause / Menu' },
    ],
    howToPlay: [
      'Take time to explore each area thoroughly before moving on — items, clues, and hidden paths are frequently tucked into corners or behind interactive elements that don\'t immediately announce themselves.',
      'Interact with everything that highlights or responds to your cursor. Objects that can be activated or picked up usually have a visual indicator; make a habit of checking.',
      'Pay close attention to dialogue and environmental details — adventure games routinely hide solutions in plain sight within the game\'s own text and visuals.',
      'If you reach a point that feels impossible, backtrack to earlier areas before looking for external help. Most impasses are solved with an item or piece of information already available in the game.',
      'Use the fullscreen button for a wider view of the game world, which makes spotting interactive elements and hidden paths significantly easier.',
    ],
    tips: [
      'Thorough exploration pays off consistently in adventure games. Check every corner of every room before advancing — this habit saves far more time than it costs.',
      'If a puzzle seems impossible, you almost certainly need something from another area. Return to earlier sections with fresh eyes rather than forcing the current problem.',
      'Adventure games rarely demand reflex speed. When facing a difficult challenge, slowing down and thinking deliberately almost always beats reactive play.',
      'Pay attention to the art direction — colour, lighting, and visual emphasis in adventure games usually guide you toward the intended path without making it obvious.',
    ],
  },

  arcade: {
    extendedDescription: ({ title, rating, players }: GameInput) =>
      `Arcade games have a timeless quality: simple enough to understand in thirty seconds, deep enough to spend hours mastering. ${title} belongs firmly in this tradition — delivering the kind of score-chasing, reflex-testing gameplay that made arcade cabinets legendary and still holds up perfectly in a browser window. The core loop is clean and intentional: understand the threat pattern, react correctly, survive longer than before, repeat.

What makes ${title} particularly compelling is how difficulty scales naturally rather than artificially. Early stages exist to teach you the mechanics without overwhelming you; later stages demand the precision and rhythm you've been building throughout. There is no moment where the challenge feels unfair, only moments where you realise you haven't practiced enough — and that distinction is what makes great arcade games so persistently satisfying to improve at.

With ${formatPlayers(players)} plays and a ${rating.toFixed(1)}/5 rating, ${title} has clearly connected with players who appreciate tight, well-crafted arcade design. Use fullscreen, commit to improvement rather than luck, and aim for a new personal best every session.`,
    controls: [
      { key: 'Arrow Keys / WASD', action: 'Move / Navigate' },
      { key: 'Space / Z', action: 'Shoot / Jump / Primary action' },
      { key: 'X / Shift', action: 'Secondary action / Bomb / Power-up' },
      { key: 'Enter', action: 'Start / Confirm' },
      { key: 'P / Esc', action: 'Pause' },
    ],
    howToPlay: [
      'Spend your first run learning the game\'s fundamental rhythm — what spawns when, where threats appear, how the scoring system rewards different actions. Survival in this run matters less than observation.',
      'Prioritise staying alive over maximising score in early sessions. Once you understand the mechanics fully, optimising for points comes naturally without conscious effort.',
      'Learn the timing window for your primary action. In most arcade games, precise timing — shooting at the exact right moment, jumping at the apex of a platform — consistently outperforms continuous, unconsidered button-pressing.',
      'Study the patterns. Arcade games are built around repeatable, learnable sequences. What appears chaotic on run one becomes predictable and manageable by run ten.',
    ],
    tips: [
      'Arcade mastery comes from repetition and deliberate analysis. Every run that ends poorly teaches you something specific about what to do differently — treat losses as data.',
      'High scores in most arcade games reward risk-taking. Aggressive positioning that scores more often beats cautious survival that scores less.',
      'Fullscreen play on desktop provides the sharpest image and the most responsive keyboard input — both matter more in arcade games than in slower-paced genres.',
      'If the game has a combo or multiplier system, learn how to maintain it consistently — it typically accounts for the majority of top-tier scores and separates good players from great ones.',
    ],
  },

  'board-game': {
    extendedDescription: ({ title, rating, players }: GameInput) =>
      `Board games carry centuries of accumulated design wisdom: every rule serves a purpose, every mechanic creates meaningful decisions, and the deepest experiences emerge from simple systems with sophisticated strategic possibilities. ${title} brings that tradition to the browser in full, offering the intellectual satisfaction of traditional board game strategy without needing a physical set, an opponent in the same room, or the time required to set up, play, and put away.

Playing ${title} online preserves everything essential about the game — the rules, the strategic depth, the competitive tension — in a format that's accessible in seconds from any device. The browser implementation handles the bookkeeping automatically, letting you focus entirely on the decisions that actually matter: where to move, what to prioritise, when to attack and when to defend.

${formatPlayers(players)} players have already discovered the appeal of ${title} in this format, and its ${rating.toFixed(1)}/5 rating reflects consistent quality in both the underlying game design and the browser adaptation. Whether you're a veteran of the genre or encountering this game for the first time, expect a thoughtful and genuinely satisfying competitive experience.`,
    controls: [
      { key: 'Left Click', action: 'Select piece / Place token / Confirm move' },
      { key: 'Right Click', action: 'Deselect / Cancel current action' },
      { key: 'Drag & Drop', action: 'Move pieces across the board' },
      { key: 'Scroll Wheel', action: 'Zoom in / out on the board' },
    ],
    howToPlay: [
      'Read the rules or work through the tutorial before your first competitive game — board games are built on specific rule sets that are essential to understand before meaningful play begins.',
      'Use your first game to learn what each action does and what the winning conditions look like in practice, rather than trying to win immediately. Understanding beats strategy in the early stages.',
      'Observe how the computer opponent or experienced players make decisions — well-implemented AI often demonstrates efficient strategies and opening principles worth studying.',
      'Think at least two to three moves ahead. Board games consistently punish purely reactive play; planning for future board states is the fundamental skill that separates strong players from weak ones.',
    ],
    tips: [
      'Control the centre of the board in spatial games — central positions provide more options and limit your opponent\'s flexibility simultaneously.',
      'Learn the opening principles for this specific game. Strong openings exist in almost every board game and are worth understanding early in your development.',
      'Don\'t underestimate defensive play. Blocking your opponent\'s plans and denying their resources is often as strategically valuable as advancing your own position.',
      'Play multiple games in sequence to build intuition. Board game strategy becomes genuinely instinctive with experience, and the pattern recognition that emerges is difficult to acquire any other way.',
    ],
  },

  'dress-up': {
    extendedDescription: ({ title, rating, players }: GameInput) =>
      `Dress-up games are a creative outlet at their best — a space to experiment with fashion, colour, proportion, and personal style without constraint or consequence. ${title} offers exactly that freedom: a wardrobe full of carefully designed options, a canvas to work with, and no single correct answer. The appeal is in the creative latitude to build looks that range from everyday elegance to full fantasy, mixing genres and aesthetics in ways that real-world fashion rarely allows.

Great dress-up games succeed through variety, quality of assets, and genuine creative freedom, and ${title} delivers on all three. Whether your instinct runs toward classic elegance, bold contemporary streetwear, period costume, fantastical invention, or something entirely unexpected, the tools exist here to realise it. The wardrobe is deep enough that no two players are likely to land on identical results.

With ${formatPlayers(players)} players having explored the collection and a ${rating.toFixed(1)}/5 rating confirming the overall quality, ${title} is worth spending genuine creative time with rather than treating as a quick click-through experience.`,
    controls: [
      { key: 'Left Click', action: 'Select and apply clothing / accessories' },
      { key: 'Drag & Drop', action: 'Position items on the character' },
      { key: 'Right Click / Bin Icon', action: 'Remove item / Undo last change' },
      { key: 'Category Buttons', action: 'Switch between clothing sections' },
      { key: 'Colour Swatches', action: 'Change item colour (where available)' },
    ],
    howToPlay: [
      'Browse through all available clothing categories before committing to any single item — exploring the full wardrobe often reveals pieces that completely change your initial concept in an interesting direction.',
      'Build from the base outfit (top and bottom, or a single dress/jumpsuit) outward, adding accessories, footwear, and finishing details around a clear foundation rather than adding everything simultaneously.',
      'Use the remove or undo function liberally — the best combinations in dress-up games frequently emerge from trying pairings that initially seem unlikely.',
      'Think about colour harmony as you build. Monochromatic looks (varying shades of one colour) and complementary colour pairs (opposites on the colour wheel) both tend to create visually cohesive results.',
    ],
    tips: [
      'Unexpected combinations consistently produce the most interesting and memorable looks — don\'t dismiss items because they seem mismatched at first glance.',
      'Layer accessories with restraint. Multiple pieces competing for attention in the same area of the outfit create visual noise; selective accessorising usually reads better.',
      'Colour theory applies directly: analogous colours (neighbours on the wheel) feel harmonious and safe; complementary colours (opposites) feel bold and intentional. Both are valid depending on the look.',
      'Step back and assess the complete outfit — head to toe — before finishing. Proportion and silhouette across the whole figure matter as much as any individual piece.',
    ],
  },

  driving: {
    extendedDescription: ({ title, rating, players }: GameInput) =>
      `Car games capture one of gaming's most satisfying sensations: the controlled chaos of high speed, the precision required at a corner apex, and the satisfaction of a clean lap or a well-executed overtake. ${title} delivers that experience directly in your browser — the full thrill of competitive driving without any of the usual friction of downloads or accounts.

Driving games reward genuine technical discipline. The difference between a good lap and a great one almost always comes down to braking points — specifically, understanding when to lift off and settle the car before a corner rather than braking while already turning. ${title} gives you the physics system to work with; the task is discovering the racing line for yourself through practice and observation. That process of continuous refinement, where each lap teaches you something the previous one couldn't, is what makes driving games persistently engaging beyond their initial novelty.

With ${formatPlayers(players)} players having taken the wheel and a ${rating.toFixed(1)}/5 rating confirming the quality of the driving model, ${title} is worth the time investment required to get genuinely fast. Desktop with keyboard controls is the recommended setup for precision play.`,
    controls: [
      { key: 'Up Arrow / W', action: 'Accelerate' },
      { key: 'Down Arrow / S', action: 'Brake / Reverse' },
      { key: 'Left / Right Arrows (A/D)', action: 'Steer left / right' },
      { key: 'Space', action: 'Handbrake (tight hairpin turns)' },
      { key: 'R', action: 'Reset / Respawn car at last checkpoint' },
      { key: 'Esc', action: 'Pause / Return to menu' },
    ],
    howToPlay: [
      'Get familiar with how the car handles at different speeds before pushing for fast times — understanding the difference between understeer (car going wide) and oversteer (rear sliding) helps you correct problems instinctively.',
      'Brake before corners, not during them. Entering a turn at the right speed with a stable car is significantly more effective than braking mid-corner and unsettling the chassis.',
      'Follow the racing line: approach each corner from the outside, hit the apex (inside edge) at the correct point, and exit wide to maximise the speed you carry onto the following straight.',
      'Use the handbrake (Space) specifically for very tight hairpin turns where conventional braking doesn\'t scrub enough speed to make the corner.',
      'If you spin out or go off-track, use the reset key to get back to the last checkpoint quickly rather than trying to drive back from a compromised position.',
    ],
    tips: [
      'Smooth, gradual inputs consistently beat aggressive ones. Gentle steering corrections and progressive braking produce faster, more consistent results than sharp, sudden inputs.',
      'Learn the track layout on the first lap before trying for times — knowing what\'s ahead removes the cognitive load of surprise and lets you focus entirely on execution.',
      'The racing line is the single highest-value skill in any driving game. Cornering through the apex correctly is faster than any straight-line speed advantage.',
      'Carry too much speed into a corner and you\'ll run wide every time. The art of fast driving is managing entry speed so that the exit — and the acceleration out of it — is clean.',
    ],
  },

  jigsaw: {
    extendedDescription: ({ title, rating, players }: GameInput) =>
      `Jigsaw puzzles have an enduring appeal that no other format replicates: the meditative focus of searching for the right piece among many similar ones, the growing satisfaction as the image slowly reveals itself section by section, and the quiet accomplishment of placing the final piece. ${title} brings that complete experience to the browser — all the benefits of a physical puzzle without the setup time, the lost pieces, or the storage problem.

Browser jigsaws have practical advantages over physical ones that are easy to underestimate. You can zoom in closely on the source image at any point for reference. You can rearrange the piece area freely without pieces falling off the table. And rotating pieces — often the most tedious part of physical jigsaws — requires only a single click. ${title} makes good use of these affordances to create a jigsaw experience that's genuinely more comfortable than a physical equivalent of comparable complexity.

With ${formatPlayers(players)} completions and a ${rating.toFixed(1)}/5 rating, it's a proven favourite in this category. Set aside some focused, unhurried time and let the image reveal itself at its own pace.`,
    controls: [
      { key: 'Left Click', action: 'Select a puzzle piece' },
      { key: 'Drag & Drop', action: 'Move pieces around the play area' },
      { key: 'Right Click / R', action: 'Rotate selected piece' },
      { key: 'Scroll Wheel', action: 'Zoom in / out on the board' },
      { key: 'Space / Button', action: 'View full reference image' },
    ],
    howToPlay: [
      'Sort all edge pieces first and assemble the border before touching any interior pieces. The border gives you a clear, fixed frame that anchors every subsequent section.',
      'Once the border is complete, group remaining pieces loosely by colour region, distinctive pattern, or texture. Even rough groupings dramatically reduce the search time for each piece.',
      'Reference the source image frequently by zooming in on specific sections — texture differences, shadow gradients, and fine detail that aren\'t obvious at full scale become clear at higher zoom levels.',
      'Work on one visually distinct area of the image at a time — a patch of sky, a brightly coloured object, a clearly defined edge — rather than trying to place random pieces across the whole puzzle.',
    ],
    tips: [
      'Sort edge pieces every time without exception. Building the border first pays consistent dividends throughout the entire puzzle.',
      'Colour sorting before placement is the highest-leverage preparation step — even grouping into five or six rough colour buckets eliminates the majority of unnecessary searching.',
      'Look for distinctive pieces with unusual shapes or strong, unique patterns first. These anchor pieces are easier to place and establish reference points for surrounding sections.',
      'If you\'re stuck on a section, step away from the puzzle for a few minutes. A fresh perspective after a short break reliably reveals piece matches that weren\'t apparent after prolonged staring.',
    ],
  },

  multiplayer: {
    extendedDescription: ({ title, rating, players }: GameInput) =>
      `Multiplayer games add a dimension that solo experiences fundamentally cannot replicate: the unpredictability of human opponents. Every session of ${title} is different because the players you face make different decisions, take different risks, develop different counter-strategies, and adapt in ways that no AI can genuinely simulate. That variability is precisely what makes competitive games persistently engaging — there is always something new to encounter, always a player better than you to learn from, and always an outcome that wasn't determined before you started.

${title} represents the current standard for browser multiplayer: quick entry into live games, smooth real-time performance, and a skill ceiling that rewards consistent practice without creating an insurmountable barrier for newcomers. The most important early skill isn't mechanical precision — it's map awareness and decision-making under pressure, both of which develop naturally with experience.

With ${formatPlayers(players)} players active and a ${rating.toFixed(1)}/5 rating confirming sustained quality, the player base is engaged and the game has proven itself through genuine competitive play. Learn the fundamentals, find your competitive edge, and iterate.`,
    controls: [
      { key: 'WASD / Arrow Keys', action: 'Move character' },
      { key: 'Mouse Movement', action: 'Aim / Look around' },
      { key: 'Left Click', action: 'Attack / Shoot / Primary action' },
      { key: 'Right Click', action: 'Secondary action / Aim down sights' },
      { key: 'Space', action: 'Jump / Dash' },
      { key: 'E / F', action: 'Interact / Pick up items' },
      { key: 'Tab', action: 'Scoreboard / Leaderboard' },
    ],
    howToPlay: [
      'Learn the map layout as your first priority — understanding terrain, spawn locations, high-traffic corridors, and flanking routes gives you a meaningful advantage over players who are still figuring out where things are.',
      'Start your first sessions conservatively: observe what experienced players do in different situations before committing to an aggressive playstyle that relies on skills you haven\'t yet built.',
      'Positioning and decision-making matter more than raw mechanical speed in most multiplayer formats. Playing smart from a good position consistently beats playing fast from a bad one.',
      'Understand and prioritise the objectives. Many multiplayer games are won through objective control and positioning, not raw kill counts — focusing exclusively on eliminations often loses games.',
      'Adapt your approach based on what\'s working in each specific session. The best players adjust their strategy in real time; rigid plans that ignore what\'s actually happening on the map consistently fail.',
    ],
    tips: [
      'Constant movement is your primary survival tool. A moving target is dramatically harder to hit than a stationary one, and most multiplayer games reward active positioning.',
      'Learn spawn patterns and predictable player routes. Anticipating where opponents will appear puts you a step ahead in every engagement, turning reactive play into proactive control.',
      'Prioritise positioning over kill-chasing. A strong map position with no kills is frequently worth more than aggressive kills taken from a vulnerable spot.',
      'Watch how you die and extract a lesson from each death — position, timing, a disadvantageous matchup — rather than attributing it to luck. Almost every death in a well-designed multiplayer game was avoidable.',
    ],
  },

  puzzles: {
    extendedDescription: ({ title, rating, players }: GameInput) =>
      `Puzzle games occupy a unique position in gaming — they are inherently satisfying in a way that is immediately recognisable but difficult to articulate. The moment a solution clicks into place after genuine mental effort produces a specific, lasting pleasure that goes beyond typical feedback loops. ${title} delivers exactly that: well-designed puzzles with fair challenge curves that respect your intelligence and reward genuine thinking over trial and error.

What makes ${title} particularly worth your time is what makes all good puzzle games worth theirs: every solution has internal logic, and the joy of discovering that logic through observation and experimentation is the entire point. You will rarely need external guidance — the design will lead you to the solution if you engage with it carefully enough. Dead ends in good puzzle games are teaching moments, not failures.

With ${formatPlayers(players)} players and a ${rating.toFixed(1)}/5 rating, the quality of the puzzle design has been validated across a broad audience with diverse problem-solving approaches. Take your time, resist the urge to rush, and enjoy the process of working toward each solution.`,
    controls: [
      { key: 'Left Click', action: 'Select / Activate element' },
      { key: 'Drag & Drop', action: 'Move pieces or objects' },
      { key: 'Arrow Keys', action: 'Navigate or move (puzzle-dependent)' },
      { key: 'Z / Ctrl+Z', action: 'Undo last move' },
      { key: 'R', action: 'Restart current puzzle level' },
      { key: 'Esc', action: 'Pause / Return to level select' },
    ],
    howToPlay: [
      'Read the objective at the start of each level before making any moves — understanding precisely what success looks like shapes every subsequent decision and prevents wasted effort.',
      'Study the puzzle from a distance before touching anything. Look for patterns, fixed constraints, and the relationships between elements. This initial observation step consistently reduces time-to-solution.',
      'Work backwards from the goal state when genuinely stuck. Ask "what would need to be true immediately before the puzzle is solved?" and then work toward creating that precondition.',
      'Use the undo function liberally — most puzzle games provide it specifically to encourage free experimentation. Curiosity is more valuable than caution in puzzle design.',
      'If you are completely stuck after sustained effort, step away for a few minutes. Solutions very often emerge after a short break — distance from the problem allows a fresh perspective that continuous staring prevents.',
    ],
    tips: [
      'Resist acting immediately. Spending thirty seconds studying a puzzle layout before making any move almost always reduces the total time required to solve it.',
      'When an undo function exists, use it constantly and experimentally. The ability to reverse mistakes turns each session into a low-stakes exploration rather than a careful, slow commitment.',
      'Start from constraints. Fixed elements and boundary conditions define where you have freedom to act — identifying what cannot change shows you where to focus.',
      'If one approach isn\'t working after multiple genuine attempts, switch strategies entirely. Good puzzle design always has a clean, intended solution — if yours is messy, you\'re likely approaching it from the wrong angle.',
    ],
  },

  shooting: {
    extendedDescription: ({ title, rating, players }: GameInput) =>
      `Shooting games are the genre of precision — every shot, every position chosen, and every engagement decision is an exercise in accuracy and tactical awareness under pressure. ${title} brings that challenge to the browser with a level of responsiveness and depth that holds its own against dedicated downloads. Accurate aim is learnable, good positioning is learnable, and game sense develops with time — ${title} gives you the environment to build all three.

The skill curve in ${title} is real but navigable. Early play teaches you the map layout and how the weapons feel. Sustained play allows you to start making deliberate decisions about positioning and engagement timing rather than simply reacting. The gap between a new player and an experienced one in ${title} is measurable but bridgeable — which is exactly how it should be.

With ${formatPlayers(players)} players competing and a ${rating.toFixed(1)}/5 rating confirming the quality of the shooting mechanics, ${title} has built a clear reputation for delivering a satisfying, skill-respecting experience. A stable connection and desktop setup will extract the most from it.`,
    controls: [
      { key: 'WASD / Arrow Keys', action: 'Move' },
      { key: 'Mouse Movement', action: 'Aim cursor / Look direction' },
      { key: 'Left Click', action: 'Shoot / Fire primary weapon' },
      { key: 'Right Click', action: 'Aim down sights / Zoom' },
      { key: 'R', action: 'Reload' },
      { key: 'Space', action: 'Jump' },
      { key: 'Shift / Ctrl', action: 'Sprint / Crouch' },
    ],
    howToPlay: [
      'Prioritise cover and positioning over aggressive forward movement in early sessions. Being shot from an unexpected angle is the most common source of early deaths and is almost entirely preventable.',
      'Learn the effective range of each available weapon. Every weapon has a distance at which it performs best — engineering fights at that specific range is a fundamental skill.',
      'Control your fire rate deliberately. Holding the trigger continuously often reduces accuracy significantly compared to short, controlled bursts at the optimal cadence for each weapon.',
      'Reload when you are safely behind cover, not when a threat is approaching. Entering any engagement with a partially empty magazine is a disadvantage that\'s trivial to avoid with good habits.',
      'Use audio cues as positional information — footsteps, reload sounds, and weapon reports from offscreen all carry data about where opponents are before they\'re visible.',
    ],
    tips: [
      'Aim for centre mass reliably before attempting headshots. A chest hit that connects is worth more than a missed headshot, and consistent torso aim builds the fundamentals that headshots require.',
      'Move while engaging when the weapon accuracy allows it. A moving target is harder to track, and the accuracy penalty for movement is manageable in most shooting game formats.',
      'Use cover as an active tool: peek, fire, return to cover, and repeat. Prolonged exposure while shooting from the open is consistently punished.',
      'Map knowledge is worth as much as aim. Knowing the high-traffic areas, common camping spots, and flanking routes puts you in the right positions where mechanical skill can be applied effectively.',
    ],
  },

  sports: {
    extendedDescription: ({ title, rating, players }: GameInput) =>
      `Sports games translate the energy, competition, and spectacle of athletics into an interactive medium — and the best ones capture not just the mechanics of the sport but the feeling of it: the anticipation before a decisive moment, the satisfaction of a perfectly executed play, and the frustration of a near-miss. ${title} achieves that translation well, giving you a sporting experience that feels authentic and reactive without requiring any physical ability.

Browser sports games share the core appeal of dedicated console titles: skill compounds with practice, competitive matches sustain engagement, and a well-timed play at the right moment is as satisfying here as anywhere. The difference in quality between a thoughtful, positioned player and one who relies on instinct alone is usually visible within a few minutes — which means the ceiling for improvement is real and worth working toward.

${title} has been played ${formatPlayers(players)} times with a ${rating.toFixed(1)}/5 rating — consistent evidence of a game that succeeds at what sports titles are supposed to do. Get the controls down first, then focus on the positioning and timing that separate good players from exceptional ones.`,
    controls: [
      { key: 'Arrow Keys / WASD', action: 'Move player / Navigate' },
      { key: 'Space / Z', action: 'Shoot / Kick / Jump / Primary action' },
      { key: 'X / Ctrl', action: 'Pass / Tackle / Secondary action' },
      { key: 'Shift', action: 'Sprint / Speed boost' },
      { key: 'Enter', action: 'Confirm / Start / Select' },
    ],
    howToPlay: [
      'Learn the primary action button (usually Space or Z) first — in most sports games this handles the most important skill-expressive moment: the shot, the kick, the swing, or the jump.',
      'Position yourself ahead of the play rather than reacting to it — getting to the right place before the action develops is the mark of an experienced player in any sport format.',
      'Timing is the defining skill in sports games. Well-timed actions produce measurably better results than held buttons, and learning the specific timing windows in ${title} is the highest-leverage skill to develop.',
      'Play defence with the same attention you bring to offence. Undefended opponents find easy opportunities that cancel out all the effort put into creating scoring chances at the other end.',
    ],
    tips: [
      'Good positioning consistently beats fast reactions. Anticipate where the ball or action is going rather than tracking where it currently is.',
      'Timing your primary action — the shoot, kick, or swing — is always more effective than pressing it continuously. Every sports game has a timing window; find it.',
      'Defence and positioning out of possession are undervalued. Conceding points from poor defensive shape cancels out all offensive creativity.',
      'Use space intelligently. Spreading out in possession gives you more passing options; intelligent coverage out of possession reduces the angles available to the opponent.',
    ],
  },

  strategy: {
    extendedDescription: ({ title, rating, players }: GameInput) =>
      `Strategy games are the thinking person\'s genre — they reward planning, resource discipline, and the ability to see multiple moves ahead of your current position. ${title} exemplifies what makes strategy games so persistently engaging: complex decisions with meaningful downstream consequences, systems that interact in non-obvious ways, and a skill ceiling that deepens the more time you invest.

Every resource allocated, every unit positioned, and every technology pursued shapes the game\'s eventual outcome in ways that accumulate over time. The best strategy games — and ${title} earns a place in that category — create webs of interdependent decisions and let you navigate them at your own pace. Unlike reaction-speed genres, pure strategic quality determines the winner here: thinking carefully almost always beats acting quickly.

With ${formatPlayers(players)} players and a ${rating.toFixed(1)}/5 rating, ${title} has demonstrated consistent quality across a player base that knows the genre well. Take your time, build deliberately, and look for the decisive moment when your accumulated advantages can be converted into victory.`,
    controls: [
      { key: 'Left Click', action: 'Select unit / building / option' },
      { key: 'Right Click', action: 'Issue move / attack order to selected unit' },
      { key: 'Scroll Wheel', action: 'Zoom map in / out' },
      { key: 'Middle Mouse / Arrow Keys', action: 'Pan the map view' },
      { key: 'Ctrl + Number', action: 'Assign units to control groups' },
      { key: 'Space', action: 'Jump to recent alert or event' },
    ],
    howToPlay: [
      'Invest in your economy before building combat forces. In virtually every strategy game, early economic investment pays compounding dividends — a stronger economy produces a larger and better-equipped army later.',
      'Scout the map early and maintain reconnaissance throughout the game. Information about your opponent\'s position, composition, and strategy is the most valuable resource in any strategic contest.',
      'Learn the counter-relationships between unit types. Strategy games are almost universally built on rock-paper-scissors-style counters — knowing what beats what is a prerequisite for informed decision-making.',
      'Don\'t overextend. Controlling territory or committing forces beyond what you can effectively defend is consistently punished; a smaller, secure position is always preferable to a larger, vulnerable one.',
      'Adapt your strategy based on what your opponent is actually doing. Rigid plans that don\'t account for enemy actions fail reliably in the mid-game when the opponent\'s intentions become clear.',
    ],
    tips: [
      'Economy first, without exception. A player with more resources almost always wins a prolonged game — everything else flows from production capacity.',
      'Scouting is an active skill, not an afterthought. Players who maintain map awareness make categorically better decisions at every stage of the game.',
      'Micro-manage your critical units during decisive engagements — focus fire on priority targets, protect fragile units, use terrain — these small decisions in individual fights swing large battles.',
      'Don\'t wait indefinitely for the perfect moment to act. Strategy games punish passivity; if you\'re ahead in resources or position, converting that advantage into decisive action is almost always the right choice.',
    ],
  },

  other: {
    extendedDescription: ({ title, rating, players }: GameInput) =>
      `${title} is a creative browser game that defies easy categorisation — which is frequently a reliable signal of something genuinely original. Games that blend genre conventions, introduce unconventional mechanics, or approach familiar ideas from unexpected angles tend to be the most memorable entries in any catalogue, and ${title} earns its place among them through something that's difficult to define but immediately apparent when you start playing.

What makes ${title} worth your time is the same quality that makes any excellent game worth playing: the experience it creates is specific to itself. It doesn\'t succeed because it perfectly executes a familiar formula — it succeeds because it has its own logic, its own rhythms, and its own kind of satisfaction. Approaching it with an open mind and genuine curiosity will serve you far better than trying to map it onto games you already know.

${formatPlayers(players)} players have collectively given it a ${rating.toFixed(1)}/5 rating, which speaks to consistent quality regardless of which genre box it fits or doesn\'t fit into. Take a few minutes to understand its mechanics, and let the game itself tell you what it\'s trying to do.`,
    controls: [
      { key: 'Left Click / Mouse', action: 'Primary interaction' },
      { key: 'Arrow Keys / WASD', action: 'Move / Navigate' },
      { key: 'Space', action: 'Jump / Confirm / Primary action' },
      { key: 'Esc / P', action: 'Pause / Menu' },
    ],
    howToPlay: [
      'Read any tutorial or instruction screen carefully at the start — games with unique mechanics benefit most from an initial orientation that conventional categories can\'t provide.',
      'Experiment freely in early sessions to understand how the game responds to different actions. Discovery is part of the experience.',
      'Look for in-game hints, prompts, or visual cues when unsure what to do next — most well-designed games have guidance embedded in the environment itself.',
      'Be patient with mechanics you haven\'t encountered before. Novel games reward persistence and curiosity over prior gaming experience.',
    ],
    tips: [
      'Approach the game without preconceptions. If it doesn\'t follow familiar patterns, that\'s deliberate design — work with it rather than against it.',
      'Experiment and explore freely — unusual games frequently have surprising mechanics and depth waiting to be uncovered by curious players.',
      'Look for environmental cues and interface hints when stuck, rather than assuming the solution requires blind trial and error.',
      'Play in fullscreen for the best visual experience and to ensure the entire game canvas is visible and accessible.',
    ],
  },
};

/** Get content template for a category, falling back to 'other' */
export function getGameContent(category: string): GameContentTemplate {
  return GAME_CONTENT[category] ?? GAME_CONTENT['other'];
}
