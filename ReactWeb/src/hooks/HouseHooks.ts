import { useQuery } from "@tanstack/react-query";
import config from "../config";
import { House } from "../types/houses";
import axios, { AxiosError } from "axios";

const fetchHouses = () => {
    return useQuery<House[], AxiosError>({
        queryKey: ["houses"],
        queryFn: () =>
            axios.get(`${config.baseApiUrl}/houses`).then((resp) => resp.data),
    });
};
const fetchHouse = (id: number) => {
    return useQuery<House, AxiosError>({
        queryKey: ["houses", id],
        queryFn: () =>
            axios.get(`${config.baseApiUrl}/house/${id}`).then((resp) => resp.data),
    });
};

export default fetchHouses;
export {fetchHouse}