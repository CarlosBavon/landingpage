import Image from '../images/glasses.jpeg'

function Hero () {
    return (
        <div className="hero-comp">
            <div className="card">
                <h2>/Sunglasses</h2>
                <p>French know-how with high technology lenses in order to neverbe taken by surprise when there is sharp bright sunny turn in the road.</p>
                <button className="btn">BUY 115$</button>
            </div>

            <img src={Image} className='glasses'></img>
        </div>
    )
}

export default Hero