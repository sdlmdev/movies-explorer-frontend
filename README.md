# Frontend для дипломного проекта курса «Веб-разработчик» от «Яндекс Практикум»

Проект-портфолио, где пользователи могут регистрироваться и авторизироваться, искать фильмы и сохранять их в избранное.

## Функциональность

* Регистрация и авторизация пользователей
* Поиск фильмов по ключевым словам
* Фильтрация фильмов по длительности
* Редактирование профиля
* Сохрание фильмов в избранное

## Технологии

* HTML5
* CSS3
* JavaScript
* React
* Адаптивная верстка
* Flexbox
* Grid Layout

## Ссылки

* [Макет](https://www.figma.com/file/QPOwI2AgQe2uRB7UzNfUy1/Diploma?type=design&node-id=932-3407&t=9HYdW2QUldFwAG1s-0)
* [Репозиторий Backend](https://github.com/sdlmdev/movies-explorer-api)
* [Проект](http://movies.sdlmdev.site/)

## Установка и запуск проекта

* Клонировать репозиторий: `git clone https://github.com/sdlmdev/movies-explorer-frontend`
* Установить зависимости: `npm install`
* Запустить: `npm run start`

### Роуты

<table>
  <thead>
    <tr>
      <th>Роут</th>
      <th>Описание</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>/</td>
      <td>Отображается страница «О проекте»</td>
    </tr>
    <tr>
      <td>/movies</td>
      <td>Отображается страница «Фильмы»</td>
    </tr>
    <tr>
      <td>/saved-movies</td>
      <td>Отображается страница «Сохранённые фильмы»</td>
    </tr>
    <tr>
      <td>/profile</td>
      <td>Отображается страница с профилем пользователя</td>
    </tr>
    <tr>
      <td>/signin</td>
      <td>Отображается страница авторизации</td>
    </tr>
    <tr>
      <td>/signup</td>
      <td>Отображается страница регистрации</td>
    </tr>
    <tr>
      <td>/*</td>
      <td>Отображается страница не найдено</td>
    </tr>
  </tbody>
</table>

### Статус проекта: завершен
