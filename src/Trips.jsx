import data from '../src/data.js'
import pinIcon from '../src/assets/locationPin.png'

const trips = data.map(trip => {
    return (
        <div key={trip.id} className='trip'>
            <h2 className='trip-name'>{trip.title}</h2>
            <img className='trip-pic' src={trip.imageUrl} alt='trip pic'/>
            <div className='location-info'>
                <img src={pinIcon}
                className='icon' alt='pin icon'/>
                <div className='country'>
                    {trip.location}
                </div>
                <a className='link'href={trip.googleMapsUrl} target="_blank">
                    View on Google Maps
                </a>
            </div>
            <p className='date'>
                {trip.startDate} - {trip.endDate}
            </p>
            <p className='description'>
                {trip.description}
            </p>
        </div>
    )
})

export default function Trips(){
    return (
        <div className='trips-container'>
            {trips}
        </div>
    )
}