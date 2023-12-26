import {useMutation, useQuery, useQueryClient} from "react-query";
import {PhoneActions} from "../dataActions/Phone";

export const usePhones = () => {
    const {data} = useQuery({
        queryKey: 'phones',
        queryFn: PhoneActions.getValue
    });
    return {
        phones: data,
    }
}

export const useAddNewPhone = () => {
    const {phones} = usePhones()

    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn: (phone) => {
            if (phones) {
                const newPhonesArray = phones.concat([phone])
                return PhoneActions.saveValue(newPhonesArray);
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries('phones')
        }
    });

    return {
        addNewPhone: mutate
    }
}