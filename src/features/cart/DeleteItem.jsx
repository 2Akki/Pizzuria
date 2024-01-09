import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./CartSlice";

// eslint-disable-next-line react/prop-types
function DeleteItem({pizzaId}) {
    const dispatch = useDispatch();
    return (
        <Button type="small" onClick={()=>{
            console.log(pizzaId)
            dispatch(deleteItem(pizzaId))
        }}>
Delete
        </Button>
    )
}

export default DeleteItem
