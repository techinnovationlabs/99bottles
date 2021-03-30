const bottleStanza = ["bottle of beer", "bottles of beer"];
const secondStanza = ["Go to the store and buy some more,", "Take one down and pass it around,"];
const wallStanza = "on the wall";

export default function generateLyrics(value: number): string {
    const initialValue: number = value;
    if (value < 0) {
        return "Invalid value";
    }
    let lyrics = "";
    while (value >= 0) {
        lyrics = lyrics + generate(value, initialValue);
        value--;
    }
    return lyrics;
}

function capitalize(s: any) {
    if (typeof s !== 'string') return s;
    return s.charAt(0).toUpperCase() + s.slice(1);
};

export function generate(value: number, initialValue: number): string {
    let phraseOne;
    let phraseTwo;
    const isOne = value === 1;
    const isZero = value === 0;
    if (isZero) {
        phraseOne = "no more";
        phraseTwo = initialValue;
    } else if (isOne) {
        phraseOne = value;
        phraseTwo = "no more";
    } else {
        phraseOne = value;
        phraseTwo = value - 1;
    }

    return `\n${capitalize(phraseOne)} ${isOne ? bottleStanza[0] : bottleStanza[1]} ${wallStanza}, ${phraseOne} ${isOne ? bottleStanza[0] : bottleStanza[1]}.\n${isZero ? secondStanza[0] : secondStanza[1]} ${phraseTwo} ${value - 1 === 1 ? bottleStanza[0] : bottleStanza[1]}.`;
};
