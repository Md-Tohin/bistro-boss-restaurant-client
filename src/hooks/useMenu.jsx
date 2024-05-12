import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = (menuItem='') => {
    const [menu, setMenu] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        axios.get('/menu.json')
        .then(resp => {
            let loadedMenu = [];
            if(menuItem){
                loadedMenu = (resp.data).filter(item => item.category == menuItem);
            }
            else{
                loadedMenu = resp.data;
            }           
            setMenu(loadedMenu);
            setLoader(false);
        })
        .catch(err => {
            setLoader(false);
            console.log(err)
        });
    }, []);

    return [menu, loader];
};

export default useMenu;