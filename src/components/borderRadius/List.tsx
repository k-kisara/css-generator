import * as React from 'react';

type State = {
    topLeft: number | null;
    topRight: number | null;
    bottomRight: number | null;
    bottomLeft: number | null;
};

const Component: React.FC = () => {
    const [length, setLength] = React.useState<State>({
        topLeft: null,
        topRight: null,
        bottomRight: null,
        bottomLeft: null
    });

    const onChangeProperty = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.persist();
        setLength(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    };

    const code = `${length.topLeft}px ${length.topRight}px ${length.bottomRight}px ${length.bottomLeft}px`;

    return (
        <>
            <div className='select'>
                {Object.keys(length).map(item => (
                    <p key={item}>
                        {item}: <input name={item} type='number' onChange={onChangeProperty} />
                        px
                    </p>
                ))}
            </div>
            {!Object.values(length).includes(null) && (
                <div>
                    <code id='code'>
                        -webkit-border-radius: {code};<br />
                        border-radius: {code};
                    </code>
                    <button>Copy!</button>
                </div>
            )}
        </>
    );
};

export default Component;
