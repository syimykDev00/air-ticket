import React, { useRef, useState } from 'react';
import { PiExport } from "react-icons/pi";
import InfoSidebar from './InfoSidebar';

const VoluntaryReport = () => {

    const fileRef = useRef(null)
    const [fileName, setFileName] = useState('')

    const handleFileChange = (e) => {
        setFileName(e.target.files[0]?.name || '')
    }

    return (
        <section id='voluntaryReport'>
            <div className='container'>
                <div className='voluntaryReportBg'></div>
                <div className='voluntaryReport'>
                    <h1>Как работает добровольное донесение?</h1>
                     <div className='voluntaryReport-general'>
                          <div className='voluntaryReport-group-one'>
                        <div className='voluntaryReport-block-general'>
                            <div className='voluntaryReport-block'>
                                <h3>Если вы заметили что-то странное</h3>
                                <p>Если во время путешествия вы столкнулись
                                    с ситуацией, угрожающей безопасности 
                                    (неисправность оборудования, нарушения
                                    правил досмотра и т.д.), воспользуйтесь
                                    системой добровольных сообщений.</p>
                            </div>
                            <div className='voluntaryReport-block'>
                                <h3>Зачем это нужно?</h3>
                                <p>Ваша информация поможет авиакомпаниям и аэропортам
                                  исправить ошибки до того, как они приведут к происшествию.
                                  Такие сообщения направлены на улучшение системы, а не на
                                  поиск виновных.</p>
                            </div>
                        </div>
                        <h2>Опишите проблему и прикрепите файл</h2>
                        <div className='voluntaryReport-inputs'>
                            <input type="text" placeholder='Опишите проблему или ситуацию'/>
                        </div>
                        <div className='voluntaryReport-inputs'>
                            <input type="text" placeholder='Напишите как можно это исправить'/>
                        </div>
                        <button
                        type='button'
                        className='voluntaryReport-btn'
                        onClick={() => fileRef.current.click()}
                        >
                             Прикрепить файл
                             <PiExport />
                        </button>
                        <input 
                        ref={fileRef}
                        type="file"
                        hidden
                        onChange={handleFileChange}
                        />
                        {fileName && (
                            <p className='fileName'>{fileName}</p>
                        )}
                    </div>
                     <aside className='info-sidebar-voluntary'>
                         <InfoSidebar />
                     </aside>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VoluntaryReport;