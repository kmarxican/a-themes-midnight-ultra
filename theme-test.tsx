// ============================================================================
// Midnight Ultra Theme — Comprehensive Syntax Test
// ============================================================================
// This file exercises every color in the theme palette.
// Use "Developer: Inspect Editor Tokens and Scopes" to verify.
// ============================================================================

// ── Comments: Dodger Blue #428BDD (italic) ──────────────────────────────────
/* Block comment — also Dodger Blue */
/** JSDoc comment with @tags and descriptions */

// ── Strings: Forest Green #1DC116 ───────────────────────────────────────────
const greeting = "Hello, Midnight Ultra!";
const template = `Embedded ${variable} in template literal`;
const single = 'single quotes work too';
const multiline = `
  line one
  line two
  ${expression}
`;

// ── Numbers: Lavender Purple #AE81FF ────────────────────────────────────────
const integer = 42;
const float = 3.14159;
const hex = 0xFF;
const binary = 0b1010;
const octal = 0o755;
const bigint = 9007199254740991n;
const negative = -273.15;

// ── Keywords / Control Flow: Crimson Coral #E83737 ──────────────────────────
function controlFlow(input: unknown): string {
  if (typeof input === "string") {
    return input.toUpperCase();
  } else if (typeof input === "number") {
    return input.toFixed(2);
  } else {
    throw new Error("Unsupported type");
  }

  for (let i = 0; i < 10; i++) {
    console.log(i);
  }

  while (true) {
    break;
  }

  switch (input) {
    case "a":
      return "alpha";
    default:
      return "unknown";
  }

  try {
    riskyOperation();
  } catch (error) {
    console.error(error);
  } finally {
    cleanup();
  }

  return "done";
}

// ── Import / Export: Crimson #E83737 (keywords), Lavender #AE81FF (meta) ───
import { something, another } from "./module";
import DefaultExport from "./default";
export { something };
export default class ExportedClass {}
export const exportedConst = true;

// ── Variables / Parameters: Warm Amber #FFAA3E ──────────────────────────────
let mutableVariable = "changes";
const constantVariable = "fixed";
var legacyVariable = "avoid";

function doWork(
  firstParam: string,
  secondParam: number,
  optionalParam?: boolean,
  ...restParams: unknown[]
) {
  const localVar = firstParam + secondParam;
  let blockScoped = true;
  return localVar;
}

// ── Functions / Methods: Cyan #44DDDD ───────────────────────────────────────
function namedFunction(arg: string): void {
  console.log(arg);
}

const arrowFunction = (x: number): number => x * 2;

class MyClass {
  constructor(private config: Config) {}

  public instanceMethod(value: string): Promise<string> {
    return Promise.resolve(value);
  }

  private _helper(): void {
    this.instanceMethod("test");
  }

  static staticMethod(): MyClass {
    return new MyClass({});
  }

  get accessor(): string {
    return this.config.name;
  }

  set accessor(val: string) {
    this.config.name = val;
  }
}

// Function calls
namedFunction("test");
MyClass.staticMethod();
console.log("hello");
Promise.resolve(42);

// ── Classes / Types: Cyan #44DDDD (bold for class, italic for interface) ────
interface Config {
  name: string;
  version?: number;
  enabled: boolean;
}

type UnionType = string | number | boolean;
type Mapped<T> = { [K in keyof T]: T[K] };

class DerivedClass extends MyClass implements Config {
  name = "derived";
  version = 2;
  enabled = true;
}

// ── Constants / Booleans: Lavender Purple #AE81FF ───────────────────────────
const PI = 3.14159;
const MAX_RETRIES = 5;
const isEnabled = true;
const isDisabled = false;
const nothing = null;
const notDefined = undefined;
const regex = /pattern/gi;

// ── Properties: Lime Green #A6E22E ──────────────────────────────────────────
const obj = {
  propertyName: "value",
  anotherKey: 123,
  nested: {
    deepProperty: true,
  },
};

obj.propertyName;
obj.nested.deepProperty;
obj["computed" + "key"];

