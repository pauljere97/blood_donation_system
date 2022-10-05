
import {FiLoader} from "react-icons/fi"
import { useContext } from "react"
import { Context } from '../context/Context'


export default function LoadingScreen() {
    const { state,  } = useContext(Context)

    console.log("XXX", state)
    return (
        <div className={state.loading_screen ? "loading_screen":"loading_screen_off"}>
            <div className="loader_icon">
                <FiLoader/>
            </div>
        </div>
    )
}


// export default function AccountBalance({ navigation }) {
//     useFonts({ JosefinSans_300Light, JosefinSans_400Regular, JosefinSans_500Medium, JosefinSans_600SemiBold, JosefinSans_700Bold })
//     const countries = ["This Week", "This Month", "This Year"]
//     const { state, setState } = useContext(Context)