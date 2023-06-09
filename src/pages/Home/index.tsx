import './styled.css'
import * as Styled from './styled'


const Home = () => {
    return (
        <Styled.Home>
            <div className="home-information">
                <h3> SO, YOU WANT TO TRAVEL TO </h3>
                <h1> SPACE </h1>
                <p>  Let's face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!</p>
            </div>
            <div className="home-button">
                <button className="btn-explore">
                    EXPLORE
                </button>
            </div>
        </Styled.Home>
    )   
}

export default Home