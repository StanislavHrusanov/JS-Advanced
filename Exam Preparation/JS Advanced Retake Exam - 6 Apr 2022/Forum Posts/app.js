window.addEventListener("load", solve);

function solve() {
  const postTitleField = document.getElementById('post-title');
  const postCategoryField = document.getElementById('post-category');
  const postContentField = document.getElementById('post-content');
  const ulReviewList = document.getElementById('review-list');
  const ulPublishedList = document.getElementById('published-list');
  const publishBtn = document.getElementById('publish-btn');
  const clearBtn = document.getElementById('clear-btn');

  publishBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (postTitleField.value === '' || postCategoryField.value === '' || postContentField.value === '') {
      return;
    }

    const li = elementCreator('li', '', 'class', 'rpost');
    const article = elementCreator('article');
    const title = elementCreator('h4', postTitleField.value);
    const category = elementCreator('p', `Category: ${postCategoryField.value}`);
    const content = elementCreator('p', `Content: ${postContentField.value}`);
    article.appendChild(title);
    article.appendChild(category);
    article.appendChild(content);
    li.appendChild(article);
    const editBtn = elementCreator('button', 'Edit', 'class', 'action-btn edit');
    const approveBtn = elementCreator('button', 'Approve', 'class', 'action-btn approve');
    li.appendChild(approveBtn);
    li.appendChild(editBtn);
    ulReviewList.appendChild(li);

    editBtn.addEventListener('click', (e) => {
      const currList = e.target.parentElement;
      postTitleField.value = currList.children[0].children[0].textContent;
      postCategoryField.value = currList.children[0].children[1].textContent.slice(10);
      postContentField.value = currList.children[0].children[2].textContent.slice(9);;
      e.target.parentElement.remove()
    });

    approveBtn.addEventListener('click', (e) => {
      const currLi = e.target.parentElement;
      ulPublishedList.appendChild(currLi);
      currLi.children[1].remove();
      currLi.children[1].remove();
    });

    postTitleField.value = '';
    postCategoryField.value = '';
    postContentField.value = '';
  });

  clearBtn.addEventListener('click', (e) => {
    Array.from(ulPublishedList.children).forEach(li => li.remove());
  });

  function elementCreator(type, text, attribute, attrName) {
    const newElement = document.createElement(type);
    if (attribute) {
      newElement.setAttribute(attribute, attrName);
    }
    if (text) {
      newElement.textContent = text;
    }
    return newElement;
  }
}