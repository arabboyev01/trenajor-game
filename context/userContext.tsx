import { createContext } from "react";
const UserContext = createContext({
    sportTypeId: 0,
    values: 0,
    changeSportTypeId: (id: number) => {},
    changeValueOfGame: (name: number) => {},
});
export default UserContext;
