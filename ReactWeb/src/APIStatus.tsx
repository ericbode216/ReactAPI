type Args = {
    status: "success" | "error" | "pending";
};

const APIStatus = ({status}: Args) => {
    switch (status){//only want to display when not a success
        case "error":
            return <div>Error communicating with the data backend</div>
        case "pending":
            return <div>Loading...</div>
        default:
            throw Error("Unknown API status");

    }
}

export default APIStatus;