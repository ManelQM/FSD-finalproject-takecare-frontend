import React from "react";
import {publicationsReq} from "../../../services/apiCalls";
import {useDispatch, useSelector} from "react-redux"; 
import {addSearch, cleanSearch,searchPublicationData} from "./searchPublicationsSlice";
import "./SearchPublications.css"; 

const SearchPublications = () => {
    const [criteria, setCriteria] = useState("");
    const dispatch = useDispatch();
    const {publications} = useSelector(searchPublicationData);

    const inputHandler = (e) => {
        setCriteria(e.targe.value);
    };

    useEffect (() => {
        if (criteria === "") {
            dispatch(cleanSearch({ publications: [] }));
        } else {
            const debounce = setTimeout (() => {
                publicationsReq(criteria)
                .then((res) => {
                    dispatch (addSearch ({
                        publications: res.data.results
                    }));
                })
                .catch((error) => console.log(error));
            }, 350);
            return () => clearTiemout(debounce);
        }
    }, [criteria, dispatch]);

    return (
        <div className="searchPublicationsDesign">
            
        </div>
    )
}

export default SearchPublications; 