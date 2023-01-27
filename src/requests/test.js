import axios from "./index"

const getTask = async () => {
    try {
        return await axios.get("/task");
    } catch (error) {
        console.log(error);
    }
};

export {getTask};