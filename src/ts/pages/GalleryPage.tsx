import { lazy, Suspense } from "react";

import "@scss/pages/GalleryPage.scss";
import Loading from "@common/components/Loading";
import { imageData } from "@content/GalleryContent"

const ImageGallery = lazy(() => import("react-image-gallery"));

const MyImageGallery = () => {
    return (
        <Suspense fallback={<Loading />}>
            <main className="app-react-image-gallery mt-3 mb-3">
                <ImageGallery items={imageData} />
            </main>
        </Suspense>
    );
};

export default MyImageGallery;
