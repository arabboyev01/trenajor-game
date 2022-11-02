import React, { useContext, useState } from "react";
import UserContext from "./userContext";

const UserContextProvider = (props: any) => {

    const userCtx = useContext(UserContext);
    const [id, setId] = useState(userCtx.sportTypeId);

    const handleChangeSportId = (id: number) => {
        setId(id);
    };

    return (
        <UserContext.Provider
            value={{
                sportTypeId: id,
                changeSportTypeId: handleChangeSportId,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
