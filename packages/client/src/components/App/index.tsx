import { FC, useEffect, useState } from 'react';

import { API_URL } from '~/config';
import { Logger } from '~/utils';

export const AppRoot = () => {

  const [quote, setQuote] = useState<string>('');
  const [character, setCharacter] = useState<string>();
  const [list, setList] = useState<[]>([])
  const [lightMode, setLighting] = useState<string>('dark')

  useEffect(() => {
    async function getListOfCharacters () {
      const charactersFetch = await fetch("http://localhost:3000/characters");
      const charactersData = await charactersFetch.json();

      setList(charactersData)
    }

    getListOfCharacters()
    getQuote()
  }, [setList, setQuote])

  async function getQuote () {
    const quoteFetch = await fetch("http://localhost:3000/quote");
    const quoteData = await quoteFetch.json();

    
    setQuote(quoteData.quote)
    setCharacter(quoteData.character)
  }

  async function getCharacterQuote (employee: string) {
    const quoteFetch = await fetch(`http://localhost:3000/quote?characters=${employee}`);
    const quoteData = await quoteFetch.json();
    
    setQuote(quoteData.quote)
    setCharacter(quoteData.character)
  }

  function changeLighting () {
    if (lightMode == 'dark') {
      setLighting('light')
    } else {
      setLighting('dark')
    }
  }

  return (
    <>
      <div className={lightMode}>
        <div className="dark:bg-black">
          <div className="h-screen transition ease-in-out px-10 py-5 max-w-7xl m-auto">
            <div className="flex justify-between items-center">
              <div><h1 className='text-violet-500'>Office Quote Generator</h1></div>
              <button onClick={changeLighting} className="overflow-hidden h-6 w-6 rounded-full relative">
                <div className="absolute bottom-0 dark:top-0">
                  <svg className="fill-white inline align-baseline" height="15px" width="15px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 56 56">
                    <path d="M29,28c0-11.917,7.486-22.112,18-26.147C43.892,0.66,40.523,0,37,0C21.561,0,9,12.561,9,28
                      s12.561,28,28,28c3.523,0,6.892-0.66,10-1.853C36.486,50.112,29,39.917,29,28z"/>
                  </svg>

                  <svg className="fill-white inline" height="15px" width="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" fill="#1C274C"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM19.25 12C19.25 11.5858 19.5858 11.25 20 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20C19.5858 12.75 19.25 12.4142 19.25 12ZM12 19.25C12.4142 19.25 12.75 19.5858 12.75 20V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20C11.25 19.5858 11.5858 19.25 12 19.25Z" fill="#1C274C"/>
                    <g opacity="0.5">
                    <path d="M3.66919 3.7156C3.94869 3.4099 4.42309 3.38867 4.72879 3.66817L6.95081 5.69975C7.25651 5.97925 7.27774 6.45365 6.99824 6.75935C6.71874 7.06505 6.24434 7.08629 5.93865 6.80679L3.71663 4.7752C3.41093 4.4957 3.38969 4.0213 3.66919 3.7156Z" fill="#1C274C"/>
                    <path d="M20.3319 3.7156C20.6114 4.0213 20.5902 4.4957 20.2845 4.7752L18.0624 6.80679C17.7567 7.08629 17.2823 7.06505 17.0028 6.75935C16.7233 6.45365 16.7446 5.97925 17.0503 5.69975L19.2723 3.66817C19.578 3.38867 20.0524 3.4099 20.3319 3.7156Z" fill="#1C274C"/>
                    <path d="M17.0261 17.0247C17.319 16.7318 17.7938 16.7319 18.0867 17.0248L20.3087 19.2471C20.6016 19.54 20.6016 20.0148 20.3087 20.3077C20.0158 20.6006 19.5409 20.6006 19.248 20.3076L17.026 18.0854C16.7331 17.7924 16.7332 17.3176 17.0261 17.0247Z" fill="#1C274C"/>
                    <path d="M6.97521 17.0249C7.2681 17.3177 7.2681 17.7926 6.97521 18.0855L4.75299 20.3077C4.46009 20.6006 3.98522 20.6006 3.69233 20.3077C3.39943 20.0148 3.39943 19.54 3.69233 19.2471L5.91455 17.0248C6.20744 16.732 6.68232 16.732 6.97521 17.0249Z" fill="#1C274C"/>
                    </g>
                  </svg>
                </div>
              </button>
            </div>
            
            <div className="h-3/4 flex flex-col justify-center overflow-y-auto">
              <div className="min-h-0 py-3">
                <h1 className="text-violet-500 text-center text-2xl">{quote}</h1>
                <h2 className="text-green-500 text-center text-1xl italic">{character}</h2>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 justify-evenly bottom-5 w-full gap-x-10 gap-y-5">
                {list.map((item) => (
                  <button className="dark:text-white text-yellow-200  bg-indigo-400 dark:bg-slate-900 p-1 rounded-md" key={item} onClick={() => getCharacterQuote(item)}>
                    {item}
                  </button>
                ))}
              </div>

              <button className="dark:text-white text-yellow-200 bg-indigo-400 dark:bg-slate-900  p-1 rounded-md w-full mt-5" onClick={()=> getQuote()}>
                Random
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};
