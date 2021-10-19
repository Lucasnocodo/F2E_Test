function debounce(func, delay = 1000) {
  let timer = null;

  return () => {
    let context = this;
    let args = arguments;

    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

// Debounce加分題:

/** 模擬一個模糊搜索欄位，輸入速度設為 inputSpeed, 防抖時長設為 debounceDelay
 * 若輸入速度小於防抖時長時才會呼叫 fetchData。
 * 在沒有防抖設計的情況下，每次輸入都會呼叫 fetchData ，但加入防抖後便可以在使用者
 * 暫時停止輸入後才呼叫 fetchData 可大大節省資源。
 */

const debounceDelay = 500;
const inputSpeed = 300;

let searchText = "";
let i = 0;

const fetchData = () => {
  return `no.${i}: some result`;
};

const debouncedFetchData = debounce(() => {
  fetchData();
  console.log(fetchData());
}, debounceDelay);

// Call when input value has changed.
const handleOnChange = (value) => {
  searchText = value;
  console.log("searchText:", searchText);
  debouncedFetchData();
  i++;
};

// Simulate type something in input element.
setInterval(() => handleOnChange(i), inputSpeed);
