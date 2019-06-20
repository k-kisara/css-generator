import React from 'react';

type State = {
  horizontalLength: number | null;
  verticalLength: number | null;
  blurRadius: number | null;
  shadowColor: string | null;
};

const Component: React.FC = () => {
  const [property, setProperty] = React.useState<State>({
    horizontalLength: null,
    verticalLength: null,
    blurRadius: null,
    shadowColor: null
  });

  const code = `${property.horizontalLength}px ${property.verticalLength}px ${property.blurRadius}px #${
    property.shadowColor
  }`;

  const styles = {
    pallete: {
      textShadow: code
    }
  };

  const onChangeProperty = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setProperty(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <>
      <div>
        <p>
          Horizontal Length: <input id='ho' name='horizontalLength' type='number' onChange={onChangeProperty} />
        </p>
        <p>
          Vertical Length: <input name='verticalLength' type='number' onChange={onChangeProperty} />
        </p>
        <p>
          Blur Radius: <input name='blurRadius' type='number' onChange={onChangeProperty} />
        </p>
        <p>
          Shadow Color: <input name='shadowColor' type='string' onChange={onChangeProperty} />
        </p>
      </div>
      {!Object.values(property).includes(null) && (
        <div className='source'>
          <code id='code' style={styles.pallete}>
            text-shadow: {code};<br />
          </code>
          <button>Copy!</button>
        </div>
      )}
    </>
  );
};

export default Component;
