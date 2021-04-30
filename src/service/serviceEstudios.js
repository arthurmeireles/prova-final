import { API } from "./config";

export default {
    listarEstudios: () => {
        return API.get("/estudio");
    },
};
