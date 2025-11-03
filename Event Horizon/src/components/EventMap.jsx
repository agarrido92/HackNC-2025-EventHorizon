import { useState } from 'react'
import './EventMap.css'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function EventMap() {
    //event map markers
    const markers = [
        {
            id: '1',
            name: 'Annual Tech Summit 2024',
            description: 'Join the brightest minds in technology as they discuss the future of AI, cloud computing, and more. A must-attend for tech enthusiasts and professionals.',
            date: '2024-10-26',
            time: '09:00 AM',
            location: 'San Francisco, CA',
            organizer: 'TechCorp',
            imageUrl: 'https://picsum.photos/seed/tech/1200/800',
            attendees: 450,
            capacity: 500,
            lat: 37.7749,
            lng: -122.4194
        },
        {
            id: '2',
            name: 'Downtown Art & Music Festival',
            description: 'Experience a vibrant celebration of local culture with live music, art installations, food trucks, and family-friendly activities all weekend long.',
            date: '2024-09-15',
            time: '12:00 PM',
            location: 'Austin, TX',
            organizer: 'ArtBeat Collective',
            imageUrl: 'https://picsum.photos/seed/music/1200/800',
            attendees: 1203,
            capacity: 2000,
            lat: 30.2672,
            lng: -97.7431
        },
        {
            id: '3',
            name: 'Coastal Cleanup Day',
            description: 'Make a difference in our community by joining us for the annual coastal cleanup. Help protect marine life and keep our beaches beautiful.',
            date: '2024-09-21',
            time: '08:00 AM',
            location: 'Miami, FL',
            organizer: 'Ocean Guardians',
            imageUrl: 'https://picsum.photos/seed/beach/1200/800',
            attendees: 88,
            capacity: 150,
            lat: 25.7617,
            lng: -80.1918
        },
        {
            id: '4',
            name: 'Gourmet Food Truck Rally',
            description: 'A foodie paradise! Sample a wide variety of delicious cuisines from the city\'s best food trucks. Live music and seating areas available.',
            date: '2024-09-28',
            time: '05:00 PM',
            location: 'New York, NY',
            organizer: 'StreetEats Inc.',
            imageUrl: 'https://picsum.photos/seed/food/1200/800',
            attendees: 670,
            capacity: 1000,
            lat: 40.7128,
            lng: -74.0060
        },
            {
            id: '5',
            name: 'Starlight Movie Night: Classic Cinema',
            description: 'Enjoy a classic film under the stars in Central Park. Bring a blanket, some snacks, and enjoy a magical evening. Film starts at sundown.',
            date: '2024-09-20',
            time: '08:00 PM',
            location: 'New York, NY',
            organizer: 'City Parks Foundation',
            imageUrl: 'https://picsum.photos/seed/movie/1200/800',
            attendees: 250,
            capacity: 400,
            lat: 40.785091,
            lng: -73.968285
        },
        {
            id: '6',
            name: 'Morning Yoga in the Park',
            description: 'Start your weekend with a refreshing and energizing yoga session suitable for all levels. Connect with nature and your inner self.',
            date: '2024-09-21',
            time: '09:30 AM',
            location: 'San Francisco, CA',
            organizer: 'ZenFlow Yoga',
            imageUrl: 'https://picsum.photos/seed/yoga/1200/800',
            attendees: 45,
            capacity: 100,
            lat: 37.783,
            lng: -122.443
        },
        {
            id: '7',
            name: 'Spark Hackathon 2025',
            description: 'Spend your day with old and new friends coding at East Carolina University.',
            date: '2025-03-01',
            time: '09:30 AM',
            location: 'Greenville, NC',
            organizer: 'Association for Computing Machinery',
            imageUrl: 'https://picsum.photos/seed/computer/1200/800',
            attendees: 50,
            capacity: 75,
            lat: 35.613,
            lng: -77.366
        },
    ];

    return (
    <div className="map-wrapper">
      <div className="map-window">
        <MapContainer
          center={[35.613, -77.366]}
          zoom={13}
          className="leaflet-map"
          scrollWheelZoom={true}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {markers.map((marker) => (
            <Marker key={marker.id} position={[marker.lat, marker.lng]}>
              <Popup>
                <div className="popup-content">
                  <h3>{marker.name}</h3>
                  <p>{marker.date} · {marker.time}</p>
                  <p>{marker.location}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  )
}