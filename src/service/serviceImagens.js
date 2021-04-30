import { API } from "./config";

export default {
    listarPublicacoes: () => {
        return API.get("/publicacao");
    },
};
