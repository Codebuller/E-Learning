import React from "react"
import styles from './Footer.module.css'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className={styles.foot}>
        <ul className={styles.links}>
            <li className={styles.link}><Link to={'/'}>Home</Link></li>
            <li className={styles.link}>Textbook</li>
            <li className={styles.link}><Link to={'/statistic'}>Statistics</Link></li>
            <li className={styles.link}><Link to={'/sprint'}>Sprint</Link></li>
            <li className={styles.link}><Link to={'/audio'}>Audio-call</Link></li>
            
        </ul>
        <svg className={styles.br} xmlns="http://www.w3.org/2000/svg" width="335" height="2" viewBox="0 0 335 2" fill="none">
            <path d="M0 1L335 0.999985" stroke="#E0E0E0" strokeWidth="1.20466"/>
        </svg>
        <div className={styles.social_media}>
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="24" viewBox="0 0 31 24" fill="none">
                <path d="M12.7139 15.7616C12.7139 16.8431 12.1504 18.6129 10.8169 18.6129C9.48333 18.6129 8.91993 16.8431 8.91993 15.7616C8.91993 14.68 9.48333 12.9102 10.8169 12.9102C12.1504 12.9102 12.7139 14.68 12.7139 15.7616ZM27.905 13.1483C27.905 14.799 27.7396 16.5481 27.0005 18.0644C25.0415 22.0283 19.6556 21.9351 15.7996 21.9351C11.8817 21.9351 6.17529 22.0748 4.13877 18.0644C3.38412 16.5637 3.09467 14.799 3.09467 13.1483C3.09467 10.98 3.81313 8.93081 5.23973 7.2697C4.97095 6.45208 4.84173 5.59306 4.84173 4.74439C4.84173 3.63181 5.095 3.07293 5.59638 2.06384C7.93786 2.06384 9.43681 2.52958 11.2201 3.92677C12.719 3.56971 14.2593 3.40929 15.8048 3.40929C17.2004 3.40929 18.6063 3.55936 19.9605 3.88538C21.7179 2.5037 23.2169 2.06384 25.5325 2.06384C26.0391 3.07293 26.2872 3.63181 26.2872 4.74439C26.2872 5.59306 26.1528 6.43656 25.8892 7.23865C27.3106 8.91529 27.905 10.98 27.905 13.1483ZM24.5815 15.7616C24.5815 13.4898 23.2014 11.4872 20.7824 11.4872C19.8055 11.4872 18.8699 11.6631 17.8878 11.7977C17.1177 11.9167 16.3475 11.9633 15.5567 11.9633C14.771 11.9633 14.0009 11.9167 13.2256 11.7977C12.259 11.6631 11.3131 11.4872 10.331 11.4872C7.91201 11.4872 6.53193 13.4898 6.53193 15.7616C6.53193 20.305 10.6877 21.0036 14.3058 21.0036H16.7972C20.4309 21.0036 24.5815 20.3102 24.5815 15.7616ZM20.312 12.9102C18.9785 12.9102 18.4151 14.68 18.4151 15.7616C18.4151 16.8431 18.9785 18.6129 20.312 18.6129C21.6456 18.6129 22.209 16.8431 22.209 15.7616C22.209 14.68 21.6456 12.9102 20.312 12.9102Z" fill="#BABABA"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="24" viewBox="0 0 31 24" fill="none">
                <path d="M9.20839 13.4866H17.1449V21.1815H13.8737L13.4833 17.8917C13.1116 19.0689 12.4487 19.9424 11.4946 20.5124C10.5404 21.0824 9.37567 21.3674 8.00026 21.3674C6.74875 21.3674 5.63354 21.0886 4.65464 20.531C3.68813 19.9734 2.92608 19.1742 2.36848 18.1333C1.82326 17.0925 1.55066 15.8781 1.55066 14.4903C1.55066 12.2723 2.21359 10.519 3.53944 9.23028C4.86529 7.9416 6.92842 7.29726 9.72882 7.29726C11.3273 7.29726 12.7337 7.55748 13.948 8.07791C15.1747 8.59833 16.2156 9.40376 17.0706 10.4942C16.513 10.7792 15.4226 11.3492 13.7993 12.2042L13.3346 12.4644C12.8514 11.9811 12.2876 11.6218 11.6433 11.3863C10.9989 11.1385 10.3174 11.0146 9.59871 11.0146C8.40916 11.0146 7.5232 11.3306 6.94081 11.9625C6.35843 12.5821 6.06724 13.3503 6.06724 14.2673C6.06724 15.2586 6.37701 16.0578 6.99657 16.665C7.62852 17.2721 8.58884 17.5757 9.87752 17.5757C10.4351 17.5757 10.9741 17.4952 11.4946 17.3341C12.0274 17.173 12.4735 16.8942 12.8328 16.4977H9.20839V13.4866Z" fill="#BABABA"/>
                <path d="M29.4493 6.53615C27.5039 6.47419 25.6143 6.43702 23.7804 6.42463V16.1269H19.1337V6.42463C17.2874 6.43702 15.404 6.47419 13.4833 6.53615V2.63294H29.4493V6.53615Z" fill="#BABABA"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="31" height="24" viewBox="0 0 31 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M25.2273 3.68466C26.3255 3.99844 27.1099 4.7829 27.4237 5.88113C28.0513 7.9207 28.0513 11.9999 28.0513 11.9999C28.0513 11.9999 28.0513 16.079 27.5806 18.1186C27.2668 19.2168 26.4823 20.0013 25.3841 20.315C23.3445 20.7857 15.5 20.7857 15.5 20.7857C15.5 20.7857 7.49861 20.7857 5.61592 20.315C4.51769 20.0013 3.73325 19.2168 3.41947 18.1186C2.9488 16.079 2.94879 11.9999 2.94879 11.9999C2.94879 11.9999 2.94879 7.9207 3.26257 5.88113C3.57635 4.7829 4.36082 3.99844 5.45905 3.68466C7.49862 3.21399 15.3431 3.21399 15.3431 3.21399C15.3431 3.21399 23.3446 3.21399 25.2273 3.68466ZM12.9898 8.92376C12.9898 8.61663 13.3216 8.42408 13.5882 8.57646L18.9714 11.6526C19.2401 11.8061 19.2401 12.1936 18.9714 12.3472L13.5882 15.4233C13.3216 15.5756 12.9898 15.3831 12.9898 15.076V8.92376Z" fill="#BABABA"/>
            </svg>
        </div>
        <h1 className={styles.coopyright}>©2023 Mitrofanov Ivan. Project for my portfolio.</h1>

    </footer>
  )
};

export default Footer;
