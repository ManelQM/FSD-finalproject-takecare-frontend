import React, {useState, useEffect} from "react";
import {publicationsReq} from "../../../services/apiCalls";
import {useDispatch, useSelector} from "react-redux"; 
import {addSearch, cleanSearch,searchPublicationData} from "./searchPublicationsSlice";
import "./SearchPublications.css"; 

const SearchPublications = () => {
    const [criteria, setCriteria] = useState("");
    const dispatch = useDispatch();
    const publicationsRdx = useSelector(searchPublicationData);

    const inputHandler = (e) => {
        setCriteria(e.target.value);
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
            return () => clearTimeout(debounce);
        }
    }, [criteria, dispatch]);

    return (
        <div className="searchPublicationsDesign">

        <input name="criteria" placeholder="search for publications" onChange={(e) => inputHandler(e)}/>
           {
            publicationsRdx && publicationsRdx.publications && publicationsRdx.publications.length > 0 &&

            <div className="publicationsShowcase">
                {
                    publicationsRdx.publications.map (publication => {
                        return(
                            <div key={publication.id}>
                                {publication.title}
                            </div>
                        )
                    })
                }

            </div>
           }
        </div>
    )
}

export default SearchPublications; 