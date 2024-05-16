// import { useEffect, useState } from "react";
// import useAxiosPublic from "./useAxiosPublic";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = (menuItem='') => {
    // const [menu, setMenu] = useState([]);
    // const [loader, setLoader] = useState(true);
    // const axiosPublic = useAxiosPublic();

    // useEffect(() => {
    //     axiosPublic.get('/api/menu')
    //     .then(resp => {
    //         let loadedMenu = [];
    //         if(menuItem){
    //             loadedMenu = (resp.data).filter(item => item.category == menuItem);
    //         }
    //         else{
    //             loadedMenu = resp.data;
    //         }           
    //         setMenu(loadedMenu);
    //         setLoader(false);
    //     })
    //     .catch(err => {
    //         setLoader(false);
    //         console.log(err)
    //     });
    // }, [menuItem, axiosPublic]);

    const axiosPublic = useAxiosPublic();
    const {data: menu=[], isPending: loader, refetch} = useQuery({
        queryKey: ["menu"],
        queryFn: async () => {
            const res = await axiosPublic.get("/api/menu");
            let loadedMenu = [];
            if(menuItem){
                loadedMenu = (res.data).filter(item => item.category == menuItem);
            }
            else{
                loadedMenu = res.data;
            }
            return loadedMenu;
        }
    });

    return [menu, loader, refetch];
};

export default useMenu;