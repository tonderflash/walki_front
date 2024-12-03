import PhotoGallery from '../components/PhotoGallery/PhotoGallery';
import SearchBar from '../components/Search/SearchBar';
import { useState } from 'react';

// const photos = Array.from({ length: 300 }, (_, index) => ({
//     src: `https://picsum.photos/${200 + (index % 5) * 50}/${150 + (index % 3) * 50}?random=${index}`,
//     alt: `Photo ${index + 1}`,
// }));
const Home = () => {
    const [photos, setPhotos] = useState([]);

    const handleSearch = async (query) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/search?q=${query}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Fetched results:', data.results);

            // Function to check if a URL is a direct image link
            const isValidImageUrl = (url) => /\.(jpeg|jpg|gif|png|webp)$/i.test(url);

            // Extract valid image URLs
            const updatedPhotos = data.results
                .map((result, index) => {
                    const url = result.url || result.data?.url; // Handle different structures
                    if (url && isValidImageUrl(url)) {
                        return {
                            src: url,
                            alt: `Photo ${index + 1}`,
                        };
                    }
                    return null; // Ignore invalid URLs
                })
                .filter((photo) => photo !== null); // Remove null entries

            console.log('Updated photos array:', updatedPhotos);
            setPhotos(updatedPhotos);
        } catch (error) {
            console.error('Error fetching photos:', error);
        }
    };

    return (
        <>
            <SearchBar onSearch={handleSearch} />
            <PhotoGallery photos={photos} />
        </>
    );
};

export default Home;