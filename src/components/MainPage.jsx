import '../style.css'
import logo from '../assets/logo.png'
import mainPhoto from '../assets/mainPhoto.jpeg'
import background from '../assets/background.png'
import picBlank from '../assets/picBlank.png'
import photoAuthor from '../assets/photoAuthor.png'

const MainPage = () => {
    return(

        <>
            {/* <div className="backgroundCore">
                <img src={background} alt="" className='backgroundImage'/>
            </div> */}
            <div className="wrapper">
                <div className="headerContainer">
                    <img src={logo} alt="" className='headerLogo' />
                    <div className="testBlock">Block</div>
                </div>

                <div className="mainContainer">
                    <div className="promoBlock">
                        <div className="bigText">
                            <p>Звук</p>
                            <p>Экран</p>
                            <p>Свет</p>
                        </div>
                        <div className="smallText">
                            <p>Тут небольшой текст о том какие мы пиздатые и ваще крутые прям оч крутые, надо придумать наполнение этому блоку или нахуй его удалить</p>
                        </div>
                    </div>

                    <div className="wrapPhoto">

                        <img src={mainPhoto} alt="" className='mainPhoto'/>
                    </div>

                    <div className="subHero">
                        <p>Придумать текст о нас</p>
                        <p>Мы в своем познании настолько преисполнились, что как будто уже сто триллионов миллионов лет работаем на триллионах и триллионах таких же планет, как эта Земля, нам этот мир абсолютно понятен, мы ищем здесь только одного - покоя, умиротворения и вот этой вот гармонии от слияния с бесконечно вечным, от созерцания великого фрактального подобия и от этого замечательного всеединства существа с бесконечно вечным </p>
                    </div>
                </div>
            </div>

            <div className="ourService">
                <div className="wrapper">
                    <div className="serviceContainer">
                        <div className="serviceCaption">
                            <p>Наши услуги</p>
                        </div>
                        <div className="services">
                            <p>Свет</p>
                            <p>Звук</p>
                            <p>Экран</p>
                            <p>Микрофоны</p>
                            <p>Трансляции</p>
                            <p>Спецэффекты</p>
                            <p>3D отрисовка</p>
                        </div>
                    </div>

                </div>
            </div>


            <div className="wrapper">
                <div className="workContainer">
                    <div className="ourWorks">
                        <p className="workCaption">
                            Мы это сделали!
                        </p>
                        <p className="workDescription">
                            Нам нравится работать с многими замечательными людьми, и мы дейтсвительно гордимся тем, чего достигли вместе
                        </p>


                        <div className="workCardBlock">
{/* карточка */}
                            <div className="workCard">
                                <div className="picContainer">
                                    <img src={picBlank} alt="" className='picWorkCard'/>
                                </div>
                                <div className="cardDesc">
                                    <p className="cardDescCaption">100 лет Тахтамукайского района</p>
                                    <p className="cardDescTitle">5sta Family</p>
                                </div>
                            </div>
{/* конец карточки */}

                            <div className="workCard">
                                <div className="picContainer">
                                    <img src={picBlank} alt="" className='picWorkCard'/>
                                </div>
                                <div className="cardDesc">
                                    <p className="cardDescCaption">100 лет Тахтамукайского района</p>
                                    <p className="cardDescTitle">5sta Family</p>
                                </div>
                            </div>

                            <div className="workCard">
                                <div className="picContainer">
                                    <img src={picBlank} alt="" className='picWorkCard'/>
                                </div>
                                <div className="cardDesc">
                                    <p className="cardDescCaption">100 лет Тахтамукайского района</p>
                                    <p className="cardDescTitle">5sta Family</p>
                                </div>
                            </div>

                            <div className="workCard">
                                <div className="picContainer">
                                    <img src={picBlank} alt="" className='picWorkCard'/>
                                </div>
                                <div className="cardDesc">
                                    <p className="cardDescCaption">100 лет Тахтамукайского района</p>
                                    <p className="cardDescTitle">5sta Family</p>
                                </div>
                            </div>

                            <div className="workCard">
                                <div className="picContainer">
                                    <img src={picBlank} alt="" className='picWorkCard'/>
                                </div>
                                <div className="cardDesc">
                                    <p className="cardDescCaption">100 лет Тахтамукайского района</p>
                                    <p className="cardDescTitle">5sta Family</p>
                                </div>
                            </div>

                            <div className="workCard">
                                <div className="picContainer">
                                    <img src={picBlank} alt="" className='picWorkCard'/>
                                </div>
                                <div className="cardDesc">
                                    <p className="cardDescCaption">100 лет Тахтамукайского района</p>
                                    <p className="cardDescTitle">5sta Family</p>
                                </div>
                            </div>

                            <div className="workCard">
                                <div className="picContainer">
                                    <img src={picBlank} alt="" className='picWorkCard'/>
                                </div>
                                <div className="cardDesc">
                                    <p className="cardDescCaption">100 лет Тахтамукайского района</p>
                                    <p className="cardDescTitle">5sta Family</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="blockReview">
                    <div className="reviewCaption">
                        <p>Что о нас говорят</p>
                    </div>
                <div className="reviewSlider">
{/* карточка отзыва */}
                    <div className="reviewBlockCard">
                        <div className="reviewCard">
                            <div className="reviewText">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique exercitationem modi sed optio voluptatum molestias rerum dignissimos cumque ratione consequatur, unde officia aliquid quod veniam inventore, iusto pariatur eaque facere?</p>
                            </div>
                            <div className="reviewAuthor">
                                <img src={photoAuthor} alt="" />
                                <p>Иван Иванов</p>
                            </div>
                        </div>
                    </div>
                    <div className="reviewBlockCard">
                        <div className="reviewCard">
                            <div className="reviewText">
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                            </div>
                            <div className="reviewAuthor">
                                <img src={photoAuthor} alt="" />
                                <p>Иван Иванов</p>
                            </div>
                        </div>
                    </div>
                    <div className="reviewBlockCard">
                        <div className="reviewCard">
                            <div className="reviewText">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique exercitationem modi sed optio voluptatum molestias rerum dignissimos cumque ratione consequatur, unde officia aliquid quod veniam inventore, iusto pariatur eaque facere?</p>
                            </div>
                            <div className="reviewAuthor">
                                <img src={photoAuthor} alt="" />
                                <p>Иван Иванов</p>
                            </div>
                        </div>
                    </div>
{/* карточка отзыва */}
                </div>

                    

                    
                </div>
            </div>
        </>



    )
}

export default MainPage