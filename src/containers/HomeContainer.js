// container
    // connnect redux with react
import { connect } from "react-redux";
// this will connect to react and redux
import { addToCart, removeToCart } from "../Services/Actions/action";
// import react-redux, action and component
import HomeTwo from "../Components/HomeTwo";

// use mapStateToProps
const mapStateToProps = (state) =>({
    // data:state.cartItems  
})

// use mapDispatchToProps
const mapDispatchToProps = (dispatch) =>({
    // we define a function that will calling from react component
    addToCartHandler:data=>dispatch(addToCart(data)),
    removeToCartHandler:data=>dispatch(removeToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeTwo)



// export default HomeTwo;

// container
    // connnect redux with react
    // import react-redux, action and component
    // use mapDispatchToProps
    // use mapStateToProps