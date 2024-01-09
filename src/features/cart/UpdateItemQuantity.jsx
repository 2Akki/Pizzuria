import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreaseItemQuantity, increaseItemQuantity } from "./CartSlice";

// eslint-disable-next-line react/prop-types, no-unused-vars
function UpdateItemQuantity({pizzaId,currentQuantity=0,diabled}) {
    const dispatch = useDispatch();
    console.log("pizzaId")
    console.log(pizzaId,currentQuantity)
    return (
        <div className="flex items-center gap-2 md:gap-3">
            <Button type="round" onClick={()=>{
                console.log("currentQuantity",currentQuantity)
                if(!diabled){
                dispatch(increaseItemQuantity(pizzaId))
                }
            }}>
            +
            </Button>
             <span className="text-sm font-semibold">{currentQuantity}</span> 
            <Button type="round" onClick={()=>{
                if(!diabled){
                    dispatch(decreaseItemQuantity(pizzaId))
                }
               
            }}>
            -
            </Button>
        </div>
    )
}

export default UpdateItemQuantity
