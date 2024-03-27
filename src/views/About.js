export function About (props) {
      const element = document.createElement('div');
      element.classList.add('home-container');
      console.log(props)

      element.innerHTML = /*html*/ `
            <section class="chat">
            <header class="chat__header">
                  ${props.name}
            </header>
            <main class="chat__main">
            <article class="message message--incoming">
                  <picture class="message__picture">
                        <img class="message__image" src="${props.imageUrl}" />
                  </picture>
                  <div class="message__text">
                        mensaje
                  </div>
            </article>
            <article class="message message--outgoing">
                  <picture class="message__picture">
                        <img class="message__image" src="https://cdn-icons-png.freepik.com/256/10302/10302971.png" />
                  </picture>
                  <div class="message__text">
                  mensaje mio
                  </div>
            </article>
            </main>
            <footer class="chat__footer">
                  <input type="text" class="chat__input" />
                  <button type="button" class="chat__button" >📤</button>
            </footer>
      </section>
      <style>
            .chat {
                  z-index: 10;
                  width: 90vmin;
                  margin: 10vh auto;
                  height: 80vh;
                  position: relative;
                  align-content: center;
                  display: grid;
                  grid-template-rows: 60px 1fr 60px;
                  flex-direction: column;
                  border-radius: 1rem;
                  overflow: hidden;
            }
            
            .chat__header {
                  font-weight: 900;
                  background: #DFDADA;
                  display: flex;
                  justify-content: flex-start;
                  align-items: center;
                  padding-inline: 1rem;
                  font-size: 1.5rem;
            }

            .chat__main {
                  background: rgb(133, 19, 19);
                  padding-inline: 1rem;
                  backdrop-filter: brightness(0.5);
                  background-blend-mode: overlay;
                  background-size: 80px;
                  /*background-image: url(https://cdn.iconscout.com/icon/free/png-256/free-star-3661048-3095468.png);
                  */
                  display: flex;
                  flex-direction: column;
            }

            .message {
                  padding: 1rem;
            }

            .message--outgoing {
                  direction: rtl;
            }
            
            .message--outgoing .message__text{
                  direction: ltr;
            }

            .message__picture {}

            .message__image {
                  width: 40px;
                  height: 40px;
            }

            .message__text {
                  background: white;
                  width: 80%;
                  padding: 1rem;
                  border-radius: 1rem;
            }

            .chat__footer {
                  
                  background: #DFDADA;
                  position: unset;
                  padding-inline: 1rem;
                  display: flex;
                  gap: 1rem;

            }

            .chat__input {
                  margin-block: .5rem;
                  background: #BEB9B9;
                  width: calc(100% - 6rem);;
                  font-size: 1.3rem;
            }

            .chat__button { 
                  margin-block: .5rem;
                  width: 3rem;
                  font-size: 1.3rem;
                  border: unset;
                  cursor: pointer;
            }

      </style>
      `;
      return element;

}
