import generateLyrics from "./lyrics";

const initialValue = 99;

let song: string = generateLyrics(initialValue);
console.log(song);