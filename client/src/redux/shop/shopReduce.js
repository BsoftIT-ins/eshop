// Create shop Reducer
const shopReducer = (state=0, {type, payload})=>{
    switch (type) {
        case "INIT":
            return state;
                
        default:
            return state;
    }
};
// Export Reducer
export default shopReducer;