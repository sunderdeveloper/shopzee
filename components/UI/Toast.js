import { SiTicktick } from "react-icons/si";
import { RiCloseCircleLine } from "react-icons/ri";
const Toast = ({show, message, type}) =>{

    // if(!show) return null

    const styles = type === "success" ? "text-green-500 bg-green-100/50 border border-green-300" : "text-red-500 bg-red-100/50 border border-red-300"
    return <>
        <div className={`fixed bottom-10 right-10 z-10 flex items-center py-2 px-6 gap-2 rounded-lg cursor-pointer transition-all duration-300 origin-bottom ${styles} ${show ? "opacity-100 translate-y-0 scale-y-100" : "translate-y-24 opacity-0 scale-y-0"}`}>
        {type === "success" ? <SiTicktick />: <RiCloseCircleLine /> }
        <p>{message}</p>
       </div> 
       
    </>
}
export default Toast