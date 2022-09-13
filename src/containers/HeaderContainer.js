// container
// connnect redux with react
import { connect } from "react-redux";
// this will connect to react and redux
// import react-redux, action and component
import HeaderTwo from "../Components/HeaderTwo";

// use mapStateToProps
const mapStateToProps = state => ({
    data: state.cartItems
})

// use mapDispatchToProps
const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderTwo)
