import { lazy, Suspense, useEffect, useState } from "react";

import "@scss/pages/GalleryPage.scss";
import { imageData } from "@content/GalleryContent"
import Loading from "@common/components/Loading";
import Error from "@common/components/Error";

const ImageGallery = lazy(() => import("react-image-gallery"));

const MyImageGallery = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [imgLoaded, setImgLoaded] = useState(false)

    /* checks to see if image element is loaded */
    useEffect(() => {
        const checkImgLoaded = (count: number) => {
            const imgDiv = document.querySelector('.image-gallery-center')

            if (imgDiv) {
                const imgElement = imgDiv.querySelector('img'); // Select the image within the container

                if (imgElement) {
                    if (imgElement.complete) {
                        setImgLoaded(true)
                        return
                    }
                }
            }

            /* 3 sec, 12 tries at 250ms intervals */
            if (count < 12) {
                setTimeout(() => checkImgLoaded(count + 1), 250);
            } else {
                console.warn('error loading image')
                setIsError(true)
            }
        }

        checkImgLoaded(0)

    }, [])

    /* if image element loaded, make image gallery element visible */
    useEffect(() => {
        if (imgLoaded) {
            const imgGalleryDiv = document.querySelector('.image-gallery') as HTMLElement

            if (imgGalleryDiv) {
                imgGalleryDiv.style.display = "block"
                setIsLoading(false)
            }

        }

    }, [imgLoaded])

    return (
        <main className="app-react-image-gallery mt-3">
            <>
                {isLoading && <Loading className="image-gallery" />}
                {isError && <Error />}
                <Suspense fallback={<Loading className="image-gallery" />}>
                    <ImageGallery items={imageData} />
                </Suspense>
            </>
        </main>
    );
};

export default MyImageGallery;

