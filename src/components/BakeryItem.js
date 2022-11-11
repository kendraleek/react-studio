// TODO: create a component that displays a single bakery item

// export default function MyApp() {
//     let pastry = bakeryData[index]
function BakeryItem(props) {
    // let pastry = bakeryData[index]
    return (
        <div>
            <h1>{props.details.name}</h1>
            <img src={props.details.image} />
            <p>{props.details.description}</p>
            <p>{props.details.price}</p>
            <button onClick={() => {
                props.addToCart(props.details)}
                
            }>
                Add to Cart
            </button>
            {/* <CartButton /> */}
        </div>
    )
  }
  export default BakeryItem;