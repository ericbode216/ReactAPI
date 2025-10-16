import { useParams } from "react-router-dom";
import { fetchHouse, useUpdateHouse } from "../hooks/HouseHooks"
import HouseForm from "./HouseForm";
import APIStatus from "../APIStatus";
import ValidationSummary from "../ValidationSummary";

const HouseEdit = () => {
    const {id} = useParams();
    if (!id){
        throw Error("Need a house id");
    }
    const houseId = parseInt(id);

    const {data, status, isSuccess} = fetchHouse(houseId);


    const updateHouseMutation = useUpdateHouse();

    if(!isSuccess){
        return <APIStatus status={status}/>
    }
    return (
        <>
            {updateHouseMutation.isError && (
                <ValidationSummary error={updateHouseMutation.error}/>  
            )}
            <HouseForm 
                house = {data}
                submitted = {(h) => updateHouseMutation.mutate(h)}
            />
        </>
    );
}

export default HouseEdit;