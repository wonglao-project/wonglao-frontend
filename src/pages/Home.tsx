import {Link} from 'react-router-dom'
import MapComp from '../components/MapComp'

interface IMenu {
    href: string
    text: string
    imgSrc: string
    customClassname?: string
}

const menu: IMenu[] = [
    {
        href: '/content',
        text: "BAR",
        imgSrc: 'src/img/bar.png',
        customClassname: 'left-[33%]'
    },
    {
        href: '/content',
        text: "BREWER",
        imgSrc: 'src/img/brewer.png',
        customClassname: 'left-[15%]'
    },
    {
        href: '/content',
        text: "PRODUCT",
        imgSrc: 'src/img/product.png',
        customClassname: 'left-[10%]'
    },
]

const Home = () => {
    return (
        <div>
            <header>
                <img src="src/img/banner.png" alt="banner" />
            </header>
            <main>
                <div className="flex flex-row">
                    <div className='m-20 w-[50%] h-[500px]'>
                        <MapComp />
                    </div>       
                    <div className="m-20 w-[50%]">
                        <h3>INFO</h3>
                        <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reprehenderit quisquam doloribus repellendus fugit sapiente esse necessitatibus, nihil voluptate quod aspernatur quos sint optio, consequuntur quia dignissimos aperiam nostrum veritatis?</p>
                    </div>
                </div>
                <div className="flex flex-row m-20 justify-between">
                    {
                        menu.map(({href, imgSrc, text, customClassname}) => (
                            <div key={imgSrc} className="relative">
                                <Link to={href}>
                                    <img src={imgSrc} alt="bar" />
                                    <p className={`absolute text-6xl font-extralight text-white top-[45%] ${customClassname ?? ''}`}>{text}</p>
                                </Link>
                            </div>
                        ))
                    }
                    
                </div>
            </main>
            <footer >
                <p>FOOTER</p>
            </footer>
        </div>
    )
}

export default Home
