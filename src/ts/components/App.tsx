import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes } from "react-router-dom";

import "@scss/Global.scss"
import { PAGE_PATHS } from "@common/Constants"
import ContactPage from "@pages/ContactPage";
import HomePage from "@pages/HomePage";
import GalleryPage from "@pages/GalleryPage";
import PageLayout from "@pages/layout/PageLayout";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to={PAGE_PATHS.HOME_PAGE} />} />
      <Route path={PAGE_PATHS.HOME_PAGE} element={
        <PageLayout>
          <HomePage />
        </PageLayout>
      } />
      <Route path={PAGE_PATHS.GALLERY_PAGE} element={
        <PageLayout>
          <GalleryPage />
        </PageLayout>
      } />
      <Route path={PAGE_PATHS.CONTACT_PAGE} element={
        <PageLayout>
          <ContactPage />
        </PageLayout>
      } />
    </Routes>
  );
}

export default App;
