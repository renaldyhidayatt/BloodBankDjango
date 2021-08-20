import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux"
import { signOut } from "../redux/action/auth.action"

function Tes(){
    const user = useSelector((state) => state.auth.user)
    
    const dispatch = useDispatch();
    const logout = useCallback(() => {
        dispatch(signOut());
    }, [dispatch])

    
    return(
        <div>
            <p>
                {user.username}
                
            </p>
            <p>
                {user.role}
            </p>
            <button onClick={logout}>
                sign out
            </button>
        </div>
    )
}

export default Tes