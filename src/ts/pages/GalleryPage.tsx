import React, { lazy, Suspense } from "react";

import "@scss/pages/GalleryPage.scss";
import Loading from "@common/components/Loading";
import { imageData } from "@content/GalleryContent"

const ImageGallery = lazy(() => import("react-image-gallery"));

const MyImageGallery: React.FC = () => {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <section className="app-react-image-gallery mt-3 mb-3">
                    <ImageGallery items={imageData} />
                </section>
            </Suspense>
        </>
    );
};

export default MyImageGallery;


