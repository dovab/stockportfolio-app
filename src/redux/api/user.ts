import api from "./api";
import RegisterRequest from "../../api/requests/user/RegisterRequest";
import ActivateAccountRequest from "../../api/requests/user/ActivateAccountRequest";

const userApi = api.injectEndpoints({
    endpoints: build => ({

        // Public endpoints
        register: build.mutation<boolean, RegisterRequest>({
            query: (request) => ({
                url: '/api/public/users/register',
                method: 'POST',
                body: request,
            }),
            transformResponse: (query, meta): boolean => {
                if (!meta!.response) {
                    return false;
                }

                return 204 === meta!.response.status;
            }
        }),

        activateAccount: build.mutation<boolean, ActivateAccountRequest>({
            query: (request) => ({
                url: '/api/public/users/activate',
                method: 'POST',
                body: request,
            }),
            transformResponse: (query, meta): boolean => {
                if (!meta!.response) {
                    return false;
                }

                return 204 === meta!.response.status;
            }
        }),
    }),
});

export const { useRegisterMutation, useActivateAccountMutation } = userApi;
export default userApi;