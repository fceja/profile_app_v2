import { lazy, Suspense } from "react";

import "@scss/pages/GalleryPage.scss";
import { imageData } from "@content/GalleryContent"
import Loading from "@common/components/Loading";

const ImageGallery = lazy(() => import("react-image-gallery"));

const MyImageGallery = () => {
    return (
        <main className="app-react-image-gallery mt-3">
            <Suspense fallback={<Loading className="image-gallery" />}>
                <ImageGallery items={imageData} />
            </Suspense>
        </main>
    );
};

export default MyImageGallery;
