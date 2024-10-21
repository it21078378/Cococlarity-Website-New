import React, { useEffect, useState } from 'react';
import { Galleria } from 'primereact/galleria';
import { PhotoService } from '../service/PhotoService';

const Header = () => {

    const [images, setImages] = useState(null);

    useEffect(() => {
        PhotoService.getImages().then((data) => setImages(data));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ height:'600px', width: '100%', display: 'block' }} />;  // Reduced height here
    };

    return (
        <div className="header-container" style={{ width: '100%', marginBottom: '50px' }}>  {/* Added marginBottom */}
            <Galleria
                value={images}
                style={{ width: '100%', height: '600px' }}  // Full width and reduced height
                changeItemOnIndicatorHover
                showThumbnails={false}
                showIndicators
                item={itemTemplate}
            />
            
        </div>
    );
}

export default Header;
