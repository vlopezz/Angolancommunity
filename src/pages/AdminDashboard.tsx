import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Edit, Trash2, Plus } from 'lucide-react';

interface ContentItem {
  id: string;
  title: string;
  content: string;
  image?: string;
}

const AdminDashboard: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('home');

  const [homeContent, setHomeContent] = useState<ContentItem[]>([
    { id: '1', title: 'Welcome', content: 'Welcome to our community', image: 'https://example.com/home-image.jpg' },
  ]);

  const [galleryImages, setGalleryImages] = useState<string[]>([
    'https://example.com/gallery-image-1.jpg',
    'https://example.com/gallery-image-2.jpg',
  ]);

  const [pageContent, setPageContent] = useState<{ [key: string]: ContentItem[] }>({
    community: [{ id: '1', title: 'Our Community', content: 'Learn about our vibrant community' }],
    aboutAngola: [{ id: '1', title: 'About Angola', content: 'Discover the beauty of Angola' }],
    aboutRomania: [{ id: '1', title: 'About Romania', content: 'Explore the rich culture of Romania' }],
  });

  const handleContentChange = (section: string, id: string, field: string, value: string) => {
    if (section === 'home') {
      setHomeContent(prev => prev.map(item => item.id === id ? { ...item, [field]: value } : item));
    } else {
      setPageContent(prev => ({
        ...prev,
        [section]: prev[section].map(item => item.id === id ? { ...item, [field]: value } : item)
      }));
    }
  };

  const handleAddContent = (section: string) => {
    const newItem: ContentItem = { id: Date.now().toString(), title: 'New Item', content: 'New content' };
    if (section === 'home') {
      setHomeContent(prev => [...prev, newItem]);
    } else {
      setPageContent(prev => ({
        ...prev,
        [section]: [...prev[section], newItem]
      }));
    }
  };

  const handleDeleteContent = (section: string, id: string) => {
    if (section === 'home') {
      setHomeContent(prev => prev.filter(item => item.id !== id));
    } else {
      setPageContent(prev => ({
        ...prev,
        [section]: prev[section].filter(item => item.id !== id)
      }));
    }
  };

  const handleAddGalleryImage = () => {
    const newImage = prompt('Enter the URL of the new gallery image:');
    if (newImage) {
      setGalleryImages(prev => [...prev, newImage]);
    }
  };

  const handleDeleteGalleryImage = (index: number) => {
    setGalleryImages(prev => prev.filter((_, i) => i !== index));
  };

  const renderContentEditor = (section: string, items: ContentItem[]) => (
    <div>
      {items.map(item => (
        <div key={item.id} className="mb-4 p-4 border rounded">
          <input
            type="text"
            value={item.title}
            onChange={(e) => handleContentChange(section, item.id, 'title', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
          />
          <textarea
            value={item.content}
            onChange={(e) => handleContentChange(section, item.id, 'content', e.target.value)}
            className="w-full mb-2 p-2 border rounded"
            rows={3}
          />
          {item.image && (
            <input
              type="text"
              value={item.image}
              onChange={(e) => handleContentChange(section, item.id, 'image', e.target.value)}
              className="w-full mb-2 p-2 border rounded"
              placeholder="Image URL"
            />
          )}
          <button onClick={() => handleDeleteContent(section, item.id)} className="text-red-500">
            <Trash2 size={20} />
          </button>
        </div>
      ))}
      <button onClick={() => handleAddContent(section)} className="mt-2 p-2 bg-blue-500 text-white rounded">
        <Plus size={20} />
        Add New Item
      </button>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="mb-6">
        <button onClick={() => setActiveTab('home')} className={`mr-2 p-2 ${activeTab === 'home' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Home</button>
        <button onClick={() => setActiveTab('gallery')} className={`mr-2 p-2 ${activeTab === 'gallery' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Gallery</button>
        <button onClick={() => setActiveTab('community')} className={`mr-2 p-2 ${activeTab === 'community' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Community</button>
        <button onClick={() => setActiveTab('aboutAngola')} className={`mr-2 p-2 ${activeTab === 'aboutAngola' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>About Angola</button>
        <button onClick={() => setActiveTab('aboutRomania')} className={`mr-2 p-2 ${activeTab === 'aboutRomania' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>About Romania</button>
      </div>

      {activeTab === 'home' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Home Page Content</h2>
          {renderContentEditor('home', homeContent)}
        </div>
      )}

      {activeTab === 'gallery' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Gallery Images</h2>
          <div className="grid grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative">
                <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-32 object-cover" />
                <button onClick={() => handleDeleteGalleryImage(index)} className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded">
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
          </div>
          <button onClick={handleAddGalleryImage} className="mt-4 p-2 bg-blue-500 text-white rounded">
            <Plus size={20} />
            Add New Image
          </button>
        </div>
      )}

      {activeTab === 'community' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Community Page Content</h2>
          {renderContentEditor('community', pageContent.community)}
        </div>
      )}

      {activeTab === 'aboutAngola' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">About Angola Page Content</h2>
          {renderContentEditor('aboutAngola', pageContent.aboutAngola)}
        </div>
      )}

      {activeTab === 'aboutRomania' && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">About Romania Page Content</h2>
          {renderContentEditor('aboutRomania', pageContent.aboutRomania)}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;