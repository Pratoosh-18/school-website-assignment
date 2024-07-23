import React, { useEffect, useRef, useState } from 'react';
import galleryData from '../constants/galleryData';
import Hcomp from '../components/Gallery/Hcomp';

const GalleryPage = () => {
    const [visibleImages, setVisibleImages] = useState([]);

    const imageRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = entry.target.getAttribute('data-index');
                        setVisibleImages((prev) => [...prev, parseInt(index)]);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        imageRefs.current.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const groupedData = [];
    let tempGroup = [];

    galleryData.forEach((item) => {
        tempGroup.push(item);

        if (tempGroup.length === 3 || (tempGroup.length === 2 && tempGroup.some((i) => i.typeOfImage === 'landscape'))) {
            groupedData.push(tempGroup);
            tempGroup = [];
        }
    });

    if (tempGroup.length) groupedData.push(tempGroup);

    return (
        <div className="flex flex-wrap gap-8 p-4 mx-10 md:mx-32 mt-4">
            {groupedData.map((group, index) => (
                <div key={index} className="flex flex-wrap gap-8 w-full md:flex-nowrap">
                    {group.map((item, subIndex) => {
                        const imageIndex = index * 3 + subIndex;
                        return (
                            <div
                                key={subIndex}
                                data-index={imageIndex}
                                ref={(el) => (imageRefs.current[imageIndex] = el)}
                                className={`relative bg-cover bg-center rounded-md overflow-hidden ${group.length === 3 ? 'w-full md:w-1/3 h-[30vw]' : item.typeOfImage === 'landscape' ? 'w-full md:w-2/3 h-[30vw]' : 'w-full md:w-1/3 h-[30vw]'}`}
                                style={{ backgroundImage: visibleImages.includes(imageIndex) ? `url(${item.imageUrl})` : 'none' }}>
                                {visibleImages.includes(imageIndex) && <Hcomp heading={item.heading} text={item.text} />}
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default GalleryPage;
