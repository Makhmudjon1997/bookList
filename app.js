window.addEventListener('DOMContentLoaded', () => {

    let title = document.querySelector('#title');
    let author = document.querySelector('#author');
    let year = document.querySelector('#year');
    let btn = document.querySelector('.btn');
    let bookList = document.querySelector('#book-list');

    btn.addEventListener('click', (event) =>{
        event.preventDefault()

        //Basic validation
        if(title.value == '' && author.value == '' && year.value == ''){
            alert('Please, input your information')
        } else{
            let newRow = document.createElement('tr');

            //Creating newTitle
            let newTitle = document.createElement('td');
            newTitle.innerHTML = title.value;
            newRow.appendChild(newTitle);

            //Creating newAuthor
            let newAuthor = document.createElement('td');
            newAuthor.innerHTML = author.value;
            newRow.appendChild(newAuthor);

            //Creating newYear
            let newYear = document.createElement('td');
            newYear.innerHTML = year.value;
            newRow.appendChild(newYear);

            //Displaying in UI
            bookList.appendChild(newRow)

            title.value = ''
            author.value = ''
            year.value = ''
        }
    })
})


