import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e7ff4816be3c4c708867208b7e44bcba'
    }
})