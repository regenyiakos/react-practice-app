'use client';
import '../../styles/divek2/styles.css';

export default function Divek2Client() {
    return (
        <div className='div2-container'>
            <div className='div2-content'>
                {/* első szekció */}
                <div className='div2-section'>
                    {/* balos nagy hosszúkás téglalap */}
                    <div
                        style={{
                            width: '30%',

                            backgroundColor: 'red',
                        }}
                    ></div>
                    {/* jobbos nagy téglalap */}
                    <div
                        style={{
                            width: '70%',
                            backgroundColor: 'red',
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        {/* jobbos felső */}
                        <div
                            style={{
                                width: '100%',
                                height: '250px',
                                backgroundColor: 'green',
                            }}
                        ></div>
                        {/* jobbos középső */}
                        <div
                            style={{
                                width: '100%',
                                backgroundColor: 'blue',
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '10px',
                            }}
                        >
                            <div
                                style={{
                                    width: '50%',
                                    height: '250px',
                                    backgroundColor: 'olive',
                                }}
                            ></div>
                            <div
                                style={{
                                    width: '50%',
                                    height: '250px',
                                    backgroundColor: 'orange',
                                }}
                            ></div>
                        </div>
                        {/* jobbos alsó */}
                        <div
                            style={{
                                width: '100%',
                                backgroundColor: 'blue',
                                display: 'flex',
                                flexDirection: 'row',
                                gap: '10px',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    width: '50%',
                                    backgroundColor: 'pink',
                                    alignSelf: 'stretch',
                                }}
                            ></div>
                            <div
                                style={{
                                    display: 'flex',
                                    width: '50%',

                                    flexDirection: 'column',
                                }}
                            >
                                <div
                                    style={{
                                        width: '100%',
                                        height: '125px',
                                        backgroundColor: 'white',
                                    }}
                                ></div>
                                <div
                                    style={{
                                        width: '100%',
                                        height: '125px',
                                        backgroundColor: 'black',
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* alsó szekció */}
                <div className='div2-section'>
                    <div
                        style={{
                            width: '60%',
                            height: '250px',
                            backgroundColor: 'yellow',
                        }}
                    ></div>
                    <div
                        style={{
                            width: '40%',
                            height: '250px',
                            backgroundColor: 'blue',
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
