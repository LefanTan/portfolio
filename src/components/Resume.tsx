import { useHistory } from "react-router-dom"
import { HomeButton } from "../App"

export const Resume = () => {
    const history = useHistory()

    return(
        <div className="bg-deep-blue w-full h-full flex justify-center items-center relative py-4">
            <HomeButton trigger={true} onClick={() => history.push('/')}/>
            <div style={{backgroundColor: 'var(--off-white)', width: `21cm`, height: '29.7cm'}}>

            </div>
        </div>
    )
}