var helpers = {
  updateElements: function(className, content) {
    let array = document.getElementsByClassName(className);
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      element.innerHTML = content;
    }
  },
  updateImages: function(className, src) {
    let array = document.getElementsByClassName(className);
    for (let index = 0; index < array.length; index++) {
      const element = array[index];
      element.src = src;
    }
  },
  buildListItem(obj) {
    monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    var { date, city, country, currency, quotation, temperature } = obj;
    let d = new Date().getUTCDate(date)
    let month = monthNames[new Date().getUTCMonth(date)]
    let year = new Date().getUTCFullYear(date)

    console.log("date", new Date().getUTCMonth(date));
    return `<li class="collection-item">
        <div
          class="center-align w-30 pr3"
          style="display: inline-block; border-right: 1px solid #e0e0e0;"
        >
          <h4 class="ma0">
            ${d}
          </h4>
          <p class="mb0 mt1">${month}, ${year}</p>
        </div>
        <div class="pl3 grey-text text-darken-2 w-60" style="display: inline-block;">
          <h6 class="pt0">${city}, ${country}</h6>
          <p class="ma0">
            <span class="black-text">Currency: </span>
            <span class="cur_name">${currency}</span>
          </p>
          <p class="ma0">
            <span class="black-text">Quotation: </span>
            <span class="cur_name">${quotation}</span>
          </p>
          <p class="ma0">
            <span class="black-text">Temp: </span>
            <span class="cur_name">${temperature}</span>°
          </p>
        </div>
      </li>`;
  }
};
