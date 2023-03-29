import useGetSingleMovie from "../../hooks/useGetSingleMovie";
import Buttons from "../../components/Buttons/Buttons";


const Viewer = ({hoveredMovie}) => {
    return(<img src={hoveredMovie.main_poster}/>)
    
}
 
export default Viewer;