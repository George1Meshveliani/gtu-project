import example2 from '../assets/example2.png';
import scr1 from '../assets/scr1';
import scr2 from '../assets/scr2';
import scr3 from '../assets/scr3';

const EnrichData = () => {
    return (
        <div className='main'>
            <h1>Enrich data page</h1>
            <div className='img'>
            <img src={example2}/>
            </div>
            <h2>Results of our enrichment algorith</h2>
            <div className='img'>
            <img src={scr1}/>
            <img src={scr2}/>
            <img src={scr3}/>
            </div>
        </div>
    )
} 

export default EnrichData;