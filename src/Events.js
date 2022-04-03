/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
   const button_tag = document.createElement('button')
   button_tag.textContent ='Удали меня'
   document.body.append(button_tag)
   button_tag.addEventListener('click', () => button_tag.remove())
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
   const sp = document.createElement('ul')
   document.body.append(sp)
   for (let i=0;i<arr.length;i++)
   {
      const el = document.createElement('li')
      el.textContent = arr[i]
      sp.append(el)
   }
   document.querySelectorAll('li').forEach((element) => {
      element.addEventListener('mouseover', function () {
         element.setAttribute('title',element.textContent)
      });
  });
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
   const link = document.createElement('a')
   link.setAttribute('href', "https://tensor.ru/")
   link.text = 'tensor'
   document.body.append(link)
   let flag = true
   link.addEventListener('click', ()=> {
      if (flag==true) 
         link.textContent=link.textContent+" https://tensor.ru/"
      else 
         flag = false
      })
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
   const el_ul = document.createElement('ul')
   document.body.append(el_ul)
   const el_li = document.createElement('li')
   el_li.textContent="Пункт"
   el_ul.append(el_li)
   const el_btn = document.createElement('button')
   el_btn.textContent = "Добавить пункт"
   document.body.append(el_btn)
   el_li.addEventListener('click', ()=> { el_li.textContent +="!"})
   el_btn.addEventListener('click',()=>{
      const el_li = document.createElement('li')
      el_li.textContent="Пункт"
      el_ul.append(el_li)
      el_li.addEventListener('click', ()=> { el_li.textContent +="!"})
   })
   
}
