import Img1 from '../Images/161559a.jpg';
import Img2 from '../Images/161559.jpg';
import Img3 from '../Images/161573.jpg';
import '../Components/HeaderJsx1';
import '../Components/Comp-Css/HeaderCss1.css';

export default function Header() {
    return (
        // <div>Header1</div>
        //< !--Slideshow container-- >
        <div class="container">
            <h2>Activate Carousel with JavaScript</h2>
            <div id="myCarousel" class="carousel slide">
                {/* <!-- Indicators --> */}
                <ol class="carousel-indicators">
                    <li class="item1 active"></li>
                    <li class="item2"></li>
                    <li class="item3"></li>
                    <li class="item4"></li>
                </ol>

                {/* <!-- Wrapper for slides --> */}
                <div class="carousel-inner" role="listbox">

                    <div class="item active">
                        {/* <img src="img_chania.jpg" alt="Chania" width="460" height="345"> */}
                        <img src={Img1} alt="Chania" width={'400px'} height={'400px'} />


                        <div class="carousel-caption">
                            <h3>Chania</h3>
                            <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
                        </div>
                    </div>

                    <div class="item">
                        {/* <img src="img_chania2.jpg" alt="Chania" width="460" height="345"> */}
                        <img src={Img2} alt="Chicago" width={'400px'} height={'400px'} />

                        <div class="carousel-caption">
                            <h3>Chania</h3>
                            <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
                        </div>
                    </div>

                    <div class="item">
                        {/* <img src="img_flower.jpg" alt="Flower" width="460" height="345"> */}
                        <img src={Img3} alt="New York" width={'400px'} height={'400px'} />
                        <div class="carousel-caption">
                            <h3>Flowers</h3>
                            <p>Beautiful flowers in Kolymbari, Crete.</p>
                        </div>
                    </div>

                    <div class="item">
                        <img src="img_flower2.jpg" alt="Flower" width="460" height="345" />
                        <div class="carousel-caption">
                            <h3>Flowers</h3>
                            <p>Beautiful flowers in Kolymbari, Crete.</p>
                        </div>
                    </div>

                </div>

                {/* <!-- Left and right controls --> */}
                <a class="left carousel-control" href="#myCarousel" role="button">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" role="button">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>

        // Findiing ways to add inpage javascript in React.
        // https://betterprogramming.pub/4-ways-of-adding-external-js-files-in-reactjs-823f85de3668
        // https://hackernoon.com/how-to-add-script-tags-in-react



    )
}

// ==========================








