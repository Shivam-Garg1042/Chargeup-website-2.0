
import {galleryItems} from "./GalleryData.tsx";
import DesktopGallery from "./DesktopGallery.tsx";


export default function GalleryWrapper() {
    return (
      <>
        <DesktopGallery items={galleryItems} />
        {/* <MobileGallery items={galleryItems} /> */}
      </>
    );
  };
  
 