const List = () => {
    return (
        <div>
            <div className="flex flex-row mx-20 border-b border-[#797979]/40">
                <p className="p-5">BAR</p>
                <p className="p-5">BREWER</p>
                <p className="p-5">PRODUCT</p>
            </div> 
            <div className="flex flex-row mx-20 justify-between">
                <div className="flex flex-col">
                    <p className="pb-3 px-20 pt-20 border-b border-[#797979]/40">Filter</p>
                    <ul className="py-5 px-20">
                        <li>Beer</li>
                        <li>Gin</li>
                        <li>Wine</li>
                    </ul>
                </div>
                <div className="grid grid-cols-3 gap-32 p-20">
                    <img src="src/img/list-product.png" alt="product list" />
                    <img src="src/img/list-product.png" alt="product list" />
                    <img src="src/img/list-product.png" alt="product list" />
                    <img src="src/img/list-product.png" alt="product list" />
                    <img src="src/img/list-product.png" alt="product list" />
                    <img src="src/img/list-product.png" alt="product list" />
                </div>
            </div>
        </div>
    )
}

export default List