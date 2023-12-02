import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";


const useWishList = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
    console.log(user?.email)
    const {refetch, data: wish = []} = useQuery({
        queryKey: ['wish', user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/wishes?email=${user.email}`);
            return res.data;
        }
    })
    return [wish, refetch];
};

export default useWishList;