export default function getRandomElementsFromArray<T>(
    array: T[],
    count: number
): T[] {
    const shuffled = array.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}
