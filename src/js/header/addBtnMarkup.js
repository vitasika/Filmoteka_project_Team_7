const headerContainerRef = document.querySelector('.header-container');

export default function addBtnMarkup() {
  headerContainerRef.insertAdjacentHTML(
    'beforeend',
    `
          <div class="btn-wrapper">
              <button type="button" class="header-btn btn btn--current">Watched</button>
              <button type="button" class="btn">Watchlist</button>
          </div>
          `,
  );
}
