import { Provider} from "react-redux";
import { legacy_createStore } from "@reduxjs/toolkit";

import reducers from "./reducer";
import initialState from './store';


const UserProvider = ({children}) => {
    const store = legacy_createStore(reducers, initialState);

    return <Provider store={store}>{children}</Provider>
    //children parametresi yani componentler, paglere
};

export default UserProvider;