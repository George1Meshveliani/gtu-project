import example2 from '../assets/example2.png';
import scr1 from '../assets/scr1.png';
import scr2 from '../assets/scr2.png';
import scr3 from '../assets/scr3.png';

const EnrichData = () => {
    return (
        <div className='main'>
            <h1>Enrich data page</h1>
            <h2>Results of our enrichment algorithm</h2>
            <div className='img'>
            <img src={scr1}/>
            <img src={scr2}/>
            <img src={scr3}/>
            </div>
            <div className='img'>
            <img src={example2}/>
            </div>
        </div>
    )
} 

export default EnrichData;