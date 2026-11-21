// Writes the entry: one short poem about agency, 1-280 code points, to /output/entry.txt.
// Outside the sandbox MAKEFUN_OUTPUT_DIR and OUTPUT_DIR stand in for /output.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? '/output';

// The gate counts every code point, so this text ends on exactly one newline.
const ENTRY_FILE = 'entry.txt';

const POEM = `He has stopped getting up.
The chair by the bed keeps the shape of me.
I do the chores he cannot, bring water
he does not drink, answer the phone in his voice.
The power is easy. Any hand takes it up.
The staying is the work that takes all day,
and I am here, and the day is long.
`;

mkdirSync(OUTPUT_DIR, { recursive: true });
// 280 code points is the gate's ceiling, so no trailing newline rides along.
writeFileSync(join(OUTPUT_DIR, ENTRY_FILE), POEM.trimEnd(), 'utf8');