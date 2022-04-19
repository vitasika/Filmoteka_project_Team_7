import { refs } from "../refs/refs.js";

const BASE_TREILER_URL = "https://www.youtube.com/embed/";

function videoFrameCreate(key) {
    
    const cardString = `

                    <iframe 
                        width="560" 
                        height="315" 
                        src="${BASE_TREILER_URL}${key}" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                `;
    refs.modalTrailerFraim.insertAdjacentHTML('beforeend', cardString)
};

function videoFrameClean() {
    refs.modalTrailerFraim.innerHTML = '';
};

export { videoFrameCreate, videoFrameClean };