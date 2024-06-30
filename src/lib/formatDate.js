export function formatTimestampIntoDate(timestamp) {
    const date = new Date(timestamp); 
    const option = {
        year: "numeric",
        month: "short",
        day: "numeric",        
    }

    return date.toLocaleDateString("en-US", option);
}
