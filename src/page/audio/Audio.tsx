import React, {useRef, useState, useEffect} from "react"
import styles from './Audio.module.css'
import LevelPicker from "../../UI/levelPicker/LevelPicker";
import { audioGet } from "../../helpers/firebase";
const Audio = () => {
    const [level,setLevel] = useState<string>('B1');
    const [state,setState] = useState<number>(0);
    const [lives,setLives] = useState<number>(5);
    const [word,setWord] = useState<any>(null);
    const varCont = useRef<any>(null);
    const generator = audioGet();
    const player = useRef<HTMLAudioElement>(null);

    useEffect(()=>{
        async function fetch(){
        setWord(await generator.next())
    }
    fetch()
    }
    ,[])

    const startGame = async () =>{
        setWord(await generator.next());
        setState(1);
    }
    
    const validFn = async (answer:number) =>{
        await setState(1.5)
        if(answer !== word.value.right){
            if(varCont.current)
            varCont.current.childNodes[answer].classList.add(`${styles.var_wrong}`)
            setLives(lives - 1);
        }
        if(varCont.current){
            varCont.current.childNodes[word.value.right].classList.add(`${styles.var_right}`);
        }
       

    }

    const play = () =>{
        if(player.current)
        player.current.play()
    }

    const next = () =>{
        if(varCont.current){
        varCont.current.childNodes[word.value.right].classList.remove(`${styles.var_right}`);
        varCont.current.childNodes.forEach((el:Element)=>{el.classList.remove(`${styles.var_wrong}`)})
        }
        startGame()
        
        
    }



    if(state === 0)
    return (
    <div className={styles.screen}>
        <div className={styles.sprint_start}>
            <img src="/images/12.png" alt="Sorry" />
            <div className={styles.sprint_main}>
                <h1 className={styles.sprint_main_title}>Sprint</h1>
                <h1 className={styles.sprint_main_teg}>audition task</h1>
            </div>
            <h1 className={styles.subtitle}>The Audio-Call training develops vocabulary and improves listening comprehension.</h1>
            <LevelPicker rePick={setLevel} state={level}/>
            <button onClick={()=>{startGame()}} className={styles.start}>Get started</button>
        </div> 
    </div>
  )



  if((state === 1 || state === 1.5) && (lives!==0 || state === 1.5))
  return (
    <div className={styles.screen}>
        <div className={styles.game_screen}>
        {state===1
            ?
            <div onClick={()=>{play()}} className={styles.play_container}>
            
                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                <path d="M29.4139 5.84006C29.3711 5.58301 29.2736 5.33813 29.1281 5.12194C28.9827 4.90574 28.7925 4.72325 28.5705 4.58677C28.3485 4.4503 28.0998 4.363 27.8412 4.33077C27.5827 4.29854 27.3202 4.32213 27.0715 4.39994L14.3109 8.38669C13.9399 8.50252 13.6156 8.73393 13.3854 9.04712C13.1551 9.36031 13.0311 9.73889 13.0312 10.1276V24.9517C12.2099 24.3357 11.2047 24.0151 10.1784 24.0417C9.15215 24.0684 8.16494 24.4408 7.37674 25.0986C6.58854 25.7564 6.04554 26.6611 5.83571 27.6661C5.62588 28.671 5.76152 29.7174 6.22064 30.6356C6.67976 31.5539 7.43547 32.2902 8.36533 32.7253C9.2952 33.1604 10.3447 33.2688 11.3439 33.033C12.3431 32.7971 13.2333 32.2308 13.8704 31.4257C14.5075 30.6207 14.8542 29.6242 14.8542 28.5975V15.5964L27.6147 11.6078V16.7904C28.24 16.8451 28.8506 16.9599 29.4376 17.1258V6.13902C29.4376 6.03693 29.4285 5.93849 29.4139 5.84006ZM34.9064 26.7746C34.9064 28.9502 34.0422 31.0367 32.5038 32.5751C30.9654 34.1135 28.8788 34.9778 26.7032 34.9778C24.5276 34.9778 22.4411 34.1135 20.9027 32.5751C19.3643 31.0367 18.5 28.9502 18.5 26.7746C18.5 24.599 19.3643 22.5125 20.9027 20.9741C22.4411 19.4357 24.5276 18.5714 26.7032 18.5714C28.8788 18.5714 30.9654 19.4357 32.5038 20.9741C34.0422 22.5125 34.9064 24.599 34.9064 26.7746ZM30.7811 25.9816L25.3233 22.9738C25.1846 22.8971 25.0283 22.8579 24.8698 22.86C24.7113 22.8621 24.5561 22.9056 24.4196 22.986C24.283 23.0664 24.1698 23.1811 24.091 23.3187C24.0123 23.4562 23.9708 23.6119 23.9707 23.7704V29.7861C23.9705 29.9447 24.0118 30.1007 24.0904 30.2385C24.169 30.3763 24.2822 30.4912 24.4188 30.5719C24.5554 30.6525 24.7107 30.6961 24.8693 30.6983C25.028 30.7005 25.1844 30.6613 25.3233 30.5845L30.7811 27.5767C30.9236 27.4979 31.0423 27.3823 31.125 27.2421C31.2077 27.1018 31.2513 26.942 31.2513 26.7792C31.2513 26.6163 31.2077 26.4565 31.125 26.3162C31.0423 26.176 30.9236 26.0605 30.7811 25.9816Z" fill="#2B788B"/>
            </svg>
              
            <h1 className={styles.play_container_text}>Play</h1>
            </div>
            : <div className={styles.answer}>
                <img src={`https://britlex.ru/images/${word.value.en}.jpg`} className={styles.answer_img}/>
                <div className={styles.answer_sub}>
                    <div onClick={()=>{play()}} className={styles.answer_sub_svg}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M19.1845 3.6192C19.1563 3.44999 19.0922 3.2888 18.9964 3.14648C18.9006 3.00416 18.7754 2.88403 18.6293 2.79419C18.4832 2.70435 18.3195 2.64688 18.1492 2.62567C17.979 2.60445 17.8062 2.61998 17.6425 2.6712L9.2425 5.2956C8.99825 5.37185 8.78477 5.52418 8.63322 5.73035C8.48167 5.93651 8.39999 6.18573 8.4001 6.4416V16.2C7.85945 15.7945 7.19774 15.5835 6.52215 15.601C5.84657 15.6186 5.19671 15.8637 4.67786 16.2967C4.15901 16.7298 3.80156 17.3253 3.66343 17.9868C3.5253 18.6484 3.61459 19.3372 3.91682 19.9416C4.21905 20.5461 4.71652 21.0308 5.32863 21.3172C5.94074 21.6037 6.63163 21.675 7.28936 21.5197C7.94709 21.3645 8.53313 20.9917 8.95252 20.4618C9.37192 19.9318 9.6001 19.2758 9.6001 18.6V10.0416L18.0001 7.416V10.8276C18.4117 10.8636 18.8137 10.9392 19.2001 11.0484V3.816C19.2001 3.7488 19.1941 3.684 19.1845 3.6192ZM22.8001 17.4C22.8001 18.8322 22.2312 20.2057 21.2185 21.2184C20.2058 22.2311 18.8323 22.8 17.4001 22.8C15.9679 22.8 14.5944 22.2311 13.5817 21.2184C12.569 20.2057 12.0001 18.8322 12.0001 17.4C12.0001 15.9678 12.569 14.5943 13.5817 13.5816C14.5944 12.5689 15.9679 12 17.4001 12C18.8323 12 20.2058 12.5689 21.2185 13.5816C22.2312 14.5943 22.8001 15.9678 22.8001 17.4ZM20.0845 16.878L16.4917 14.898C16.4004 14.8475 16.2975 14.8217 16.1932 14.8231C16.0889 14.8245 15.9867 14.8531 15.8968 14.906C15.8069 14.959 15.7324 15.0345 15.6806 15.125C15.6287 15.2156 15.6014 15.3181 15.6013 15.4224V19.3824C15.6012 19.4868 15.6284 19.5895 15.6801 19.6802C15.7318 19.7709 15.8064 19.8466 15.8963 19.8997C15.9862 19.9527 16.0885 19.9814 16.1929 19.9829C16.2973 19.9844 16.4003 19.9585 16.4917 19.908L20.0845 17.928C20.1783 17.8761 20.2565 17.8001 20.3109 17.7077C20.3653 17.6154 20.394 17.5102 20.394 17.403C20.394 17.2958 20.3653 17.1906 20.3109 17.0983C20.2565 17.0059 20.1783 16.9299 20.0845 16.878Z" fill="#BABABA"/>
                        </svg>
                    </div>
                    <h1 className={styles.answer_sub_en}>{word.value.en}</h1>
                    <h1 className={styles.answer_sub_ru}>{`- ${word.value.translate[word.value.right]}`}</h1>

                </div>
            </div>
        } 
            <div className={styles.lives}>
                <h1 className={lives==5 ?styles.live : styles.dead}>♥</h1>
                <h1 className={lives>=4 ?styles.live : styles.dead}>♥</h1>
                <h1 className={lives>=3 ?styles.live : styles.dead}>♥</h1>
                <h1 className={lives>=2 ?styles.live : styles.dead}>♥</h1>
                <h1 className={lives>=1 ?styles.live : styles.dead}>♥</h1> 
            </div>
            {state===1
            ?
            <div className={styles.variants_container}>
                <h1 onClick={()=>{validFn(0)}} className={styles.variant}>{word.value.translate[0]}</h1>
                <h1 onClick={()=>{validFn(1)}} className={styles.variant}>{word.value.translate[1]}</h1>
                <h1 onClick={()=>{validFn(2)}} className={styles.variant}>{word.value.translate[2]}</h1>
                <h1 onClick={()=>{validFn(3)}} className={styles.variant}>{word.value.translate[3]}</h1>
                <h1 onClick={()=>{validFn(4)}} className={styles.variant}>{word.value.translate[4]}</h1>
            </div>
            :
            <div ref={varCont} className={styles.variants_container}>
                <h1 className={styles.none_variant}>{word.value.translate[0]}</h1>
                <h1 className={styles.none_variant}>{word.value.translate[1]}</h1>
                <h1 className={styles.none_variant}>{word.value.translate[2]}</h1>
                <h1 className={styles.none_variant}>{word.value.translate[3]}</h1>
                <h1 className={styles.none_variant}>{word.value.translate[4]}</h1>
            </div>
            }
            {state===1
            ?<h1 className={styles.skip}>I don't know</h1>
            :<h1 onClick={()=>{next()}} className={styles.skip}>Next</h1>
            }
            <audio autoPlay ref={player} src={`https://britlex.ru/mp3/${word.value.en}.mp3`}></audio>
           
        </div>            
    </div>
    )
};     

export default Audio;
