// eslint-disable-next-line class-methods-use-this
// eslint-disable-next-line import/prefer-default-export
export const displayList = (listItemObject) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const list of [...Object.keys(listItemObject)]) {
    const listPlaceholder = document.querySelector('.task-list-placeholder');
    const element = document.createElement('li');
    element.classList.add('task-list');
    element.innerHTML = `
                  <div class="task-list-item">
                    <div class="task-div">
                        <input class="checkbox" type="checkbox"/>    
                        <label class="label">${listItemObject[list].description}</label>
                      </div>
                      <i class="fa-solid fa-ellipsis-vertical"></i>
                  </div>
              `;
    listPlaceholder.appendChild(element);
  }
};