import React from 'react'

function Contact() {
    return (
        <div className="container" class="about-website">
        <div className="row">
            <div className="col-md-12">
                <h4>About</h4>
                <hr/>
                <h6 className="text-dark mb-1">
                    We are a bunch of music lovers whose daily routine is to 'Eat, Listen to Music, Sleep and Repeat'.
                    We generally are agnostics but listening to the music of Raja and ARR made us believe that they are the 'GODs'.
                </h6>
                <div className="unorderedlist">
                    <ul>
                        <li style={{fontSize:"30px"}}>Ilayaraja</li>
                        <h6 className="text-dark mb-1">
                            Ilaiyaraaja, is an Indian film composer, conductor-arranger, singer and lyricist who works in the Indian film industry, predominantly in Tamil. 
                            Widely regarded as one of the greatest Indian music composers, he is often credited for introducing Western musical sensibilities in the South Indian film musical mainstream.
                            He has composed more than 7,000 songs, provided film scores for more than 1,000 movies and performed in more than 20,000 concerts. Ilaiyaraaja is nicknamed "Isaignani" (musical genius) and is often referred to as "Maestro", amongst others by the Royal Philharmonic Orchestra, London.
                            <a href="https://en.wikipedia.org/wiki/Ilaiyaraaja" rel="stylesheet"> Know more</a>
                        </h6>
                        <li style={{fontSize:"30px"}}>AR Rahman</li>
                        <h6 className="text-dark mb-1">
                        Allah Rakha Rahman[1] (About this soundpronunciation (help·info); born A. S. Dileep Kumar; 6 January 1967) is an Indian film composer, 
                        record producer, singer and songwriter who works predominantly in Tamil and Hindi films. In 2010, the Indian government awarded him the Padma Bhushan, 
                        the nation's third-highest civilian award.[2] Among Rahman's awards are six National Film Awards, two Academy Awards, two Grammy Awards, a BAFTA Award, 
                        a Golden Globe Award, fifteen Filmfare Awards and seventeen Filmfare Awards South.
                        <a href="https://en.wikipedia.org/wiki/A._R._Rahman" rel="stylesheet"> Know more</a>
                        </h6>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Contact;
