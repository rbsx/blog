import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'

export default () =>
    <nav className={styles.nav}>
        <header className={styles.nav__header}>
            <h2>Об этом блоге</h2>
            <article className={styles.nav__about}>
                Вы читаете блог RBSX – самого популярного в России
                 разработчика для сервисов организации мероприятий.
                Здесь я делюсь знаниями в сфере event-менеджмента, 
                полезными инструментами и ссылками, а также 
                рассказываем о новых возможностях. 
                Все советы основаны на опыте 60 000 клеток мозга,
                которые доверяют RBSX. Оставайтесь в курсе!
            </article>
            <div className={styles.nav__social}>
                <a href="https://www.facebook.com/xrbsx" target="_blank" rel="noopener">Facebook</a>
                <a href="https://vk.com/airds" target="_blank" rel="noopener">Vkontakte</a>
                <a href="https://twitter.com/_rbsx" target="_blank" rel="noopener">Twitter</a>
                <a href="https://github.com/" target="_blank" rel="noopener">Github</a>
                <a href="https://t.me/rbsxx" target="_blank" rel="noopener">Telegram</a>
            </div>
        </header>
        <main className={styles.nav__subscribe}>
            <h4>Подпишитесь на рассылку</h4>
            <div className={styles.nav__subscribe_text}>
                Ежемесячные письма с новостями 
                разработчика и полезными инструментами 
                для разработчиков сервисов для организаторов 
                мероприятий.
            </div>
            <input className={styles.nav__subscribe_input} type="text" placeholder="Введите ваш e-mail" disabled />
            <button className={styles.nav__subscribe_btn}>Подписаться</button>
        </main>

        <section className={styles.nav__tags}>
            <h4>Тэги</h4>
            <ul className={styles.nav__tags_list}>
                <li>
                    <a href="/">
                        tags
                        <span className={styles.nav__tags_amount}>
                            2
                        </span>                
                    </a>
                </li>
                <li>will</li>
                <li>be</li>
                <li>soon</li>
            </ul>
        </section>
    </nav>