import React from 'react';
import galleryData from '../constants/galleryData';
import Hcomp from '../components/Gallery/Hcomp';

const GalleryPage = () => {
    const groupedData = [];
      let tempGroup = [];
    
      galleryData.forEach(item => {
        tempGroup.push(item);
    
        // Check if the group has reached 3 items or if it has 2 items and contains at least one landscape
        if (tempGroup.length === 3 || (tempGroup.length === 2 && tempGroup.some(i => i.typeOfImage === 'landscape'))) {
          groupedData.push(tempGroup);
          tempGroup = [];
        }
      });
    
      // Push remaining items, if any
      if (tempGroup.length) groupedData.push(tempGroup);
    
      return (
        <div className="flex flex-wrap gap-8 p-4 mx-32 mt-4">
          {groupedData.map((group, index) => (
            <div key={index} className="flex gap-8 w-full">
              {group.map((item, subIndex) => (
                <div
                  key={subIndex}
                  className={`relative bg-cover bg-center rounded-md overflow-hidden ${group.length === 3 ? 'w-1/3 h-[30vw]' : item.typeOfImage === 'landscape' ? 'w-2/3 h-[30vw]' : 'w-1/3 h-[30vw]'}`}
                  style={{ backgroundImage: `url(${item.imageUrl})` }}>
                  <Hcomp heading={item.heading} text={item.text} />
                  
                </div>
              ))}
            </div>
          ))}
        </div>
      );
    }
    

export default GalleryPage;
