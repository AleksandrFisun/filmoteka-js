

const dataLocalStorage = (id) => {
  const removeQueue = document.querySelector('.removeQueue');
  const addQueue = document.querySelector('.addQueue');
  const addWatch = document.querySelector('.addWatch');
  const removeWatch = document.querySelector('.removeAddWatch');
  const inputWatch = document.querySelector('.js-watched');
  const inputQueue = document.querySelector('.js-queue');

  
  const keyWatch = 'watchResults';
  const keyQueue = 'queueResult';

  const getFilmStorage = (key) => JSON.parse(localStorage.getItem(key));


  const saveToStorage = (key, id) => {
    let storageResult = getFilmStorage(key);
    if (storageResult) {
      if (
        storageResult.length >= 1 &&
        storageResult.find(item => item === id)
      ) {
        return;
      }
      localStorage.setItem(key, JSON.stringify([...storageResult, id]));
    } else {
      localStorage.setItem(key, JSON.stringify([id]));
    }
  };

  const removeStorage = (key, id) => {
    const arrayStorage = JSON.parse(localStorage.getItem(key));
    const filterId = arrayStorage.filter(item => item !== id);
    localStorage.setItem(key, JSON.stringify(filterId));
   };

  // Проверка
  // Если в localStorage есть данные и они равны id, то кнопки в модалке не ресетятся
  const watchedResults = getFilmStorage(keyWatch);
  const checkWatchedStorage = watchedResults?.some(item => item === id);
  const queueResults = getFilmStorage(keyQueue);
  const checkQueuedStorage = queueResults?.some(item => item === id);

  if (checkWatchedStorage) {
    inputWatch.setAttribute('checked', '');
  }
  if (checkQueuedStorage) {
    inputQueue.setAttribute('checked', '');
  }

    addWatch.addEventListener('click', () => saveToStorage(keyWatch, id));
    removeWatch.addEventListener('click', () => removeStorage(keyWatch, id));
  
    addQueue.addEventListener('click', () => saveToStorage(keyQueue, id));
    removeQueue.addEventListener('click', () => removeStorage(keyQueue, id));
  
};

export { dataLocalStorage };
