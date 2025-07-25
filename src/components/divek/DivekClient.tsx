'use client';
import '../../styles/divek/styles.css';

export default function DivekClient() {
    return (
        <div className='divek-container'>
            <div className='divek-content'>
                <div className='divek-section'>
                    <div
                        style={{
                            width: '50%',
                            height: '200px',
                            backgroundColor: 'red',
                        }}
                    ></div>
                    <div
                        style={{
                            width: '50%',
                            height: '200px',
                            backgroundColor: 'green',
                        }}
                    ></div>
                </div>

                <div
                    className='divek-section'
                    style={{ justifyContent: 'space-between' }}
                >
                    <div
                        style={{
                            width: '100px',
                            height: '200px',
                            backgroundColor: 'olive',
                        }}
                    ></div>
                    <div
                        style={{
                            width: '100px',
                            height: '200px',
                            backgroundColor: 'orange',
                        }}
                    ></div>
                </div>

                <div className='divek-section'>
                    <div
                        style={{
                            display: 'flex',
                            width: '70%',
                            flexDirection: 'column',
                            gap: '10px',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                height: '95px',
                                backgroundColor: 'yellow',
                            }}
                        ></div>
                        <div
                            style={{
                                display: 'flex',
                                height: '95px',
                                backgroundColor: 'brown',
                            }}
                        ></div>
                    </div>
                    <div
                        style={{
                            alignSelf: 'stretch',
                            display: 'flex',
                            width: '30%',
                            backgroundColor: 'gold',
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
