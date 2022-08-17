import globeIcon from '../src/assets/globeIcon.png'
import '../src/App.css'

export default function Header(){
    return (
        <div className='header'>
            <img src={globeIcon} />
            <p className='header-text'>
                my travel journal.
            </p>
        </div>
    )
}