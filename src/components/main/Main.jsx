import { Card } from "../card/Card"
import { CardList } from "../cardList/CardList"
import { Search } from "../Search/Search"
import "./Main.css"

const Main =()=>{
    return(
        <main>
            <div className="main-header">
                <p>Product:</p>
                <Search/>
            </div>
            <CardList/>
        </main>  
    )
}

export default Main