import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID WITpUz7nGVwmu2FpJb6uOy-yoRARPNYzstkw6WARTo8",
    },
});
