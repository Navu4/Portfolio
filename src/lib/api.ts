export const sendContactForm = async (data: {
    name: string;
    email: string;
    message: string;
}) =>
    fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    })
        .then((res) => {
            if(!res.ok) {
                throw new Error("Failed to send message");
            }
            return res.json();
        })
        .catch((err) => {
            console.error(err);
            throw new Error("Failed to send message")
        });
