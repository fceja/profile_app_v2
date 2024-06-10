// define page paths
const ROOT_PATH = "";
const PAGE_VALUES = Object.freeze({
    HOME: "",
    GALLERY: "gallery",
});

export const PAGE_PATHS = Object.freeze({
    HOME: `${ROOT_PATH}/${PAGE_VALUES.HOME}`,
    GALLERY: `${ROOT_PATH}/${PAGE_VALUES.GALLERY}`,
});
