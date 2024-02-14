export default function getMultiplesOf90(start: number, end: number): number[] {
    const multiples: number[] = [];

    for (let i = start; i <= end; i += 90) {
        multiples.push(i);
    }

    return multiples;
}
