import { expect, test } from "vitest";
import { isWellPlaced, isMissplaced, isNotInAnswer, tryPlayerWord } from "./forTesting";

test('Cas de démarrage #1', () => {
    expect(isWellPlaced(["d","i","c","t","i","o","n","n","a","i","r","e"],["d","i","n","o","s","a","u","r","e"])).toStrictEqual(["d","i"])
})

test('Cas de démarrage #2', () => {
    expect(isMissplaced(["d","i","c","t","i","o","n","n","a","i","r","e"],["c","o","n","f","e","t","t","i"])).toStrictEqual(["c","o","n","e","t","t","i"])
})

test('Cas de démarrage #3', () => {
    expect(isNotInAnswer(["d","i","c","t","i","o","n","n","a","i","r","e"],["d","i","n","o","s","a","u","r","e"])).toStrictEqual(["s","u"])
})

test('Cas de démarrage #4', () => {
    expect(tryPlayerWord("dictionnaire","dictionnaire")).toBe(true)
})

test('Cas de démarrage #5', () => {
    expect(tryPlayerWord("bonjour","dictionnaire")).toStrictEqual({ wellPlaced :[], missplaced:["o","n","o","r"], notInAnswer :["b","j","u"]})
})