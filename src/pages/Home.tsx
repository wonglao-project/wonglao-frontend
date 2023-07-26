import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <header>
                <img src="src/img/banner.png" alt="banner" />
            </header>
            <main>
                <div className="flex flex-row">
                    <img className="m-20 max-w-[1000%]" src="src/img/map.png" alt="map" />       
                    <div className="m-20 max-w-[50%]">
                        <h3>INFO</h3>
                        <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reprehenderit quisquam doloribus repellendus fugit sapiente esse necessitatibus, nihil voluptate quod aspernatur quos sint optio, consequuntur quia dignissimos aperiam nostrum veritatis?</p>
                    </div>
                </div>
                <div className="flex flex-row m-20 justify-between">
                    <div className="relative">
                        <Link to={'/content'}>
                        <img src="src/img/bar.png" alt="bar" />
                        <p className="absolute text-6xl font-extralight text-white top-[45%] left-[33%]">BAR</p>
                        </Link>
                    </div>
                    <div className="relative">
                        <Link to={'/content'}>
                        <img src="src/img/brewer.png" alt="brewer" />
                        <p className="absolute text-6xl font-extralight text-white top-[45%] left-[15%]">BREWER</p>
                        </Link>
                    </div>
                    <div className="relative">
                        <Link to={'/content'}> 
                        <img src="src/img/product.png" alt="product" />
                        <p className="absolute text-6xl font-extralight text-white top-[45%] left-[10%]">PRODUCT</p>
                        </Link>
                    </div>
                    
                </div>
            </main>
            <footer >
                <p>FOOTER</p>
            </footer>
        </div>
    )
}

export default Home
