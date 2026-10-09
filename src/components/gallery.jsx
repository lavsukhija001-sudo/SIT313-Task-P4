
const galleryImages = [
  { image: '/deakincampus.png', caption: 'Deakin University' },
  { image: '/chitkaracampus.png', caption: 'Chitkara University' },
  { image: '/seminarroom.png', caption: 'Seminar Room' },
  { image: '/conference.png', caption: 'Conference Hall' },
  { image: '/melbournecity.png', caption: 'Melbourne City' },
  { image: '/accomodation.png', caption: 'Accommodation' },
];

function Gallery() {
  return (
    <section className="gallery">
      <h2>My Gallery</h2>

      <div className="gallery-container">
        {galleryImages.map((item) => (
          <div key={item.caption}>
            <img src={item.image} alt={item.caption} />
            <p>{item.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;