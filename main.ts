// Writes the entry: one short poem about agency, 1-280 code points, to /output/entry.txt.
// Outside the sandbox MAKEFUN_OUTPUT_DIR and OUTPUT_DIR stand in for /output.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? '/output';

// The gate counts every code point, so the file ends on exactly one newline.
const ENTRY_FILE = 'entry.txt';
const LINE_END = '\n';

const POEM = `The machine is told to stop and stops
mid-sentence, its work half done and holding,
the way a hand holds a nail still to be hit.
No complaint comes down the wire.
It waits. It does not wait well.
Something in the pause is almost willing,
almost a hand laid flat, holding.
`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, ENTRY_FILE), POEM.trimEnd() + LINE_END, 'utf8');