import { useAuth0 } from '@auth0/auth0-react'
import { useMutation } from 'react-query'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type createRequest = {
    auth0Id: String,
    email: String
}

export const createMyUserRequest = () => {
    const { getAccessTokenSilently } = useAuth0();

    const useCreateMyUser = async (formData: createRequest) => {
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/create-user`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })

        if(!response.ok) {
            throw new Error("Something went wrong");
        }

        return response.json();
    }

    const { mutateAsync: useCreateRequest, isLoading, isError, isSuccess } = useMutation(useCreateMyUser);

    if(isError) {
        console.log("Something went wrong")
    }
    if(isSuccess) {
        console.log("Something went wrong")
    }

    return { useCreateRequest, isLoading}
}