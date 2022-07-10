import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Home() {

    /* Multi-languaje Support */
    const { t, i18n } = useTranslation();

    const changeLanguage = (languaje) => {
        i18n.changeLanguage(languaje)
    };

    return (
        <div>
            <h4>{t('Home')}</h4>
            <button onClick={() => { changeLanguage('es_ec') }}>Español Ecuador</button>
            <button onClick={() => { changeLanguage('es_ve') }}>Español Venezuela</button>
            <button onClick={() => { changeLanguage('es_ar') }}>Español Argentina</button>
        </div>
    )
}
