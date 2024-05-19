import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user, loader} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: isAdmin, isPending: isAdminLoading} = useQuery({
        queryKey: [user?.email, "isAdmin"],
        enabled: !loader,
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/users/${user?.email}`);
            // console.log("inside use admin hooks: ", res.data);
            return res.data.admin;
        }
    });
    return [isAdmin, isAdminLoading];
};

export default useAdmin;