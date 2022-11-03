import React, { useContext, useState } from "react";
import UserContext from "./userContext";

const UserContextProvider = (props: any) => {

    const userCtx = useContext(UserContext);
    const [id, setId] = useState(userCtx.sportTypeId);
    const [values, setValues] = useState(userCtx.values);

    const handleChangeSportId = (id: number) => {
        setId(id);
    };

    const handleChangeValueOfGame = (item: number) => {
        setValues(item);
    }

    return (
        <UserContext.Provider
            value={{
                sportTypeId: id,
                changeSportTypeId: handleChangeSportId,
                values: values,
                changeValueOfGame: handleChangeValueOfGame,
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
