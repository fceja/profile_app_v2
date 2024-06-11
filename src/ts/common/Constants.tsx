// define page paths
const ROOT_PATH = "";
const PAGE_VALUES = Object.freeze({
    HOME: "",
    GALLERY: "gallery",
    CONTACT: "contact",
});

export const PAGE_PATHS = Object.freeze({
    HOME_PAGE: `${ROOT_PATH}/${PAGE_VALUES.HOME}`,
    GALLERY_PAGE: `${ROOT_PATH}/${PAGE_VALUES.GALLERY}`,
    CONTACT_PAGE: `${ROOT_PATH}/${PAGE_VALUES.CONTACT}`,
});
