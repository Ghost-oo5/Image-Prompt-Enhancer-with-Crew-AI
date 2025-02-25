export const copyToClipboard = (text: string): Promise<void> => {
    return navigator.clipboard.writeText(text)
        .then(() => {
            alert("Copied to clipboard!");
        })
        .catch((err) => {
            console.error("Error copying text: ", err);
        });
}; 