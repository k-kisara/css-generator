import React from 'react';

type State = {
  R: number | null;
  G: number | null;
  B: number | null;
  Opacity: number | null;
};

const Component: React.FC = () => {
  const [color, setColor] = React.useState<State>({
    R: null,
    G: null,
    B: null,
    Opacity: null
  });

  const colorCode = `rgba(${color.R}, ${color.G}, ${color.B}, ${color.Opacity})`;

  const styles = {
    pallete: {
      backgroundColor: colorCode
    }
  };

  const onChangeProperty = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setColor(prev => ({
      ...prev,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <>
      <div style={styles.pallete}>
        {Object.keys(color).map(item => (
          <p key={item}>
            {item}: <input name={item} type='number' onChange={onChangeProperty} />
          </p>
        ))}
      </div>
      {!Object.values(color).includes(null) && (
        <div className='source'>
          <code id='code'>
            background-color: {colorCode};<br />
            color: {colorCode};
          </code>
          <button>Copy!</button>
        </div>
      )}
    </>
  );
};

export default Component;
