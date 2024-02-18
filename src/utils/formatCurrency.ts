export default function formatCurrency(value: number): string {
    const suffixes = ["", "K", "M", "B", "T"];
    const suffixNum = Math.floor(Math.log10(value) / 3);
    const shortValue = (value / Math.pow(10, suffixNum * 3)).toFixed(2);

    if (value === 0) return "0";
    if (suffixNum === 0) return value.toString();

    return shortValue.replace(/\.0+$/, "") + suffixes[suffixNum];
}
