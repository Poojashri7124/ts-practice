type Status = "idle" | "loading" | "success" | "error";

function getMessage(status: Status): string {
    switch (status) {
        case "idle":
            return "Waiting to start";

        case "loading":
            return "Loading data...";

        case "success":
            return "Data loaded successfully";

        case "error":
            return "Something went wrong";

        default:
            return "Unknown status";
    }
}

console.log(getMessage("success"));
console.log(getMessage("loading"));