// ── Operators / Punctuation: Muted Gray #8FA7B8 ─────────────────────────────
const a = 1 + 2;
const b = 3 * 4;
const c = 5 / 6;
const d = 7 % 8;
const e = a === b && c !== d;
const f = x || y ?? z;
const g = typeof obj;
const h = obj instanceof MyClass;
const i = [1, 2, 3];
const j = { key: "value" };
const k = (x) => x;
const l = a ? b : c;

// ── Decorators: Lavender Purple #AE81FF ─────────────────────────────────────
@decorator
@decoratorWithArgs("arg1", "arg2")
class DecoratedClass {
  @propertyDecorator
  decoratedProperty: string;

  @methodDecorator
  decoratedMethod() {}
}

// ── JSX / React: Cyan #44DDDD ───────────────────────────────────────────────
function Component({ title, items }: Props) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <CustomComponent prop="value" />
    </div>
  );
}

// ── HTML Tags: Muted Indigo #444499 ─────────────────────────────────────────
// (Visible in .html files or JSX above)
// <div class="wrapper"><p>Hello</p></div>

// ── CSS Classes: Lime #A6E22E  │  CSS IDs: Lavender #AE81FF ────────────────
// .className { color: red; }
// #elementId { display: block; }

// ── JSON Keys (multi-level): Lime → Amber → Cyan → Crimson → Lavender ──────
// Level 0: A6E22E  │  Level 1: FFAA3E  │  Level 2: 44DDDD
// Level 3: E83737  │  Level 4: AE81FF  │  Level 5: 428BDD
const jsonData = {
  root: {
    level1: {
      level2: {
        level3: {
          level4: {
            level5: "deep",
          },
        },
      },
    },
  },
};

// ── Invalid / Error: Vivid Magenta #F92672 ──────────────────────────────────
// (Triggered by syntax errors — can't be shown in valid code)
// const bad = \xYZ;

// ── Markdown (in .md files) ─────────────────────────────────────────────────
// # Heading → Cyan #44DDDD
// **Bold** → Amber #FFAA3E (bold)
// *Italic* → Amber #FFAA3E (italic)
// `inline code` → Green #1DC116
// [link](url) → Lavender #AE81FF (underline)
// > quote → Muted Gray #8FA7B8 (italic)

// ── Diff / Git ──────────────────────────────────────────────────────────────
// Added: Forest Green #1DC116
// Deleted: Vivid Magenta #F92672
// Modified: Dodger Blue #428BDD
// Conflicted: Crimson #E83737

// ── Terminal Colors ─────────────────────────────────────────────────────────
// Black: #0A1220    │  Bright Black: #6F8497
// Red: #E83737      │  Bright Red: #F92672
// Green: #1DC116    │  Bright Green: #A6E22E
// Yellow: #FFAA3E   │  Bright Yellow: #FFD37A
// Blue: #428BDD     │  Bright Blue: #6FA6FF
// Magenta: #AE81FF  │  Bright Magenta: #C7A0FF
// Cyan: #44DDDD     │  Bright Cyan: #78FFFF
// White: #D1EDFF    │  Bright White: #FFFFFF

// ── Bracket Highlighting (nested) ───────────────────────────────────────────
// Level 1: #D1EDFF  │  Level 2: #44DDDD  │  Level 3: #A6E22E
// Level 4: #FFAA3E  │  Level 5: #AE81FF  │  Level 6: #428BDD
function bracketTest() {
  return {                    // Level 1
    items: [                  // Level 2
      {                       // Level 3
        values: (             // Level 4
          a &&                // Level 5
            (b || c)          // Level 6
        )
      }
    ]
  };
}

// ── Semantic Token Overrides ────────────────────────────────────────────────
// class → Cyan #44DDDD (bold)
// interface → Cyan #44DDDD (italic)
// number → Lavender #AE81FF
// operator → Muted Gray #8FA7B8
// parameter → Amber #FFAA3E
// property → Lime #A6E22E
// readonly → Lavender #AE81FF
// regexp → Lavender #AE81FF
// string → Green #1DC116
// variable → Amber #FFAA3E
