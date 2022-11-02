import { createContext } from "react";
const UserContext = createContext({
    sportTypeId: 0,
    changeSportTypeId: (id: number) => {},
});
export default UserContext;
