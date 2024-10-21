import cover1 from '../assets/cover1.jpg';
import cover2 from '../assets/cover2.jpg';
import cover3 from '../assets/cover3.jpg';
import cover4 from '../assets/cover4.jpg';

export const PhotoService = {
    getData() {
        return [
            {
                itemImageSrc: cover1,
                thumbnailImageSrc: cover1,
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: cover2,
                thumbnailImageSrc: cover2,
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: cover3,
                thumbnailImageSrc: cover3,
                alt: 'Description for Image 3',
                title: 'Title 3'
            },
            {
                itemImageSrc: cover4,
                thumbnailImageSrc: cover4,
                alt: 'Description for Image 3',
                title: 'Title 3'
            }
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
};

