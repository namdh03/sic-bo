export default function formatCurrency(value: number): string {
    const suffixes = ["", "K", "M", "B", "T"];
    const suffixNum = Math.floor(Math.log10(value) / 3);
    const shortValue = (value / Math.pow(1000, suffixNum)).toFixed(0);

    if (value === 0) return "0";
    if (suffixNum === 0) return value.toString();

    return shortValue + suffixes[suffixNum];
}
