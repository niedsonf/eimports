import axios from "axios";

const URL = 'http://localhost:8080'

export class WebServer {

    static async GetSellers() {
        const response = await axios.get(`${URL}/sellers`, {
            auth: {
                username: 'admin',
                password: 'root',

            },
        })

        return response.data
    }
}