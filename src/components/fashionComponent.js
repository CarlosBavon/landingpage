import Card from 'react-bootstrap/Card';
import Image from '../images/Roundtree  Yorke Big  Tall Wide Leather Belt -  48 Big.jpeg'
import Gloves from '../images/gloves.jpeg'
import Phone from '../images/phone.jpeg'

function FashionComponent () {
    return(
        <div>
            <div className="product-cards">
                <Card className='card1'>
                    <Card.Img className='card-image' variant="top" src={Image}/>
                    <Card.Body>
                        <Card.Title>Black Leather Belt</Card.Title>
                    </Card.Body>
                </Card>
                <Card className='card1'>
                    <Card.Img className='card-image' variant="top" src={Phone}/>
                    <Card.Body>
                        <Card.Title>Black Phone Case</Card.Title>
                    </Card.Body>
                </Card>
                <Card className='card1'>
                    <Card.Img className='card-image' variant="top" src={Gloves}/>
                    <Card.Body>
                        <Card.Title>Black Leather Gloves</Card.Title>
                    </Card.Body>
                </Card>
               
            </div>
        </div>
    )
}

export default FashionComponent