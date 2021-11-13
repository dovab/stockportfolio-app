import api from "./api";
import TokenResponse from "../../api/responses/auth/TokenResponse";
import TokenRequest from "../../api/requests/auth/TokenRequest";

const authApi = api.injectEndpoints({
    endpoints: build => ({
        login: build.mutation<TokenResponse, TokenRequest>({
            query: (credentials) => ({
                url: '/token',
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
});

export const { useLoginMutation } = authApi;
export default authApi;