import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import peach from '../graphics/characters/Luigi/Luigi-5.png'
import input from '../graphics/inputs/png/aerial/back-aerial.png'
import { useParams } from 'react-router'

import { allCharacterPortrait } from '../components/allCharacterPortrait'

export function Character() {
  const params = useParams()
  const id = params.characterId

  const [character, setCharacter] = useState({})

  function getCharacters() {
    fetch(`/api/Characters/${id}`)
      .then(response => response.json())
      .then(apiData => {
        setCharacter(apiData)
        console.log(apiData)
      })
  }

  // console.log(characters)

  useEffect(getCharacters, [])

  return (
    <div className="character-combos">
      <header
        className="character-header"
        style={{
          backgroundImage: `url(${allCharacterPortrait[character.name]})`,
          // Change position Y to match the character portrait
          backgroundPositionY: `${character.yPosition}%`,
        }}
      >
        <h1>{character.name}</h1>
      </header>

      <div className="search-container bg-grey">
        <input className="bg-yellow" type="text" placeholder="Search" />
        <div>
          <button className="bg-red button white-text">Popular</button>
          <button className="bg-red button white-text">Newest</button>
        </div>
      </div>

      <section className="combos">
        <div className="combo">
          <div className="vote bg-yellow">
            <svg
              aria-hidden="true"
              className="m0 svg-icon iconArrowUpLg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <path d="M2 26h32L18 10 2 26z"></path>
            </svg>
            <h3 className="black-text">42</h3>
            <svg
              aria-hidden="true"
              className="m0 svg-icon iconArrowDownLg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <path d="M2 10h32L18 26 2 10z"></path>
            </svg>
          </div>

          <div className="information">
            <header>
              <Link to="/peach/2">
                <h3>Down-tilt Ground Float Nair</h3>
              </Link>
              <div className="tag bg-pink white-text">Hard</div>
            </header>

            <div className="combo-inputs">
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
            </div>

            <footer>
              <p className="white-text">Posted by Breadkenty 2 hours ago</p>
            </footer>
          </div>
        </div>
        <div className="combo">
          <div className="vote bg-yellow">
            <svg
              aria-hidden="true"
              className="m0 svg-icon iconArrowUpLg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <path d="M2 26h32L18 10 2 26z"></path>
            </svg>
            <h3 className="black-text">42</h3>
            <svg
              aria-hidden="true"
              className="m0 svg-icon iconArrowDownLg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <path d="M2 10h32L18 26 2 10z"></path>
            </svg>
          </div>

          <div className="information">
            <header>
              <Link to="/peach/2">
                <h3>Down-tilt Ground Float Nair</h3>
              </Link>
              <div className="tag bg-pink white-text">Hard</div>
            </header>

            <div className="combo-inputs">
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
            </div>

            <footer>
              <p className="white-text">Posted by Breadkenty 2 hours ago</p>
            </footer>
          </div>
        </div>
        <div className="combo">
          <div className="vote bg-yellow">
            <svg
              aria-hidden="true"
              className="m0 svg-icon iconArrowUpLg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <path d="M2 26h32L18 10 2 26z"></path>
            </svg>
            <h3 className="black-text">42</h3>
            <svg
              aria-hidden="true"
              className="m0 svg-icon iconArrowDownLg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <path d="M2 10h32L18 26 2 10z"></path>
            </svg>
          </div>

          <div className="information">
            <header>
              <Link to="/peach/2">
                <h3>Down-tilt Ground Float Nair</h3>
              </Link>
              <div className="tag bg-pink white-text">Hard</div>
            </header>

            <div className="combo-inputs">
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
            </div>

            <footer>
              <p className="white-text">Posted by Breadkenty 2 hours ago</p>
            </footer>
          </div>
        </div>
        <div className="combo">
          <div className="vote bg-yellow">
            <svg
              aria-hidden="true"
              className="m0 svg-icon iconArrowUpLg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <path d="M2 26h32L18 10 2 26z"></path>
            </svg>
            <h3 className="black-text">42</h3>
            <svg
              aria-hidden="true"
              className="m0 svg-icon iconArrowDownLg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <path d="M2 10h32L18 26 2 10z"></path>
            </svg>
          </div>

          <div className="information">
            <header>
              <Link to="/peach/2">
                <h3>Down-tilt Ground Float Nair</h3>
              </Link>
              <div className="tag bg-pink white-text">Hard</div>
            </header>

            <div className="combo-inputs">
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
            </div>

            <footer>
              <p className="white-text">Posted by Breadkenty 2 hours ago</p>
            </footer>
          </div>
        </div>
        <div className="combo">
          <div className="vote bg-yellow">
            <svg
              aria-hidden="true"
              className="m0 svg-icon iconArrowUpLg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <path d="M2 26h32L18 10 2 26z"></path>
            </svg>
            <h3 className="black-text">42</h3>
            <svg
              aria-hidden="true"
              className="m0 svg-icon iconArrowDownLg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <path d="M2 10h32L18 26 2 10z"></path>
            </svg>
          </div>

          <div className="information">
            <header>
              <Link to="/peach/2">
                <h3>Down-tilt Ground Float Nair</h3>
              </Link>
              <div className="tag bg-pink white-text">Hard</div>
            </header>

            <div className="combo-inputs">
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
            </div>

            <footer>
              <p className="white-text">Posted by Breadkenty 2 hours ago</p>
            </footer>
          </div>
        </div>
        <div className="combo">
          <div className="vote bg-yellow">
            <svg
              aria-hidden="true"
              className="m0 svg-icon iconArrowUpLg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <path d="M2 26h32L18 10 2 26z"></path>
            </svg>
            <h3 className="black-text">42</h3>
            <svg
              aria-hidden="true"
              className="m0 svg-icon iconArrowDownLg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <path d="M2 10h32L18 26 2 10z"></path>
            </svg>
          </div>

          <div className="information">
            <header>
              <Link to="/peach/2">
                <h3>Down-tilt Ground Float Nair</h3>
              </Link>
              <div className="tag bg-pink white-text">Hard</div>
            </header>

            <div className="combo-inputs">
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
            </div>

            <footer>
              <p className="white-text">Posted by Breadkenty 2 hours ago</p>
            </footer>
          </div>
        </div>
        <div className="combo">
          <div className="vote bg-yellow">
            <svg
              aria-hidden="true"
              className="m0 svg-icon iconArrowUpLg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <path d="M2 26h32L18 10 2 26z"></path>
            </svg>
            <h3 className="black-text">42</h3>
            <svg
              aria-hidden="true"
              className="m0 svg-icon iconArrowDownLg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <path d="M2 10h32L18 26 2 10z"></path>
            </svg>
          </div>

          <div className="information">
            <header>
              <Link to="/peach/2">
                <h3>Down-tilt Ground Float Nair</h3>
              </Link>
              <div className="tag bg-pink white-text">Hard</div>
            </header>

            <div className="combo-inputs">
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
              <div
                className="combo-input"
                style={{
                  backgroundImage: `url(${input})`,
                }}
              />
            </div>

            <footer>
              <p className="white-text">Posted by Breadkenty 2 hours ago</p>
            </footer>
          </div>
        </div>
      </section>
    </div>
  )
}
