import PropTypes from 'prop-types';
import { GalleryWrapper, Column, PhotoItem } from './photogallery.style';

const PhotoGallery = ({ photos, columns = 7 }) => {
    const columnPhotos = Array.from({ length: columns }, () => []);

    // Distribute photos across columns
    photos.forEach((photo, index) => {
        const columnIndex = index % columns;
        columnPhotos[columnIndex].push(photo);
    });

    return (
        <GalleryWrapper>
            {columnPhotos.map((column, colIndex) => (
                <Column key={colIndex}>
                    {column.map((photo, index) => (
                        <PhotoItem key={index}>
                            {photo?.src && typeof photo.src === 'string' ? (
                                <img
                                    src={photo.src}
                                    alt={photo.alt || `Photo ${index + 1}`}
                                />
                            ) : (
                                <div className="placeholder">Invalid Image</div>
                            )}
                        </PhotoItem>
                    ))}
                </Column>
            ))}
        </GalleryWrapper>
    );
};

PhotoGallery.propTypes = {
    photos: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string.isRequired,
            alt: PropTypes.string,
        })
    ).isRequired,
    columns: PropTypes.number,
};

export default PhotoGallery;