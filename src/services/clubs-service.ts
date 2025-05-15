import * as HttpResponse from "../utils/http-helper"
import { getAllClubs } from "../repositories/clubs-repository";

export const getClubsService = async () => {
        const data = await getAllClubs();
        const response = Object.keys(data).length !== 0 ? await HttpResponse.ok(data) : await HttpResponse.noContent();
        return response;
}