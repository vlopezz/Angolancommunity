import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, ChevronRight, X, Camera } from 'lucide-react';

interface Album {
  title: string;
  description: string;
  coverImage: string;
  images: string[];
}

const Gallery: React.FC = () => {
  const { t } = useTranslation();
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const albums: Album[] = [
    {
      title: "Community Events",
      description: "Celebrating our vibrant community through various cultural and social events",
      coverImage: "public/img/img-community-3.jpg",
      images: [
        'public/img/communidade1.jpg',
        'public/img/comunidade2.jpg',
        ''
      ]
    },
    {
      title: "Cultural Exchange",
      description: "Bridging cultures between Angola and Romania through meaningful interactions",
      coverImage: "public/img/cover-culture.jpg",
      images: [
        'public/img/cultural1.jpg',
        'public/img/cultural2.jpg',
        'public/img/cultural4.jpg',
        'public/img/cultural5.jpg',
        'public/img/cultural6.jpg'
      ]
    },
    {
      title: "Student Life",
      description: "Capturing moments from academic life and student experiences in Romania",
      coverImage: "public/img/astropa.jpg",
      images: [
        'public/img/astropas2.jpg',
        'public/img/student.jpg',
        'public/img/juca.jpg',
        'public/img/astropas3.jpg',
        'public/img/student-alex.jpg',
      ]
    }
  ];

  const openAlbum = (album: Album) => {
    setSelectedAlbum(album);
    setCurrentImageIndex(0);
  };

  const closeAlbum = () => {
    setSelectedAlbum(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedAlbum) {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % selectedAlbum.images.length
      );
    }
  };

  const prevImage = () => {
    if (selectedAlbum) {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex - 1 + selectedAlbum.images.length) % selectedAlbum.images.length
      );
    }
  };

  return (
    <div id="gallery" className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Seção hero */}
      <div className="relative h-[40vh] bg-blue-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/20"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4">Our Gallery</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Explore our community's journey through photographs capturing memorable moments and experiences
            </p>
          </div>
        </div>
      </div>

      {/* Albums Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              onClick={() => openAlbum(album)}
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={album.coverImage}
                  alt={album.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{album.title}</h3>
                  <p className="text-white/90 text-sm">{album.description}</p>
                  <div className="flex items-center mt-4 text-white/80">
                    <Camera size={20} className="mr-2" />
                    <span>{album.images.length} photos</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedAlbum && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">
          <div className="relative w-full max-w-6xl mx-auto px-4">
            <img
              src={selectedAlbum.images[currentImageIndex]}
              alt={`${selectedAlbum.title} image ${currentImageIndex + 1}`}
              className="w-full h-[80vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors p-2 rounded-full bg-black/50"
              onClick={closeAlbum}
            >
              <X size={24} />
            </button>
            <button
              className="absolute top-1/2 left-4 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-2 rounded-full bg-black/50"
              onClick={prevImage}
            >
              <ChevronLeft size={36} />
            </button>
            <button
              className="absolute top-1/2 right-4 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-2 rounded-full bg-black/50"
              onClick={nextImage}
            >
              <ChevronRight size={36} />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
              <h3 className="text-xl font-bold mb-1">{selectedAlbum.title}</h3>
              <p className="text-white/80">
                Image {currentImageIndex + 1} of {selectedAlbum.images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;