import React, { useState, useEffect } from "react";
import { HelpCircle, ChevronLeft, ChevronRight, Plus } from "lucide-react";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  //  const imagesPerView = 1;

  // Load images from localStorage OR demo images if empty
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("uploadedImages"));
    if (saved && saved.length > 0) {
      setImages(saved);
    }
  }, []);

  // Add new image(s)
  const handleAddImage = (e) => {
    const files = Array.from(e.target.files);
    const newImages = [];

    files.forEach((file, index) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImage = {
          id: Date.now() + index,
          url: reader.result,
          alt: `Uploaded image ${images.length + index + 1}`,
        };
        newImages.push(newImage);

        if (newImages.length === files.length) {
          const updated = [...images, ...newImages];
          setImages(updated);
          localStorage.setItem("uploadedImages", JSON.stringify(updated));
        }
      };
      reader.readAsDataURL(file);
    });
  };

const manualImages = [
  {
    id: "manual-1",
    url: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Beach View",
  },
  {
    id: "manual-2",
    url: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Mountain View",
  },
  {
    id: "manual-3",
    url: "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
    alt: "Forest Path",
  },
  {
    id: "manual-4",
    url: "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
    alt: "Forest Path",
  },
];

const allImages = [...manualImages, ...images];

//   const handlePrevious = () => {
//     setCurrentIndex((prev) => Math.max(prev - 1, 0));
//   };

//   const handleNext = () => {
//     const maxIndex = allImages.length - imagesPerView;
//     setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
//   };

//  const translateValue = (currentIndex * 100) / imagesPerView;


const handlePrevious = () => {
  setCurrentIndex((prev) =>
    prev === 0 ? allImages.length - 1 : prev - 1
  );
};

const handleNext = () => {
  setCurrentIndex((prev) =>
    prev === allImages.length - 1 ? 0 : prev + 1
  );
};



// translate calculation
// const translateValue = currentIndex * 11;
const translateValue = currentIndex * (100 / allImages.length);

console.log(handlePrevious);
console.log(handleNext);



  return (
    <div className="w-full max-w-2xl bg-gray-700/50 backdrop-blur-sm rounded-3xl shadow-2xl border border-gray-700/50 overflow-hidden mx-auto mt-10">
      {/* Header */}

      {/* Controls */}
      <div className="flex items-center justify-between px-3 pb-5 ">
        <button className="  w-7 h-7 mb-15 mt-7 mr-3 rounded-full border-amber-50 flex items-center justify-center hover:bg-gray-600/50 transition-colors">
          <HelpCircle className="w-5 h-5 text-gray-400 " />
        </button>
        <button className="px-9 py-4 rounded-[15px] bg-black text-white font-medium shadow-lg mr-50 ">
          Gallery
        </button>

        {/* Add Image Button */}
        <label className="flex items-center gap-2 px-3 py-2  rounded-full bg-gray-600/50 text-white font-medium shadow-xl p-4  shadow-black/40 hover:bg-gray-900/70 transition-all cursor-pointer">
          <Plus className="w-5 h-5" />
          ADD IMAGE
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleAddImage}
            className="hidden"

          />
        </label>

        {/* Arrows */}
        <div className="flex gap-4 ">
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-black/40 shadow-lg ${
              currentIndex === 0
                ? "bg-gray-700/30 text-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:shadow-xl hover:scale-105"
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === allImages.length - 1}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-black/40 shadow-lg ${
              currentIndex >= Math.ceil(images.length / 3) - 1
                ? "bg-gray-700/30 text-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:shadow-xl hover:scale-105"
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="px-6 pb-8">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-600 ease-in-out"
            style={{
              transform: `translateX(-${translateValue}%)`,
              width: `${Math.ceil(allImages.length / 3) * 100}%`,
            }}
          >
      {allImages.map((image) => (
  <div
    key={allImages.id}
    className=" static w-1/6 p-3 flex-shrink-0 aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300"
  >
    <img
      src={image.url}
      alt={image.alt}
      className="w-full h-full object-cover rounded-xl"
    />
  </div>
))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
