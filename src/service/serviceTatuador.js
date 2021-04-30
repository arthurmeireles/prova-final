import { API } from "./config";

export default {
    listarTatuadores: () => {
        return API.get("/tatuador");
    },
};
